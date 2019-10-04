# xhr

## 文档
[url中的编码与乱码(上)](https://xiaogd.net/url-%e4%b8%ad%e7%9a%84%e7%bc%96%e7%a0%81%e4%b8%8e%e4%b9%b1%e7%a0%81%ef%bc%88%e4%b8%8a%ef%bc%89/)
[url中的编码与乱码(下)](https://xiaogd.net/url-%e4%b8%ad%e7%9a%84%e7%bc%96%e7%a0%81%e4%b8%8e%e4%b9%b1%e7%a0%81%ef%bc%88%e4%b8%8b%ef%bc%89/)
[post 方式提交时的编码与乱码(上)](https://xiaogd.net/%e8%a1%a8%e5%8d%95%ef%bc%88form%ef%bc%89-post-%e6%96%b9%e5%bc%8f%e6%8f%90%e4%ba%a4%e6%97%b6%e7%9a%84%e7%bc%96%e7%a0%81%e4%b8%8e%e4%b9%b1%e7%a0%81%ef%bc%88%e4%b8%8a%ef%bc%89/)
[post 方式提交时的编码与乱码(下)](https://xiaogd.net/%E8%A1%A8%E5%8D%95%EF%BC%88form%EF%BC%89-post-%E6%96%B9%E5%BC%8F%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E7%BC%96%E7%A0%81%E4%B8%8E%E4%B9%B1%E7%A0%81%EF%BC%88%E4%B8%8B%EF%BC%89/)

## send
* `GET`请求，`search`中的请求参数需要用`encodeURIComponent`先编码(用一到四个转义序列来表示字符串中的每个字符的UTF-8编码，相当于是用多个字符来表示一个字符)
* `POST`或其他带有消息实体的请求，消息实体会根据设置的`Content-Type`消息头，对send的内容进行编码。比如`Content-Type`为`application/json; charset=UTF-8`，那么`xhr.send(JSON.stringify({name: '测试'}))`消息实体会以`UTF-8`编码发送消息实体数据
