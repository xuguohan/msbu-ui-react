# 热门话题-web版
## 依赖
fis3 `npm install -g fis3`

## 开发

```shell
git clone ssh://dengxi@icode.baidu.com:8235/baidu/msbu-react/hot-topic-web
cd hot-topic-web
npm install
npm start
```

## 部署
然后根据需要部署的目标otp机器地址，更改fis-conf.js里的配置，然后执行如下命令，讲代码传输到otp测试机上

```shell
npm run preview
```

## 发布
可以本地release打包看看产出上线的内容是否正确

```shell
npm run release
```

也可直接commit，push代码到icode上后，走agile发布流程发布上线即可

```shell
git commit -a -m 'your comment'
git push origin HEAD:refs/for/master
```
