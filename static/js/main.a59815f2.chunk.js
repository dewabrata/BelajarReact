(this.webpackJsonpujian3=this.webpackJsonpujian3||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s(1),c=s.n(i),r=s(8),a=s.n(r),l=(s(14),s(2)),o=s(3),u=s(6),d=s(5),h=s(4),p=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("li",{className:"list-group-item d-flex justify-content-between lh-condensed",id:this.props.urut,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{className:"my-0",children:this.props.title}),Object(n.jsxs)("small",{className:"text-muted",children:["  ",this.props.description]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(e){t.props.eventClick(t.props.urut,t.props.allData)},children:"Delete"})})]}),Object(n.jsxs)("span",{className:"text-muted",children:["  ",this.props.price]})]})}}]),s}(i.Component),j=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("li",{className:"media",id:this.props.urut,children:[Object(n.jsx)("img",{src:this.props.images,style:{width:"150px",height:"150px"},className:"img-thumbnail",alt:"..."}),Object(n.jsxs)("div",{className:"media-body",children:[Object(n.jsx)("h5",{className:"mt-0 mb-1",children:this.props.title}),this.props.description]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(e){t.props.eventClick(t.props.model,t.props.urut)},children:"Add to cart"})})]})}}]),s}(i.Component),b=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).nourut=0,n.carts=[],n.addCart=n.addCart.bind(Object(u.a)(n)),n.deleteCart=n.deleteCart.bind(Object(u.a)(n)),n.state={product:[],cart:[],nourut:0},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var t=this;fetch("https://fakestoreapi.com/products?limit=20").then((function(t){return t.json()})).then((function(e){t.setState({product:e})}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4 order-md-2 mb-4",children:[Object(n.jsxs)("h4",{className:"d-flex justify-content-between align-items-center mb-3",children:[Object(n.jsx)("span",{className:"text-muted",children:"Your cart"}),Object(n.jsx)("span",{className:"badge badge-secondary badge-pill",children:this.state.cart.length})]}),Object(n.jsx)("ul",{className:"list-group mb-3",children:this.state.cart.map((function(e,s){return Object(n.jsx)(p,{eventClick:t.deleteCart,urut:s,nomer:s,model:e,id:e.id,images:e.image,price:e.price,title:e.title,description:e.description},e.id)}))})]}),Object(n.jsx)("div",{className:"col-md-8 order-md-1",children:Object(n.jsx)("ul",{className:"list-unstyled",children:this.state.product.map((function(e,s){return Object(n.jsx)(j,{eventClick:t.addCart,urut:s,model:e,id:e.id,images:e.image,title:e.title,description:e.description},s)}))})})]})}},{key:"addCart",value:function(t,e){this.setState({nourut:this.state.nourut+1}),t.urut=this.state.nourut,this.carts.push(t),this.setState({cart:this.carts}),console.log(this.state.cart)}},{key:"deleteCart",value:function(t,e){for(var s=[],n=0;n<this.carts.length;n++)n!==t&&s.push(this.carts[n]);this.carts=s,this.setState({cart:this.carts})}}]),s}(i.Component),m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;s(t),n(t),i(t),c(t),r(t)}))};a.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.a59815f2.chunk.js.map