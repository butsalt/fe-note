# xhr

## send
* `GET`请求，`search`中的请求参数需要用`encodeURIComponent`先编码(用一到四个转义序列来表示字符串中的每个字符的UTF-8编码)
* `POST`或其他带有消息实体的请求，消息实体会根据设置的`Content-Type`消息头，对send的内容进行编码。比如`Content-Type`为`application/json; charset=UTF-8`，那么`xhr.send(JSON.stringify({name: '测试'}))`消息实体会以`UTF-8`编码发送消息实体数据
