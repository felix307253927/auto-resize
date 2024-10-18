# 根据给定设计大小自适应屏幕
## install
```sh
 npm install auto-resize-screen
```

## 示例
```javascript
import { autoResize } from "auto-resize";

window.onload = ()=>{
  const cancel = autoResize({width: 1920, height: 1080});
  
  setTimeout(()=> {
    // 取消监听
    cancel();
  }, 2000)
}
```
