# http2

## 代理导致的bug

http2 + TLSv1.2(低于1.2不会) + 浏览器解析得到的ip地址与实际访问的ip地址不一致时，由于`http2`的多路复用的特性会出现异常。这个异常在firefox上表现比较明显。


比如，`a.com`，`b.com`浏览器解析得到的地址均是`127.0.0.1`。而实际上，`a.com`访问的是`127.0.0.1`，`b.com`访问的是`127.0.0.2`。这种情况下，我们先使用`http2`访问`a.com`。然后，再访问`b.com`。这时，浏览器会直接使用之前用来访问`a.com`的连接访问`b.com`，这时因为`127.0.0.1`上没有提供`b.com`的服务，导致出现异常。
