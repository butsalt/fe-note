# webpack模块联邦

## `chunk`安装的入口方法

`__webpack_require__.e(chunkId)`：确保对应的`chunk`及`chunk`下对应的所有`module`安装成功

## 一个`chunk`下`module`的两种来源

* `host app`

* `remote app`

## 安装`chunk`下`module`的方式

* `__webpack_require__.f.j`：安装同个`app`下`chunk`的`module`

* `__webpack_require__.f.remotes`：`host app`安装来自`remote app`的`chunk`的`module`

* `__webpack_require__.f.overridables`：`remote app`尝试通过`host app`安装`module`，失败时会fallback到`remote app`
