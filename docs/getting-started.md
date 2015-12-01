# 快速上手

- category: 1
- order: 1

---

Ant Design React 致力于提供给程序员**愉悦**的开发体验。

## 第一个例子

最简单的试用方式参照以下 JSFiddle 演示, 也推荐 Fork 本例来进行 Bug Report, 注意不要在实际项目中这样使用。

- [antm JSFiddle](http://jsfiddle.net/yiminghe/9zrstuto/1/)


## 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。
我们提供了一套 `npm` + `webpack` 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。

### 1. 安装命令行工具

```bash
$ npm install antd-init -g
```

[更多使用说明](https://github.com/ant-design/antd-bin#使用说明)。

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ mkdir antm-demo && cd antm-demo
$ antd-init
$ npm install
```

若安装缓慢报错，可尝试用 `cnpm` 或别的镜像源自行安装：`rm -rf node_modules && cnpm install`.

### 3. 使用组件

编辑 `src/component/App.jsx`，用 React 的方式直接使用 Ant Design React 的组件。

```jsx
import React from 'react';
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem} from 'antm';

const App = React.createClass({
  getInitialState() {
    return {

    };
  },
  handleClick(e) {
    console.log(e);
  },
  render() {
    return <ListWrap >
      <ListHeader label="我是表头"/>
        <ListBody>
         <ListItem
           type="双行"
           icon=""
           content="我是内容"
           extra="我是额外信息"
           arrow="horizontal"
           onClick={function(){}}
         />
         <ListItem
           type="双行"
           icon=""
           content="我是内容22"
           extra="我是额外信息"
           arrow="horizontal"
           onClick={this.handleClick}
         />
        </ListBody>
        <ListFooter label="我是表尾"/>
      </ListWrap>;
  }
});

export default App;
```

你可以在 [这里](/components/button) 选用更多组件。

### 4. 开发调试

一键启动调试，访问 http://127.0.0.1:8001 查看效果。

```bash
$ npm run dev
```

### 5. 构建和部署

```bash
$ npm run build
```

入口文件会构建到 `dist` 目录中，你可以自由部署到不同环境中进行引用。

> 上述例子用于帮助你理解 Ant Design React 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。

## 兼容性

Ant Mobile From Ant Design React 目前仅针对钱包容器环境。

<div class="code-line-highlight"></div>

<style>
.code-line-highlight {
  box-shadow: 0px 196px 0px rgba(255, 207, 0, 0.16);
  height: 42px;
  margin-top: -42px;
  position: relative;
  z-index: 1;
}
</style>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="/index.css">
  </head>
  <body>
  </body>
  <!-- 引入公用文件 -->
  <script src="/common.js"></script>
  <!-- 引入入口文件 -->
  <script src="/index.js"></script>
</html>
```

## 自行构建

如果想自己维护工作流，我们推荐使用 [webpack](http://webpack.github.io/) 进行构建和调试，可以参考我们所使用的 [webpack 配置](https://github.com/ant-design/antd-build/blob/master/lib/webpack.common.config.js)。


## 小甜点

- 你可以享用 `npm` 生态圈里的所有模块。
- 我们使用了 `babel`，试试用 [ES6](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/) 的写法来提升编码的愉悦感。