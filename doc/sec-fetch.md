# sec-fetch-*消息头

## sec-fetch-mode
* `navigate`，导航发起
* `no-cors`，不关注target是否允许跨域的请求
* `cors`，关注target是否允许跨域的请求，需要响应携带Access-Control-Allow-Origin


## sec-fetch-site
* `none`，发起者是浏览器本身，不存在origin
* `same-origin`，发起者的location.origin与目标的location.origin一致
* `same-site`，发起者与目标的大域一致(端口号不同，也属于same-site)
* `cross-site`，发起者与目标是不同域
