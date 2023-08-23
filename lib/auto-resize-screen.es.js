function l({ width: e = 1920, height: t = 1080 }) {
  let o;
  const n = () => {
    const s = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, c = Math.min(s / e, m / t);
    document.body.style.transform = `translate(-50%, -50%) scale(${c || 1})`;
  };
  (() => {
    document.body.style.width = `${e}px`, document.body.style.height = `${t}px`, document.body.style.position = "relative", document.body.style.top = "50%", document.body.style.left = "50%", document.body.style.transformOrigin = "center", document.documentElement.style.width = "100vw", document.documentElement.style.height = "100vh", n();
  })();
  const d = () => {
    clearTimeout(o), o = setTimeout(n, 300);
  };
  return window.addEventListener("resize", d), () => {
    document.body.style.transform = "", document.body.style.top = "", document.body.style.left = "", document.body.style.width = "100%", document.body.style.height = "100%", window.removeEventListener("resize", d);
  };
}
export {
  l as autoResize
};
