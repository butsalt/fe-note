# npm

## npm version
* `npm install [package]`时，如果版本大于等于`1.0.0`，`package dependencies`对应包的版本会是`^[version]`，否则对应包的版本是`[version]`

## npm install vs npm ci
* 当存在`package-lock.json`时，`npm install`会参考该文件为项目安装依赖，当`package.json`与`package-lock.json`存在冲突时，会按照`package.json`更新`package-lock.json`
* `npm ci`严格按照`package-lock.json`为项目安装依赖，当`package.json`与`package-lock.json`存在冲突时，安装会失败
