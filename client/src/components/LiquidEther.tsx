import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}: any) {
  const mountRef = useRef<HTMLDivElement>(null);
  const webglRef = useRef<any>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rafRef = useRef<number | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const isVisibleRef = useRef(true);
  const resizeRafRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    function makePaletteTexture(stops: string[]) {
      let arr;
      if (Array.isArray(stops) && stops.length > 0) {
        if (stops.length === 1) {
          arr = [stops[0], stops[0]];
        } else {
          arr = stops;
        }
      } else {
        arr = ['#ffffff', '#ffffff'];
      }
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const bgVec4 = new THREE.Vector4(0, 0, 0, 0); // always transparent

    class CommonClass {
        width: number = 0;
        height: number = 0;
        aspect: number = 1;
        pixelRatio: number = 1;
        isMobile: boolean = false;
        breakpoint: number = 768;
        fboWidth: number | null = null;
        fboHeight: number | null = null;
        time: number = 0;
        delta: number = 0;
        container: HTMLElement | null = null;
        renderer: THREE.WebGLRenderer | null = null;
        clock: THREE.Clock | null = null;

      init(container: HTMLElement) {
        this.container = container;
        this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        this.resize();
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(new THREE.Color(0x000000), 0);
        this.renderer.setPixelRatio(this.pixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.display = 'block';
        if (this.container) {
            this.container.appendChild(this.renderer.domElement);
        }
        this.clock = new THREE.Clock();
        this.clock.start();
      }
      resize() {
        if (!this.container) return;
        const rect = this.container.getBoundingClientRect();
        this.width = Math.max(1, Math.floor(rect.width));
        this.height = Math.max(1, Math.floor(rect.height));
        this.aspect = this.width / this.height;
        if (this.renderer) this.renderer.setSize(this.width, this.height, false);
      }
      update() {
        if (!this.clock) return;
        this.delta = this.clock.getDelta();
        this.time += this.delta;
      }
    }
    const Common = new CommonClass();

    class MouseClass {
        mouseMoved: boolean = false;
        coords: THREE.Vector2 = new THREE.Vector2();
        coords_old: THREE.Vector2 = new THREE.Vector2();
        diff: THREE.Vector2 = new THREE.Vector2();
        timer: any = null;
        container: HTMLElement | null = null;
        docTarget: Document | null = null;
        listenerTarget: any = null;
        isHoverInside: boolean = false;
        hasUserControl: boolean = false;
        isAutoActive: boolean = false;
        autoIntensity: number = 2.0;
        takeoverActive: boolean = false;
        takeoverStartTime: number = 0;
        takeoverDuration: number = 0.25;
        takeoverFrom: THREE.Vector2 = new THREE.Vector2();
        takeoverTo: THREE.Vector2 = new THREE.Vector2();
        onInteract: any = null;
        _onMouseMove = this.onDocumentMouseMove.bind(this);
        _onTouchStart = this.onDocumentTouchStart.bind(this);
        _onTouchMove = this.onDocumentTouchMove.bind(this);
        _onTouchEnd = this.onTouchEnd.bind(this);
        _onDocumentLeave = this.onDocumentLeave.bind(this);

      init(container: HTMLElement) {
        this.container = container;
        this.docTarget = container.ownerDocument || null;
        const defaultView =
          (this.docTarget && this.docTarget.defaultView) || (typeof window !== 'undefined' ? window : null);
        if (!defaultView) return;
        this.listenerTarget = defaultView;
        this.listenerTarget.addEventListener('mousemove', this._onMouseMove);
        this.listenerTarget.addEventListener('touchstart', this._onTouchStart, { passive: true });
        this.listenerTarget.addEventListener('touchmove', this._onTouchMove, { passive: true });
        this.listenerTarget.addEventListener('touchend', this._onTouchEnd);
        if (this.docTarget) {
          this.docTarget.addEventListener('mouseleave', this._onDocumentLeave);
        }
      }
      dispose() {
        if (this.listenerTarget) {
          this.listenerTarget.removeEventListener('mousemove', this._onMouseMove);
          this.listenerTarget.removeEventListener('touchstart', this._onTouchStart);
          this.listenerTarget.removeEventListener('touchmove', this._onTouchMove);
          this.listenerTarget.removeEventListener('touchend', this._onTouchEnd);
        }
        if (this.docTarget) {
          this.docTarget.removeEventListener('mouseleave', this._onDocumentLeave);
        }
        this.listenerTarget = null;
        this.docTarget = null;
        this.container = null;
      }
      isPointInside(clientX: number, clientY: number) {
        if (!this.container) return false;
        const rect = this.container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;
        return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      }
      updateHoverState(clientX: number, clientY: number) {
        this.isHoverInside = this.isPointInside(clientX, clientY);
        return this.isHoverInside;
      }
      setCoords(x: number, y: number) {
        if (!this.container) return;
        if (this.timer) window.clearTimeout(this.timer);
        const rect = this.container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const nx = (x - rect.left) / rect.width;
        const ny = (y - rect.top) / rect.height;
        this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
        this.mouseMoved = true;
        this.timer = window.setTimeout(() => {
          this.mouseMoved = false;
        }, 100);
      }
      setNormalized(nx: number, ny: number) {
        this.coords.set(nx, ny);
        this.mouseMoved = true;
      }
      onDocumentMouseMove(event: MouseEvent) {
        if (!this.updateHoverState(event.clientX, event.clientY)) return;
        if (this.onInteract) this.onInteract();
        if (this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
          if (!this.container) return;
          const rect = this.container.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          const nx = (event.clientX - rect.left) / rect.width;
          const ny = (event.clientY - rect.top) / rect.height;
          this.takeoverFrom.copy(this.coords);
          this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
          this.takeoverStartTime = performance.now();
          this.takeoverActive = true;
          this.hasUserControl = true;
          this.isAutoActive = false;
          return;
        }
        this.setCoords(event.clientX, event.clientY);
        this.hasUserControl = true;
      }
      onDocumentTouchStart(event: TouchEvent) {
        if (event.touches.length !== 1) return;
        const t = event.touches[0];
        if (!this.updateHoverState(t.clientX, t.clientY)) return;
        if (this.onInteract) this.onInteract();
        this.setCoords(t.clientX, t.clientY);
        this.hasUserControl = true;
      }
      onDocumentTouchMove(event: TouchEvent) {
        if (event.touches.length !== 1) return;
        const t = event.touches[0];
        if (!this.updateHoverState(t.clientX, t.clientY)) return;
        if (this.onInteract) this.onInteract();
        this.setCoords(t.clientX, t.clientY);
      }
      onTouchEnd() {
        this.isHoverInside = false;
      }
      onDocumentLeave() {
        this.isHoverInside = false;
      }
      update() {
        if (this.takeoverActive) {
          const t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
          if (t >= 1) {
            this.takeoverActive = false;
            this.coords.copy(this.takeoverTo);
            this.coords_old.copy(this.coords);
            this.diff.set(0, 0);
          } else {
            const k = t * t * (3 - 2 * t);
            this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
          }
        }
        this.diff.subVectors(this.coords, this.coords_old);
        this.coords_old.copy(this.coords);
        if (this.coords_old.x === 0 && this.coords_old.y === 0) this.diff.set(0, 0);
        if (this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
      }
    }
    const Mouse = new MouseClass();

    class AutoDriver {
        mouse: MouseClass;
        manager: any;
        enabled: boolean;
        speed: number;
        resumeDelay: number;
        rampDurationMs: number;
        active: boolean = false;
        current: THREE.Vector2 = new THREE.Vector2(0, 0);
        target: THREE.Vector2 = new THREE.Vector2();
        lastTime: number = performance.now();
        activationTime: number = 0;
        margin: number = 0.2;
        _tmpDir: THREE.Vector2 = new THREE.Vector2();

      constructor(mouse: MouseClass, manager: any, opts: any) {
        this.mouse = mouse;
        this.manager = manager;
        this.enabled = opts.enabled;
        this.speed = opts.speed; // normalized units/sec
        this.resumeDelay = opts.resumeDelay || 3000; // ms
        this.rampDurationMs = (opts.rampDuration || 0) * 1000;
        this.pickNewTarget();
      }
      pickNewTarget() {
        const r = Math.random;
        this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
      }
      forceStop() {
        this.active = false;
        this.mouse.isAutoActive = false;
      }
      update() {
        if (!this.enabled) return;
        const now = performance.now();
        const idle = now - this.manager.lastUserInteraction;
        if (idle < this.resumeDelay) {
          if (this.active) this.forceStop();
          return;
        }
        if (this.mouse.isHoverInside) {
          if (this.active) this.forceStop();
          return;
        }
        if (!this.active) {
          this.active = true;
          this.current.copy(this.mouse.coords);
          this.lastTime = now;
          this.activationTime = now;
        }
        if (!this.active) return;
        this.mouse.isAutoActive = true;
        let dtSec = (now - this.lastTime) / 1000;
        this.lastTime = now;
        if (dtSec > 0.2) dtSec = 0.016;
        const dir = this._tmpDir.subVectors(this.target, this.current);
        const dist = dir.length();
        if (dist < 0.01) {
          this.pickNewTarget();
          return;
        }
        dir.normalize();
        let ramp = 1;
        if (this.rampDurationMs > 0) {
          const t = Math.min(1, (now - this.activationTime) / this.rampDurationMs);
          ramp = t * t * (3 - 2 * t);
        }
        const step = this.speed * dtSec * ramp;
        const move = Math.min(step, dist);
        this.current.addScaledVector(dir, move);
        this.mouse.setNormalized(this.current.x, this.current.y);
      }
    }

    const face_vert = `
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`;
    const line_vert = `
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`;
    const mouse_vert = `
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
        vec2 pos = position.xy * scale * 2.0 * px + center;
        vUv = uv;
        gl_Position = vec4(pos, 0.0, 1.0);
    }
`;
    const mouse_frag = `
    precision highp float;
    varying vec2 vUv;
    uniform vec2 force;
    uniform vec2 scale;
    uniform vec2 center;
    void main(){
        if(length(vUv - vec2(0.5)) > 0.5) discard;
        gl_FragColor = vec4(force * scale.x, 0.0, 1.0);
    }
`;
    const copy_frag = `
    precision highp float;
    uniform sampler2D tMap;
    uniform float scale;
    varying vec2 uv;
    void main(){
        vec4 tex = texture2D(tMap, uv);
        gl_FragColor = tex * scale;
    }
`;
    const adv_frag = `
    precision highp float;
    uniform sampler2D tMap;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
        vec2 vUv = uv - dt * texture2D(tMap, uv).xy * px;
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
    const jacobi_frag = `
    precision highp float;
    uniform sampler2D tPressure;
    uniform sampler2D tDivergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
        float pN = texture2D(tPressure, uv + vec2(0.0, px.y)).r;
        float pS = texture2D(tPressure, uv - vec2(0.0, px.y)).r;
        float pE = texture2D(tPressure, uv + vec2(px.x, 0.0)).r;
        float pW = texture2D(tPressure, uv - vec2(px.x, 0.0)).r;
        float pC = texture2D(tPressure, uv).r;
        float div = texture2D(tDivergence, uv).r;
        float newP = (pN + pS + pE + pW - div) * 0.25;
        gl_FragColor = vec4(newP);
    }
`;
    const div_frag = `
    precision highp float;
    uniform sampler2D tVelocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
        float vN = texture2D(tVelocity, uv + vec2(0.0, px.y)).y;
        float vS = texture2D(tVelocity, uv - vec2(0.0, px.y)).y;
        float vE = texture2D(tVelocity, uv + vec2(px.x, 0.0)).x;
        float vW = texture2D(tVelocity, uv - vec2(px.x, 0.0)).x;
        float div = 0.5 * (vE - vW + vN - vS);
        gl_FragColor = vec4(div);
    }
`;
    const grad_frag = `
    precision highp float;
    uniform sampler2D tPressure;
    uniform sampler2D tVelocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
        float pN = texture2D(tPressure, uv + vec2(0.0, px.y)).r;
        float pS = texture2D(tPressure, uv - vec2(0.0, px.y)).r;
        float pE = texture2D(tPressure, uv + vec2(px.x, 0.0)).r;
        float pW = texture2D(tPressure, uv - vec2(px.x, 0.0)).r;
        vec2 vel = texture2D(tVelocity, uv).xy;
        vel.xy -= vec2(pE - pW, pN - pS);
        gl_FragColor = vec4(vel, 0.0, 1.0);
    }
`;
    const display_frag = `
    precision highp float;
    uniform sampler2D tMap;
    uniform sampler2D tFluid;
    uniform sampler2D tPalette;
    uniform vec4 uBgColor;
    varying vec2 uv;
    void main(){
        vec4 fluid = texture2D(tFluid, uv);
        vec2 vel = texture2D(tMap, uv).xy;
        float len = length(vel);
        len = len * 0.005;
        len = clamp(len, 0.0, 1.0);
        float index = len;
        vec4 color = texture2D(tPalette, vec2(index, 0.5));
        color = mix(uBgColor, color, len);
        gl_FragColor = color;
    }
`;

    // Simple WebGL buffer wrapper
    class Buffer {
        fbo: THREE.WebGLRenderTarget;
        swap: THREE.WebGLRenderTarget;
      constructor(w: number, h: number, opts: THREE.RenderTargetOptions) {
        this.fbo = new THREE.WebGLRenderTarget(w, h, opts);
        this.swap = new THREE.WebGLRenderTarget(w, h, opts);
      }
      setSize(w: number, h: number) {
        this.fbo.setSize(w, h);
        this.swap.setSize(w, h);
      }
      get read() {
        return this.fbo;
      }
      get write() {
        return this.swap;
      }
      swapBuf() {
        const tmp = this.fbo;
        this.fbo = this.swap;
        this.swap = tmp;
      }
    }

    class Simulation {
        fbos: any = {};
        options: any = {
            iterations_viscous: iterationsViscous,
            iterations_poisson: iterationsPoisson,
            dt: dt,
            BFECC: BFECC,
            viscous: viscous,
            isBounce: isBounce,
            mouse_force: mouseForce,
            resolution: resolution,
            cursor_size: cursorSize,
            isViscous: isViscous
        };
        materials: any = {};
        quad: THREE.Mesh | any;
        line: THREE.LineSegments | any;
        mouseMesh: THREE.Mesh | any;
        lastUserInteraction: number = 0;
        driver: AutoDriver;

      constructor() {
        // Initialize driver with temporary values, will be overwritten in init
        // This is to satisfy strict property initialization or we could use ! assignment
        this.driver = {} as AutoDriver; 
        this.init();
      }
      init() {
        this.createMaterials();
        this.createMeshes();
        this.resize();
        this.driver = new AutoDriver(Mouse, this, {
          enabled: autoDemo,
          speed: autoSpeed,
          resumeDelay: autoResumeDelay,
          rampDuration: autoRampDuration
        });
        Mouse.onInteract = () => {
          this.lastUserInteraction = performance.now();
          this.driver.forceStop();
        };
      }
      createMeshes() {
        this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.materials.copy);
        this.line = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffffff }));
        this.mouseMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.materials.mouse);
      }
      createMaterials() {
        this.materials.copy = new THREE.RawShaderMaterial({
          vertexShader: face_vert,
          fragmentShader: copy_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            boundarySpace: { value: new THREE.Vector2() },
            tMap: { value: null },
            scale: { value: 1.0 }
          }
        });
        this.materials.adv = new THREE.RawShaderMaterial({
          vertexShader: face_vert,
          fragmentShader: adv_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            boundarySpace: { value: new THREE.Vector2() },
            tMap: { value: null },
            dt: { value: this.options.dt }
          }
        });
        this.materials.jacobi = new THREE.RawShaderMaterial({
          vertexShader: face_vert,
          fragmentShader: jacobi_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            boundarySpace: { value: new THREE.Vector2() },
            tPressure: { value: null },
            tDivergence: { value: null }
          }
        });
        this.materials.div = new THREE.RawShaderMaterial({
          vertexShader: face_vert,
          fragmentShader: div_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            boundarySpace: { value: new THREE.Vector2() },
            tVelocity: { value: null },
            dt: { value: this.options.dt }
          }
        });
        this.materials.grad = new THREE.RawShaderMaterial({
          vertexShader: face_vert,
          fragmentShader: grad_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            boundarySpace: { value: new THREE.Vector2() },
            tPressure: { value: null },
            tVelocity: { value: null },
            dt: { value: this.options.dt }
          }
        });
        this.materials.mouse = new THREE.RawShaderMaterial({
          vertexShader: mouse_vert,
          fragmentShader: mouse_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            center: { value: new THREE.Vector2() },
            scale: { value: new THREE.Vector2() },
            force: { value: new THREE.Vector2() }
          }
        });
        this.materials.display = new THREE.RawShaderMaterial({
          vertexShader: face_vert,
          fragmentShader: display_frag,
          uniforms: {
            px: { value: new THREE.Vector2() },
            boundarySpace: { value: new THREE.Vector2() },
            tMap: { value: null },
            tFluid: { value: null },
            tPalette: { value: paletteTex },
            uBgColor: { value: bgVec4 }
          }
        });
      }
      resize() {
        const w = Common.width * this.options.resolution;
        const h = Common.height * this.options.resolution;
        if (Common.fboWidth !== w || Common.fboHeight !== h) {
          Common.fboWidth = w;
          Common.fboHeight = h;
          const opts = {
            type: THREE.HalfFloatType,
            format: THREE.RGBAFormat,
            depthBuffer: false,
            stencilBuffer: false,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter
          };
          this.fbos.vel = new Buffer(w, h, opts);
          this.fbos.pressure = new Buffer(w, h, opts);
          this.fbos.div = new Buffer(w, h, opts);
          this.fbos.density = new Buffer(w, h, opts);
        }
      }
      update() {
        this.driver.update();
        Mouse.update();
        if (Common.renderer) {
            this.step1();
            this.step2();
            this.step3();
            this.step4();
            this.render();
        }
      }
      step1() {
        // Advection
        const px = new THREE.Vector2(1 / Common.fboWidth!, 1 / Common.fboHeight!);
        this.materials.adv.uniforms.px.value = px;
        this.materials.adv.uniforms.boundarySpace.value.set(0, 0);
        this.materials.adv.uniforms.tMap.value = this.fbos.vel.read.texture;
        this.renderTarget(this.fbos.vel.write, this.materials.adv);
        this.fbos.vel.swapBuf();

        // Mouse force
        if (Mouse.mouseMoved) {
          const mpx = new THREE.Vector2(1 / Common.width, 1 / Common.height);
          this.materials.mouse.uniforms.px.value = mpx;
          this.materials.mouse.uniforms.center.value.copy(Mouse.coords);
          this.materials.mouse.uniforms.scale.value.set(this.options.cursor_size, this.options.cursor_size);
          this.materials.mouse.uniforms.force.value.copy(Mouse.diff).multiplyScalar(this.options.mouse_force);
          this.renderTarget(this.fbos.vel.read, this.materials.mouse); // additive blend
        }
      }
      step2() {
        // Viscous (not fully implemented in original snippet, assuming pass through)
      }
      step3() {
        // Divergence
        const px = new THREE.Vector2(1 / Common.fboWidth!, 1 / Common.fboHeight!);
        this.materials.div.uniforms.px.value = px;
        this.materials.div.uniforms.tVelocity.value = this.fbos.vel.read.texture;
        this.renderTarget(this.fbos.div.write, this.materials.div);
        this.fbos.div.swapBuf();

        // Pressure (Jacobi)
        this.materials.jacobi.uniforms.px.value = px;
        this.materials.jacobi.uniforms.tDivergence.value = this.fbos.div.read.texture;
        for (let i = 0; i < this.options.iterations_poisson; i++) {
          this.materials.jacobi.uniforms.tPressure.value = this.fbos.pressure.read.texture;
          this.renderTarget(this.fbos.pressure.write, this.materials.jacobi);
          this.fbos.pressure.swapBuf();
        }
      }
      step4() {
        // Gradient subtraction
        const px = new THREE.Vector2(1 / Common.fboWidth!, 1 / Common.fboHeight!);
        this.materials.grad.uniforms.px.value = px;
        this.materials.grad.uniforms.tPressure.value = this.fbos.pressure.read.texture;
        this.materials.grad.uniforms.tVelocity.value = this.fbos.vel.read.texture;
        this.renderTarget(this.fbos.vel.write, this.materials.grad);
        this.fbos.vel.swapBuf();
      }
      render() {
        const px = new THREE.Vector2(1 / Common.fboWidth!, 1 / Common.fboHeight!);
        this.materials.display.uniforms.px.value = px;
        this.materials.display.uniforms.tMap.value = this.fbos.vel.read.texture;
        this.materials.display.uniforms.tFluid.value = this.fbos.vel.read.texture; // visualization of velocity
        Common.renderer!.setRenderTarget(null);
        Common.renderer!.render(this.quad, new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1));
        this.quad.material = this.materials.display;
        Common.renderer!.render(this.quad, new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1));
      }
      renderTarget(target: THREE.WebGLRenderTarget, material: THREE.Material) {
        this.quad.material = material;
        Common.renderer!.setRenderTarget(target);
        Common.renderer!.render(this.quad, new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1));
      }
    }

    const Sim = new Simulation();

    const update = () => {
      Common.update();
      Sim.update();
      rafRef.current = requestAnimationFrame(update);
    };

    Common.init(mountRef.current);
    Mouse.init(mountRef.current);
    
    // Initial start
    update();

    const handleResize = () => {
      if (mountRef.current) {
        Common.resize();
        Sim.resize();
      }
    };

    resizeObserverRef.current = new ResizeObserver(handleResize);
    resizeObserverRef.current.observe(mountRef.current);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      Mouse.dispose();
      Common.renderer?.dispose();
    };
  }, [
    mouseForce,
    cursorSize,
    isViscous,
    viscous,
    iterationsViscous,
    iterationsPoisson,
    dt,
    BFECC,
    resolution,
    isBounce,
    colors,
    autoDemo,
    autoSpeed,
    autoIntensity,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration
  ]);

  return (
    <div
      className={`liquid-ether-container ${className}`}
      style={style}
      ref={mountRef}
    />
  );
}
