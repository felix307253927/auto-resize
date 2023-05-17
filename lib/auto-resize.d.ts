/**
 * @description: 自动缩放
 * @param {{width: number, height: number}} 设计稿宽高
 * @return {Function} 取消监听
 * @example
 * const stop = autoResize({ width: 1920, height: 1080 })
 * // 取消监听
 * stop()
 */
export declare function autoResize({ width, height }: {
    width?: number | undefined;
    height?: number | undefined;
}): () => void;
