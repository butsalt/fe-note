# 七牛

## 缓存

* bucket缓存的设置只影响给浏览器的响应消息头max-age的时间

* 融合cdn缓存的设置只影响文件在边缘节点的过期时间，即边缘节点从源站保存文件后多久向源站重新拉取

* 如果在融合cdn缓存中设置成遵循源站，如果源站的响应消息头有age，则给浏览器的响应消息头在这个age的基础上经过保守计算后生成，文件在边缘节点过期时长是max-age和age的差值。
   如果在融合cdn缓存中设置成不遵循源站，给浏览器的响应消息头age由边缘节点已缓存文件的时间决定，文件在边缘节点过期时长由配置决定