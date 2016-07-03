### 引用库

https://github.com/dreamhead/moco


### 使用方式

- 命令行中运行以下命令

```
npm run mock
npm start
```

- api server 自身可以通过 http://localhost:12306/api/v1/users/search 对所有 User 的数据进行访问

- 开发环境中可以通过访问 http://localhost:9000/service/users/search 代理到 http://localhost:12306/api/v1/users/search 中得到所有 User 的数据 
