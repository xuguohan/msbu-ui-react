webpackJsonp([25],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(25),p=t(e),o=s(24),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,u=(0,c["default"])(n);!(t=(o=u.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){e=!0,p=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},20:function(n,a,s){"use strict";s(37)},22:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},s=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:a,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),u["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),o=t(p);a["default"]=e;var c=s(1),u=t(c),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},24:function(n,a,s){n.exports={"default":s(26),__esModule:!0}},25:function(n,a,s){n.exports={"default":s(27),__esModule:!0}},26:function(n,a,s){s(23),s(19),n.exports=s(28)},27:function(n,a,s){s(23),s(19),n.exports=s(29)},28:function(n,a,s){var t=s(34),e=s(40);n.exports=s(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},29:function(n,a,s){var t=s(47),e=s(30)("iterator"),p=s(35);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},31:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),p=t(e),o=s(1),c=t(o);s(20),a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" icon icon-"+a).trim()}))},n.exports=a["default"]},32:function(n,a,s){"use strict";s(9),s(55)},36:function(n,a,s){"use strict";s(9),s(20),s(54)},37:function(n,a){},38:function(n,a,s){"use strict";s(9),s(61)},42:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),r=t(i),k=s(1),d=t(k),f=s(3),g=t(f);s(32);var h=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,c=a.onClick,u=(0,g["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:u,style:o,onClick:c})},a}(d["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},49:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),r=t(i),k=s(1),d=t(k),f=s(3),g=t(f);s(38);var h=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,c=a.style,u=(0,g["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:u,style:c},o)},a}(d["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},50:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&B(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(B(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(7),c=t(o),u=s(8),l=t(u),i=s(17),r=t(i),k=s(4),d=t(k),f=s(6),g=t(f),h=s(5),m=t(h),v=s(1),y=t(v),b=s(3),x=t(b),E=s(12),T=t(E),S=s(31),_=t(S),W=s(18),M=t(W),w=s(22),z=t(w);s(36);var C=/^[\u4e00-\u9fa5]{2}$/,B=C.test.bind(C),P=function(n){function a(){return(0,d["default"])(this,a),(0,g["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=(0,M["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),s=(0,r["default"])(a,2),t=s[0],e=t.children,o=t.className,u=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.across,g=t.disabled,h=t.icon,m=t.loading,v=t.touchFeedback,b=t.activeStyle,E=s[1],S=(n={},(0,l["default"])(n,o,o),(0,l["default"])(n,u,!0),(0,l["default"])(n,u+"-primary","primary"===i),(0,l["default"])(n,u+"-ghost","ghost"===i),(0,l["default"])(n,u+"-warning","warning"===i),(0,l["default"])(n,u+"-small","small"===k),(0,l["default"])(n,u+"-inline",d),(0,l["default"])(n,u+"-across",f),(0,l["default"])(n,u+"-disabled",g),(0,l["default"])(n,u+"-loading",m),n),W=(0,T["default"])({},this.props.style);v&&(W=(0,T["default"])(W,b),S[u+"-active"]=!0);var w=m?"loading":h,z=y["default"].Children.map(e,p);return w&&(S[u+"-icon"]=!0),delete E.htmlType,y["default"].createElement("button",(0,c["default"])({},E,{type:this.props.htmlType||"button",style:W,className:(0,x["default"])(S),disabled:g}),w?y["default"].createElement(_["default"],{type:w}):null,z)},a}(y["default"].Component);P.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,z["default"])(P),n.exports=a["default"]},54:function(n,a){},55:function(n,a){},61:function(n,a){},780:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(38),s(49)),p=t(e),o=(s(36),s(50)),c=t(o),u=(s(32),s(42)),l=t(u),i=s(1),r=t(i),k=s(2);t(k);n.exports={content:[["p","\u4e0a\u4e0b\u7559\u767d ",["code","<WhiteSpace size='md' />"]]],meta:{order:0,title:"\u57fa\u672c",filename:"components/white-space/demo/basic.md",id:"components-white-space-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> WhiteSpaceExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dxs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1Px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dsm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1Px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token function">\u4e0a\u4e0b\u7559\u767dmd</span><span class="token punctuation">(</span>\u9ed8\u8ba4<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1Px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dlg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1Px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dxl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1Px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpaceExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"WhiteSpaceExample",render:function(){return r["default"].createElement("div",{className:"button-container"},r["default"].createElement(l["default"],{size:"xs"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxs")),r["default"].createElement(l["default"],{size:"xs"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],{size:"sm"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dsm")),r["default"].createElement(l["default"],{size:"sm"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],null),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dmd(\u9ed8\u8ba4)")),r["default"].createElement(l["default"],null),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],{size:"lg"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dlg")),r["default"].createElement(l["default"],{size:"lg"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],{size:"xl"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxl")),r["default"].createElement(l["default"],{size:"xl"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}))}});return r["default"].createElement(n,null)}}},904:function(n,a,s){n.exports={basic:s(780)}}});