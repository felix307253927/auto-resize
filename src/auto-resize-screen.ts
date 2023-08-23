/*
 * @Author             : Felix
 * @Email              : 307253927@qq.com
 * @Date               : 2023-05-17 12:27:16
 * @LastEditors        : Felix
 * @LastEditTime       : 2023-08-23 09:25:42
 */
let flag = false;

/**
 * @description: 自动缩放
 * @param {{width: number, height: number}} 设计稿宽高
 * @return {Function} 取消监听
 * @example
 * const stop = autoResize({ width: 1920, height: 1080 })
 * // 取消监听
 * stop()
 */
export function autoResize({ width = 1920, height = 1080 }): () => void {
  let _timer: any;
  if (flag) {
    flag = true;
    return () => {};
  }
  const resize = () => {
    const Dwidth = document.documentElement.offsetWidth;
    const Dheight = document.documentElement.offsetHeight;
    const scale = Math.min(Dwidth / width, Dheight / height);
    document.body.style.transform = `translate(-50%, -50%) scale(${
      scale || 1
    })`;
  };
  const run = () => {
    document.body.style.width = `${width}px`;
    document.body.style.height = `${height}px`;
    document.body.style.position = "relative";
    document.body.style.top = "50%";
    document.body.style.left = "50%";
    document.body.style.transformOrigin = "center";
    document.documentElement.style.width = "100vw";
    document.documentElement.style.height = "100vh";
    resize();
  };
  run();

  const listener = () => {
    clearTimeout(_timer);
    _timer = setTimeout(resize, 300);
  };
  window.addEventListener("resize", listener);

  // 返回一个函数，用于取消监听
  return () => {
    document.body.style.transform = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    window.removeEventListener("resize", listener);
  };
}
