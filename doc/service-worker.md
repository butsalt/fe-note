# cors

1. cache.addAll的地址，发起请求时request mode是cors
2. 如果页面有一个地址是第三方的link标签，service worker对应的fetch事件拿到的request mode是no-cors
   link标签引用的字体对应的fetch事件拿到的request mode是cors(如果css与页面不是同域的话，资源必须开启allow cross origin才可以正常被css使用)
   link标签引用的图片对应的fetch事件拿到的request mode是no-cors(如果css与页面不是同域的话，资源不开启allow cross origin也可以正常被css使用)