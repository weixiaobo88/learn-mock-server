# Mock Server 学习记录

## Mock Server

### 解决的问题

前后端开发分离的时候，前端应该如何独立完成数据的展现和交互，数据从哪里来？


### 解决的思路

有这么一个东西，可以在本地服务器上构建一套和后端 API 返回数据相同的东西，前端在开发的时候，发送 HTTP 请求的时候能够代理到本地服务器上，这样就可以基本解决这样的问题。

这其中包含两个东西：

- 可以提供 api schema 的本地服务器
- 可以转发 HTTP 请求到本地服务的代理

### 如何解决 URL 不确定需要修改的问题？

建立映射，使用映射的 key，这样如果 URL 修改了，不用满世界找相应的 URL 来替换，只需要修改映射文件即可。

### 实现方式

有几种实现方式:

- osprey-mock-service + webpack
    
    * 提供 API 的本地服务器, osprey-mock-service, 配置文件是 api.raml
    * 转发 HTTP 请求的代理, webpack, 配置文件是 webpack.config.js
    * 相比特点：json文件修改后需要重启

- moco + webpack

    * 提供 API 的本地服务器, moco, 配置文件是 moco(shell) + start(shell) + api.json
    * 转发 HTTP 请求的代理, webpack, 配置文件是 webpack.config.js
    * 相比特点：json文件修改后不需要重启
    
