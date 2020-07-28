# xhr

## 文档

* [url中的编码与乱码(上)](https://xiaogd.net/url-%e4%b8%ad%e7%9a%84%e7%bc%96%e7%a0%81%e4%b8%8e%e4%b9%b1%e7%a0%81%ef%bc%88%e4%b8%8a%ef%bc%89/)

* [url中的编码与乱码(下)](https://xiaogd.net/url-%e4%b8%ad%e7%9a%84%e7%bc%96%e7%a0%81%e4%b8%8e%e4%b9%b1%e7%a0%81%ef%bc%88%e4%b8%8b%ef%bc%89/)

* [post 方式提交时的编码与乱码(上)](https://xiaogd.net/%e8%a1%a8%e5%8d%95%ef%bc%88form%ef%bc%89-post-%e6%96%b9%e5%bc%8f%e6%8f%90%e4%ba%a4%e6%97%b6%e7%9a%84%e7%bc%96%e7%a0%81%e4%b8%8e%e4%b9%b1%e7%a0%81%ef%bc%88%e4%b8%8a%ef%bc%89/)

* [post 方式提交时的编码与乱码(下)](https://xiaogd.net/%E8%A1%A8%E5%8D%95%EF%BC%88form%EF%BC%89-post-%E6%96%B9%E5%BC%8F%E6%8F%90%E4%BA%A4%E6%97%B6%E7%9A%84%E7%BC%96%E7%A0%81%E4%B8%8E%E4%B9%B1%E7%A0%81%EF%BC%88%E4%B8%8B%EF%BC%89/)

* [xhr的send方法实现](https://xhr.spec.whatwg.org/#the-send()-method)

* [通过body判断Content-Type](https://fetch.spec.whatwg.org/#concept-bodyinit-extract)

## send

* `GET`请求，`search`中的请求参数需要用`encodeURIComponent`先编码(用一到四个转义序列来表示字符串中的每个字符的UTF-8编码，相当于是用多个字符来表示一个字符)

* `POST`或其他带有消息实体的请求，`xhr`总是会将body以UTF-8进行编码。如果开发者设置了`Content-Type`消息头并且消息头的值有`charset`信息，会将`Content-Type`值的`charset`设成`UTF-8`。如果开发者设置了`Content-Type`消息头并且消息头的值没有`charset`信息，则该消息头保持原样。如果开发者没有设置`Content-Type`消息头，则会根据body的类型来设置，且`charset`总是为`UTF-8`。

* 通过`form`发起`POST`或其他带有消息实体的请求时，可通过设置`form`的`accept-charset`属性来改变消息实体的编码，而`xhr`总是以`UTF-8`进行编码

## withCredentials

* 为`true`时，发送的请求会将与请求地址对应的域下满足条件的`cookie`带给后端

* 为`true`时，响应可以使用`Set-Cookie`消息头在与请求地址对应的域下设置`cookie`

* 为`true`时，响应的消息头`Access-Control-Allow-Credentials`的值必须为`true`，否则浏览器不会解析响应
