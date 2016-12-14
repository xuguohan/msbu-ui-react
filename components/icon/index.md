---
category: Others
type: Others
chinese: 图标
english: Icon
---

## 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<Icon type="menu" />
```

最终会渲染为：

```html
<i class="icon icon-${type}"></i>
```

<style>
.markdown .icons {
  width: 100%;
}
ul.anticons-list {
  margin: 20px 0;
  list-style: none;
  overflow: hidden;
}
ul.anticons-list li {
  float: left;
  margin: 5px 5px 5px 0;
  width: 155px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 110px;
  color: #5C6B77;
  transition: all 0.2s ease;
  position: relative;
  padding-top: 10px;
}
ul.anticons-list li:hover {
  background-color: #4BB8FF;
  color: #fff;
  border-radius: 4px;
}
ul.anticons-list li.copied:hover {
  color: rgba(255,255,255,0.2);
}
ul.anticons-list li:after {
  position: absolute;
  top: 10px;
  left: 0;
  height: 100%;
  width: 100%;
  content: "Copied!";
  text-align: center;
  line-height: 110px;
  color: #fff;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  opacity: 0;
}
ul.anticons-list li.copied:after {
  opacity: 1;
  top: 0;
}
.icons .anticon {
  font-size: 26px;
  margin: 12px 0 16px;
}
.anticon-class {
  display: block;
  text-align: center;
  word-wrap: break-word;
  transform: scale(0.83);
  font-family: Consolas;
}
</style>
