function r({ width: e = 1920, height: t = 1080 }) {
  let n;
  const o = () => {
    const d = document.documentElement.offsetWidth, c = document.documentElement.offsetHeight, m = Math.min(d / e, c / t);
    document.body.style.transform = `translate(-50%, -50%) scale(${m || 1})`;
  };
  (() => {
    document.body.style.width = `${e}px`, document.body.style.height = `${t}px`, document.body.style.position = "relative", document.body.style.top = "50%", document.body.style.left = "50%", document.body.style.transformOrigin = "center", document.documentElement.style.width = "100vw", document.documentElement.style.height = "100vh", o();
  })();
  const s = () => {
    clearTimeout(n), n = setTimeout(o, 300);
  };
  return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
}
export {
  r as autoResize
};
