# html资源加载顺序

* html里以标签形式注明的资源都会并行下载
* 如果页面没有js，那么当css下载并计算完后，页面才会渲染
* 如果遇到不是`async`且不是`defer`的`script`标签，`script`标签前的css必须下载并计算完后，页面会渲染，然后才开始执行这个`script`标签下的代码
* 不是`async`且不是`defer`的`script`标签下的代码执行时，会阻塞后面DOM的解析。