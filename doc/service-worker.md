# cors

1. cache.addAll的地址，发起请求时request mode是cors
2. 如果页面有一个地址是第三方的link标签，没有添加`crossorigin="anonymous"`
    service worker对应的fetch事件拿到的request mode是`no-cors`
    link标签引用的字体对应的fetch事件拿到的request mode是`cors`(如果字体资源与页面不是同域的话，字体资源必须开启allow cross origin才可以正常被css使用)
    link标签引用的图片对应的fetch事件拿到的request mode是`no-cors`(如果图片资源与页面不是同域的话，图片资源不开启allow cross origin也可以正常被css使用)
3. 如果页面有一个地址是第三方的link标签，添加了`crossorigin="anonymous"`
    service worker对应的fetch事件拿到的request mode是`cors`
    link标签引用的字体对应的fetch事件拿到的request mode是`cors`(如果字体资源与页面不是同域的话，字体资源必须开启allow cross origin才可以正常被css使用)
    link标签引用的图片对应的fetch事件拿到的request mode是`no-cors`(如果图片资源与页面不是同域的话，图片资源不开启allow cross origin也可以正常被css使用)

# import-scripts
1. 只要service-worker.js的内容不变，即使importScripts引入的代码内容改变，也不会触发service worker安装，importScripts执行的代码始终是最后一次触发安装时引入的代码.
    不允许通过类似`Date.now()`的清缓存技术来作为importScripts的url入参，importScripts() of new scripts after service worker installation is not allowed

# scope
1. 假设service-worker.js的路径是http://test.com/a/b/sw.js，那么它的scope最多是`/a/b/`
2. 假设scope是`/a`，那么当浏览器打开`/a`下的资源时(比如`/a/b.html`)，都会激活service worker(即使资源本身没有注册service worker)，该资源触发的请求(包括其本身)都会触发service worker的`fetch`事件

# lifecycle
1. 当service worker被装载后，install事件被触发
2. install完成后，
        如果之前没有安装过service worker，则activate事件立即被触发
        如果之前安装过service worker，只有当所有被之前service worker控制的页面都关闭（刷新页面不认为是关闭）后，activate事件才被触发

# claim
1. 当访问一个页面，service worker被首次install并activate后，当前这个页面实际上还未被service worker控制，需要刷新后才会被控制
2. 只有当页面被控制后，service worker才能接受来自这个页面的push事件和fetch事件
