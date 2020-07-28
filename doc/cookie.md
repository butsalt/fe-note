# cookie

## SameSite

* 为`none`时，可以通过`xhr.withwithCredentials = true`从而将`cookie`带给后端

* `SameSite=none`时，必须配合`Secure`指令才有用，即要求这个`cookie`必须通过`https`传递

* 为`lax`时，跨域的域名下，链接，预加载请求，`GET`表单仍然会将`cookie`带给后端，其他形式的跨域请求不会带`cookie`

* 为`strict`时。只有同源请求会带`cookie`，甚至是跨域域名下以链接形式打开的网页也不会带`cookie`
