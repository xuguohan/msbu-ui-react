webpackJsonp([22],{9:function(n,a,t){"use strict";t(15),t(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(25),p=s(e),o=t(24),c=s(o);a["default"]=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,l=(0,c["default"])(n);!(s=(o=l.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(u){e=!0,p=u}finally{try{!s&&l["return"]&&l["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},20:function(n,a,t){"use strict";t(37)},22:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},t=l["default"].createClass({displayName:"TouchableFeedbackComponent",statics:a,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),l["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return t}Object.defineProperty(a,"__esModule",{value:!0});var p=t(7),o=s(p);a["default"]=e;var c=t(1),l=s(c),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},24:function(n,a,t){n.exports={"default":t(26),__esModule:!0}},25:function(n,a,t){n.exports={"default":t(27),__esModule:!0}},26:function(n,a,t){t(23),t(19),n.exports=t(28)},27:function(n,a,t){t(23),t(19),n.exports=t(29)},28:function(n,a,t){var s=t(34),e=t(40);n.exports=t(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return s(a.call(n))}},29:function(n,a,t){var s=t(47),e=t(30)("iterator"),p=t(35);n.exports=t(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(s(a))}},31:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(7),p=s(e),o=t(1),c=s(o);t(20),a["default"]=function(n){var a=n.type,t=n.className,s=void 0===t?"":t;return c["default"].createElement("i",(0,p["default"])({},n,{className:(s+" anticon anticon-"+a.replace(/-/g,"")).trim()}))},n.exports=a["default"]},36:function(n,a,t){"use strict";t(9),t(20),t(54)},37:function(n,a){},50:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&S(n.props.children)?b["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(S(n)&&(n=n.split("").join(" ")),b["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=t(7),c=s(o),l=t(8),u=s(l),i=t(17),r=s(i),k=t(4),d=s(k),f=t(6),m=s(f),g=t(5),h=s(g),v=t(1),b=s(v),y=t(3),x=s(y),w=t(12),E=s(w),T=t(31),N=s(T),_=t(18),C=s(_),j=t(22),M=s(j);t(36);var P=/^[\u4e00-\u9fa5]{2}$/,S=P.test.bind(P),F=function(n){function a(){return(0,d["default"])(this,a),(0,m["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,C["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),t=(0,r["default"])(a,2),s=t[0],e=s.children,o=s.className,l=s.prefixCls,i=s.type,k=s.size,d=s.inline,f=s.across,m=s.disabled,g=s.icon,h=s.loading,v=s.touchFeedback,y=s.activeStyle,w=t[1],T=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,l,!0),(0,u["default"])(n,l+"-primary","primary"===i),(0,u["default"])(n,l+"-ghost","ghost"===i),(0,u["default"])(n,l+"-warning","warning"===i),(0,u["default"])(n,l+"-small","small"===k),(0,u["default"])(n,l+"-inline",d),(0,u["default"])(n,l+"-across",f),(0,u["default"])(n,l+"-disabled",m),(0,u["default"])(n,l+"-loading",h),n),_=(0,E["default"])({},this.props.style);v&&(_=(0,E["default"])(_,y),T[l+"-active"]=!0);var j=h?"loading":g,M=b["default"].Children.map(e,p);return j&&(T[l+"-icon"]=!0),delete w.htmlType,b["default"].createElement("button",(0,c["default"])({},w,{type:this.props.htmlType||"button",style:_,className:(0,x["default"])(T),disabled:m}),j?b["default"].createElement(N["default"],{type:j}):null,M)},a}(b["default"].Component);F.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,M["default"])(F),n.exports=a["default"]},51:function(n,a,t){"use strict";t(9),t(67)},54:function(n,a){},62:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(64),p=s(e),o=t(65),c=s(o);t(51),p["default"].Item=c["default"],a["default"]=p["default"],n.exports=a["default"]},64:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(8),p=s(e),o=t(4),c=s(o),l=t(6),u=s(l),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,o=a.align,c=a.alignContent,l=a.className,u=a.children,i=a.prefixCls,r=a.style,k=a.onClick,f=(0,m["default"])((n={},(0,p["default"])(n,i,!0),(0,p["default"])(n,i+"-dir-row","row"===t),(0,p["default"])(n,i+"-dir-row-reverse","row-reverse"===t),(0,p["default"])(n,i+"-dir-column","column"===t),(0,p["default"])(n,i+"-dir-column-reverse","column-reverse"===t),(0,p["default"])(n,i+"-nowrap","nowrap"===s),(0,p["default"])(n,i+"-wrap","wrap"===s),(0,p["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,p["default"])(n,i+"-justify-start","start"===e),(0,p["default"])(n,i+"-justify-end","end"===e),(0,p["default"])(n,i+"-justify-center","center"===e),(0,p["default"])(n,i+"-justify-between","between"===e),(0,p["default"])(n,i+"-justify-around","around"===e),(0,p["default"])(n,i+"-align-top","top"===o||"start"===o),(0,p["default"])(n,i+"-align-middle","middle"===o||"center"===o),(0,p["default"])(n,i+"-align-bottom","bottom"===o||"end"===o),(0,p["default"])(n,i+"-align-baseline","baseline"===o),(0,p["default"])(n,i+"-align-stretch","stretch"===o),(0,p["default"])(n,i+"-align-content-start","start"===c),(0,p["default"])(n,i+"-align-content-end","end"===c),(0,p["default"])(n,i+"-align-content-center","center"===c),(0,p["default"])(n,i+"-align-content-between","between"===c),(0,p["default"])(n,i+"-align-content-around","around"===c),(0,p["default"])(n,i+"-align-content-stretch","stretch"===c),(0,p["default"])(n,l,l),n));return d["default"].createElement("div",{className:f,style:r,onClick:k},u)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},65:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(8),p=s(e),o=t(4),c=s(o),l=t(6),u=s(l),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,p["default"])(n,e+"-item",!0),(0,p["default"])(n,s,s),n));return d["default"].createElement("div",{className:l,style:o,onClick:c},t)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},67:function(n,a){},511:function(n,a,t){"use strict";t(9),t(36),t(51),t(1135)},724:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(20),t(31)),p=s(e),o=(t(511),t(813)),c=s(o),l=t(1),u=s(l),i=t(2);s(i);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:0,title:"\u793a\u4f8b",filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6309\u94ae\u5185\u5e26\u6587\u672c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span> <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e26\u6587\u672c\u548cicon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >prevText={&lt;div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>arrow-align<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\u4e0a\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          nextText<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>arrow-align<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0b\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n        <span class="token operator" >/</span><span class="token operator" >></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9690\u85cf\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >simple</span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span> <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u72b6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pointer<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token string" >\'0.32rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"App",render:function(){return u["default"].createElement("div",{className:"pagination-container"},u["default"].createElement("p",{className:"title"},"\u6309\u94ae\u5185\u5e26\u6587\u672c"),u["default"].createElement(c["default"],{total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"}),u["default"].createElement("p",{className:"title"},"\u5e26\u6587\u672c\u548cicon"),u["default"].createElement(c["default"],{total:5,current:1,prevText:u["default"].createElement("div",{className:"arrow-align"},u["default"].createElement(p["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:u["default"].createElement("div",{className:"arrow-align"},"\u4e0b\u4e00\u6b65",u["default"].createElement(p["default"],{type:"right"}))}),u["default"].createElement("p",{className:"title"},"\u9690\u85cf\u6570\u5b57"),u["default"].createElement(c["default"],{simple:!0,total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"}),u["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),u["default"].createElement(c["default"],{mode:"number",total:5,current:3}),u["default"].createElement("p",{className:"title"},"\u70b9\u72b6"),u["default"].createElement(c["default"],{mode:"pointer",total:5,current:2,style:{marginBottom:"0.32rem"}}))}});return u["default"].createElement(n,null)},style:".pagination-container {\n  padding: 0 0.2rem;\n}\n.pagination-container .title {\n  margin: 0.2rem 0;\n}\n.pagination-container .arrow-align {\n  display: flex;\n  align-items: center;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.pagination-container</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.pagination-container</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.pagination-container</span> <span class="token class" >.arrow-align</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >align-items</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},813:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(8),p=s(e),o=t(4),c=s(o),l=t(6),u=s(l),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=t(50),h=s(g),v=t(62),b=s(v);t(511);var y=function(n){function a(t){(0,c["default"])(this,a);var s=(0,u["default"])(this,n.call(this,t));return s.state={current:t.current},s}return(0,r["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},a.prototype.onChange=function(n){this.setState({current:n}),this.props.onChange&&this.props.onChange(n)},a.prototype.render=function(){var n,a=this,t=this.props,s=t.prefixCls,e=t.className,o=t.style,c=t.mode,l=t.total,u=t.simple,i=t.prevText,r=t.nextText,k=this.state.current,f=d["default"].createElement(b["default"],null,d["default"].createElement(b["default"].Item,{className:s+"-wrap-btn "+s+"-wrap-btn-prev"},d["default"].createElement(h["default"],{inline:!0,disabled:k<=0,onClick:function(){return a.onChange(k-1)}},i)),this.props.children?d["default"].createElement(b["default"].Item,null,this.props.children):!u&&d["default"].createElement(b["default"].Item,{className:s+"-wrap"},d["default"].createElement("span",{className:"active"},k+1),"/",d["default"].createElement("span",null,l)),d["default"].createElement(b["default"].Item,{className:s+"-wrap-btn "+s+"-wrap-btn-next"},d["default"].createElement(h["default"],{inline:!0,disabled:k>=l-1,onClick:function(){return a.onChange(a.state.current+1)}},r)));if("number"===c)f=d["default"].createElement("div",{className:s+"-wrap"},d["default"].createElement("span",{className:"active"},k+1),"/",d["default"].createElement("span",null,l));else if("pointer"===c){for(var g=[],v=0;v<l;v++){var y;g.push(d["default"].createElement("div",{key:"dot-"+v,className:(0,m["default"])((y={},(0,p["default"])(y,s+"-wrap-dot",!0),(0,p["default"])(y,s+"-wrap-dot-active",v===k),y))},d["default"].createElement("span",null)))}f=d["default"].createElement("div",{className:s+"-wrap"},g)}return d["default"].createElement("div",{className:(0,m["default"])((n={},(0,p["default"])(n,e,e),(0,p["default"])(n,s,!0),n)),style:o},f)},a}(d["default"].Component);a["default"]=y,y.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:function(){}},n.exports=a["default"]},881:function(n,a,t){n.exports={basic:t(724)}},1135:function(n,a){}});