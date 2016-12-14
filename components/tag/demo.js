webpackJsonp([41],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},20:function(n,a,s){"use strict";s(37)},31:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(1),c=t(o);s(20),a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" icon icon-"+a).trim()}))},n.exports=a["default"]},37:function(n,a){},170:function(n,a){"use strict";function s(n){var a={};return Object.keys(n).forEach(function(s){0===s.indexOf("data-")&&(a[s]=n[s])}),a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},521:function(n,a,s){"use strict";s(9),s(20),s(1149)},774:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(521),s(829)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u6807\u7b7e\u7c7b\u578b\u5206\u4e3a\u9009\u62e9\u578b\u6807\u7b7e\u548c\u53ea\u8bfb\u578b\u6807\u7b7e\uff0c\u53ea\u8bfb\u578b\u6807\u7b7e\u65e0\u4ea4\u4e92\u8fc7\u7a0b\uff0c\u4ec5\u5c55\u793a\u5185\u5bb9\u3002"]],meta:{order:0,title:"\u6807\u7b7e\u7c7b\u578b",filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`tag selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tag-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u901a\u7528\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>\u9ed8\u8ba4\u9009\u4e2d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\u5931\u6548\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e8b\u4ef6\u56de\u8c03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">afterClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      \u53ef\u5173\u95ed\u6807\u7b7e\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>\u5c0f\u53f7\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){console.log("tag selected: "+n)}return c["default"].createElement("div",{className:"tag-container"},c["default"].createElement(p["default"],{"data-seed":"logId"},"\u901a\u7528\u6807\u7b7e"),c["default"].createElement(p["default"],{selected:!0},"\u9ed8\u8ba4\u9009\u4e2d"),c["default"].createElement(p["default"],{disabled:!0},"\u5931\u6548\u6807\u7b7e"),c["default"].createElement(p["default"],{onChange:n},"\u4e8b\u4ef6\u56de\u8c03"),c["default"].createElement(p["default"],{closable:!0,onClose:function(){console.log("onClose")},afterClose:function(){console.log("afterClose")}},"\u53ef\u5173\u95ed\u6807\u7b7e"),c["default"].createElement(p["default"],{small:!0},"\u5c0f\u53f7\u6807\u7b7e"))},style:".tag-container{\n  display: flex;\n  padding-top: 0.18rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 0.18rem;\n  margin-bottom: 0.18rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},829:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(8),c=t(o),l=s(4),u=t(l),i=s(6),k=t(i),r=s(5),d=t(r),f=s(1),g=t(f),m=s(3),v=t(m),h=s(31),C=t(h),b=s(170),y=t(b);s(521);var x=function(n){function a(s){(0,u["default"])(this,a);var t=(0,k["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.disabled,s=n.onChange;if(!a){var e=t.state.selected;t.setState({selected:!e},function(){s&&s(!e)})}},t.onTagClose=function(){t.props.onClose&&t.props.onClose(),t.setState({closed:!0},t.props.afterClose)},t.state={selected:s.selected,closed:!1},t}return(0,d["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.props.selected!==n.selected&&this.setState({selected:n.selected})},a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.disabled,l=a.closable,u=a.small,i=a.style,k=(0,v["default"])((n={},(0,c["default"])(n,t,!!t),(0,c["default"])(n,""+e,!0),(0,c["default"])(n,e+"-small",u),(0,c["default"])(n,e+"-normal",!this.state.selected&&!o),(0,c["default"])(n,e+"-active",this.state.selected&&!o),(0,c["default"])(n,e+"-disabled",o),n));return this.state.closed?null:g["default"].createElement("div",(0,p["default"])({},(0,y["default"])(this.props),{className:k,onClick:this.onClick,style:i}),g["default"].createElement("div",{className:e+"-text"},s),l&&!o&&!u&&g["default"].createElement("div",{className:e+"-close",onClick:this.onTagClose},g["default"].createElement(C["default"],{type:"cross-circle"})))},a}(g["default"].Component);a["default"]=x,x.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a["default"]},901:function(n,a,s){n.exports={basic:s(774)}},1149:function(n,a){}});