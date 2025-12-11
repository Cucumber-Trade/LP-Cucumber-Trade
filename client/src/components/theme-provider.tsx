import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({ children, ...props }: React.ComponentProps<typeof ThemeProvider>) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
