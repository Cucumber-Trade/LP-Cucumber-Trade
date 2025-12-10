import { forwardRef, useImperativeHandle, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface RotatingTextProps {
  texts: string[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  staggerDuration?: number;
  rotationInterval?: number;
  splitBy?: "characters" | "words" | "lines" | string;
  mainClassName?: string;
  elementLevelClassName?: string;
  splitLevelClassName?: string;
}

const RotatingText = forwardRef<any, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      staggerDuration = 0,
      rotationInterval = 2000,
      splitBy = "characters",
      mainClassName,
      elementLevelClassName,
      splitLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text: string) => {
      if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), (segment) => segment.segment);
      }
      return text.split("");
    };

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex];
      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => (
          <span key={i} className="inline-flex whitespace-nowrap">
            {splitIntoCharacters(word).map((char, j) => (
              <span key={j} className={cn("inline-block", elementLevelClassName)}>
                {char}
              </span>
            ))}
            {i < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ));
      }
      return currentText.split(splitBy).map((part, i) => (
        <span key={i} className={cn("inline-block whitespace-nowrap", elementLevelClassName)}>
          {part}
        </span>
      ));
    }, [texts, currentTextIndex, splitBy, elementLevelClassName]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, rotationInterval);
      return () => clearInterval(intervalId);
    }, [texts, rotationInterval]);

    useImperativeHandle(ref, () => ({
      next: () =>
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length),
      previous: () =>
        setCurrentTextIndex(
          (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
        ),
      jumpTo: (index: number) =>
        setCurrentTextIndex(Math.max(0, Math.min(index, texts.length - 1))),
      reset: () => setCurrentTextIndex(0),
    }));

    return (
      <motion.div
        className={cn(
          "flex flex-wrap whitespace-pre-wrap relative",
          mainClassName
        )}
        {...rest}
        layout
        transition={transition}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>
        <AnimatePresence mode={animatePresenceMode} initial={false}>
          <motion.div
            key={currentTextIndex}
            className={cn(
              "flex flex-wrap whitespace-pre-wrap",
              splitLevelClassName
            )}
            layout
          >
            {elements.map((wordObj, wordIndex) => {
              // We need to drill down to find the actual characters if splitBy is characters
              // but for simplicity in this wrapper, we'll just stagger children
              // Actually, Framer Motion staggered children works best on the parent.
              // But here we are rendering a new div for each text index.
              
              // To properly animate characters, we need to map them to motion components.
              // Let's redo the render part slightly to wrap elements in motion.
              
              const isCharSplit = splitBy === "characters";
              const currentText = texts[currentTextIndex];
              const words = currentText.split(" ");
              
              if (isCharSplit) {
                 return words.map((word, wIndex) => (
                    <span key={wIndex} className="inline-flex whitespace-nowrap">
                        {splitIntoCharacters(word).map((char, cIndex) => (
                            <motion.span
                                key={cIndex}
                                initial={initial}
                                animate={animate}
                                exit={exit}
                                transition={{
                                    ...transition,
                                    delay: (wIndex * 10 + cIndex) * staggerDuration
                                }}
                                className={cn("inline-block", elementLevelClassName)}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wIndex < words.length - 1 && (
                            <span className="inline-block">&nbsp;</span>
                        )}
                    </span>
                 ));
              }
              
              return (
                  <motion.span
                    key={wordIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                        ...transition,
                        delay: wordIndex * staggerDuration
                    }}
                    className={cn("inline-block whitespace-nowrap", elementLevelClassName)}
                  >
                    {wordObj} 
                  </motion.span>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
