(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8bOJ":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("mXGw");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=n("eIp5"),c=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image"],["clean"]],u=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=o(t)).call.apply(e,[this].concat(a)))).value=n.props.value,n.oldVal=n.props.value,n.quillEditor=null,n.quillOptions={modules:{toolbar:c},placeholder:"请在这里写下你的内容...",readOnly:!1,theme:"snow"},n.changeEditorText=function(){var e=n.props.value;n.oldVal!==e&&(n.quillEditor.root.innerHTML=e,n.oldVal=e)},n}var n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.Component),n=t,(u=[{key:"componentDidMount",value:function(){var e=this,t=this.props.onChange,n=this.refs.editor;this.quillEditor=new i(n,this.quillOptions),this.quillEditor.on("text-change",function(n,r,a){var o=e.quillEditor.root.innerHTML;"<p><br></p>"===o&&(o=""),e.oldVal!==o&&(e.oldVal=o,t&&t(o))})}},{key:"render",value:function(){var e=this.props.disabled;return this.changeEditorText(),r.createElement("div",{className:"editor-wrap"},r.createElement("div",{style:{minHeight:"600px"},ref:"editor"}),e?r.createElement("div",{className:"editor-mask"}):"")}}])&&a(n.prototype,u),t}()},"8fLR":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r,a=n("mXGw"),o=n("mBK0"),l=n("qgEq"),i=n("8gGg"),c=n("fkL1"),u=n("GCqQ"),p=n("2//r"),s=n("XkWK"),f=n("H4M2"),m=n("8bOJ");function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=l.a.Item,E=i.a.Group,v=Object(o.b)("articleCreateStore")(r=Object(o.c)(r=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=b(t)).call.apply(e,[this].concat(a)))).back=function(){n.props.history.go(-1)},n.goDetail=function(e){n.props.history.push("/home/blog-articleEdit/".concat(e))},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.Component),n=t,(r=[{key:"edit",value:function(){var e=this.props,t=e.match.params.id;e.history.push("/home/blog-articleEdit/".concat(t))}},{key:"componentDidMount",value:function(){this.props.articleCreateStore.getInitData()}},{key:"render",value:function(){var e=this,t=this.props.articleCreateStore,n=t.mainData,r=t.typeList,o=t.tagList,i=(t.changeType,t.tagChange),h=t.inputChange,b=t.save;return a.createElement(a.Fragment,null,a.createElement(l.a,{className:"search-form",layout:"horizontal"},a.createElement("h3",null,"文章详情"),a.createElement(c.a,{gutter:24},a.createElement(u.a,{span:18},a.createElement(g,{label:"标题",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},a.createElement(p.a,{placeholder:"标题",value:n.title,onChange:function(e){return h(e.target.value,"title")}}))),a.createElement(u.a,{span:18},a.createElement(g,{label:"摘要",labelCol:{sm:{span:4}},wrapperCol:{sm:{span:20}}},a.createElement(p.a.TextArea,{rows:4,placeholder:"摘要",value:n.abstract,onChange:function(e){return h(e.target.value,"abstract")}})))),a.createElement(c.a,{gutter:24},a.createElement(u.a,{span:10},a.createElement(g,{label:"文章类型",labelCol:{sm:{span:8}},wrapperCol:{sm:{span:16}}},a.createElement(s.a,{value:n.typeId,onChange:function(e){return h(e,"typeId")}},r.map(function(e,t){return a.createElement(s.a.Option,{value:e.id,key:e.id},e.name)})))),a.createElement(u.a,{span:10},a.createElement(g,{label:"是否置顶",labelCol:{sm:{span:8}},wrapperCol:{sm:{span:16}}},a.createElement(s.a,{value:n.isTop,onChange:function(e){return h(e,"isTop")}},a.createElement(s.a.Option,{value:"1"},"是"),a.createElement(s.a.Option,{value:"0"},"否"))))),a.createElement(c.a,{gutter:24},a.createElement(u.a,{span:24},a.createElement(g,{label:"内容",labelCol:{sm:{span:3}},wrapperCol:{sm:{span:21}}},a.createElement(m.a,{value:n.description,onChange:function(e){return h(e,"description")}})))),a.createElement(c.a,{gutter:24},a.createElement(u.a,{span:24},a.createElement(g,{label:"标签",labelCol:{sm:{span:3}},wrapperCol:{sm:{span:21}}},a.createElement(E,{options:o,value:n.tag?n.tag.split(","):[],onChange:i})))),a.createElement(c.a,null,a.createElement(u.a,{span:24,offset:3},a.createElement(f.a,{onClick:function(t){return b(e.goDetail)},type:"primary"},"保存"),a.createElement(f.a,{onClick:this.back},"取消")))))}}])&&h(n.prototype,r),t}())||r)||r}}]);