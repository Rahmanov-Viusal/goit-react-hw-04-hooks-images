(this["webpackJsonpgoit-react-hw-04-hooks-image"]=this["webpackJsonpgoit-react-hw-04-hooks-image"]||[]).push([[0],{13:function(e,t,n){e.exports={Item:"ImageGalleryItem_Item__WGOL6",Image:"ImageGalleryItem_Image__3YXvD"}},14:function(e,t,n){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},16:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},17:function(e,t,n){e.exports={container:"Container_container__3RIox"}},18:function(e,t,n){e.exports={Gallery:"Section_Gallery__1vxqD"}},19:function(e,t,n){e.exports={text:"ErrorMessage_text__aP9ZG"}},20:function(e,t,n){e.exports={text:"Request_text__167Pw"}},21:function(e,t,n){e.exports={Button:"Button_Button__3R1xi"}},26:function(e,t,n){},29:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(26),n(5)),i=n.n(s),u=n(11),l=n(9),j=n(3),b=n(10),m=(n(28),n(29),n(15)),d=n.n(m),h=(n(50),n(1));function f(){return Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{type:"Circles",color:"#00BFFF",height:80,width:80})})}var O=n(13),p=n.n(O);function x(e){var t=e.openModal,n=e.webformatURL,a=e.largeImageURL,r=e.tags,c=void 0===r?"image":r;return Object(h.jsx)("li",{className:p.a.Item,children:Object(h.jsx)("img",{onClick:function(e){t(e.target.dataset.large)},src:n,alt:c,className:p.a.Image,"data-large":a})})}var g=n(16),_=n.n(g),v=function(e){var t=e.images,n=e.openModal;return Object(h.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(h.jsx)(x,{webformatURL:a,openModal:n,largeImageURL:r,tags:c},t)}))})},y=n(6),S=n.n(y),I=n(17),w=n.n(I),N=function(e){var t=e.children;return Object(h.jsx)("div",{className:w.a.container,children:t})};function k(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],o=r[1];return Object(h.jsx)("header",{className:S.a.Searchbar,children:Object(h.jsx)(N,{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c?(t(c),o("")):b.b.error("Please, enter your request!")},className:S.a.Form,children:[Object(h.jsx)("button",{type:"submit",className:S.a.Button,children:Object(h.jsx)("span",{className:S.a.Label,children:"Search"})}),Object(h.jsx)("input",{className:S.a.Input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase().trim())},value:c})]})})})}var L="22960309-85052fc004ca9b43ae271af96",C=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,c,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=").concat(L,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}));case 3:return a=e.sent,r=a.hits,c=a.total,e.abrupt("return",{hits:r,total:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={fetchImage:C},G=n(18),B=n.n(G),F=function(e){var t=e.children;return Object(h.jsx)("section",{className:B.a.Gallery,children:t})},R=n(19),E=n.n(R),q=function(e){var t=e.message;return Object(h.jsx)("p",{className:E.a.text,children:t})},P=n(20),U=n.n(P),D=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:U.a.text,children:"Please, enter your request"})})},T=n(21),J=n.n(T),W=function(e){var t=e.onClick;return Object(h.jsx)("button",{type:"button",className:J.a.Button,onClick:t,children:"Load more"})},A=n(14),H=n.n(A),Y=document.querySelector("#modal-root");function z(e){var t=e.onClose,n=e.children;Object(a.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(c.createPortal)(Object(h.jsx)("div",{className:H.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(h.jsx)("div",{className:H.a.Modal,children:n})}),Y)}function Q(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(j.a)(c,2),s=o[0],m=o[1],d=Object(a.useState)(1),O=Object(j.a)(d,2),p=O[0],x=O[1],g=Object(a.useState)(null),_=Object(j.a)(g,2),y=_[0],S=_[1],I=Object(a.useState)(null),w=Object(j.a)(I,2),L=w[0],C=w[1],G=Object(a.useState)("idle"),B=Object(j.a)(G,2),R=B[0],E=B[1],P=Object(a.useState)(!1),U=Object(j.a)(P,2),T=U[0],J=U[1],A=Object(a.useState)(""),H=Object(j.a)(A,2),Y=H[0],Q=H[1];Object(a.useEffect)((function(){function e(){return e=Object(l.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.fetchImage(t,n).then((function(e){var t=e.hits,a=e.total;m(1===n?Object(u.a)(t):function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))}),C(a),E("resolved"),a?S(null):(S("Something went wrong! Please, change your request!"),E("rejected")),Z()}));case 2:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}n&&(E("pending"),function(t,n){e.apply(this,arguments)}(n,p))}),[n,p]);var X=function(e){J(!T),Q(e)},Z=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{onSubmit:function(e){r(e),x(1)}}),";",Object(h.jsx)(F,{children:Object(h.jsxs)(N,{children:["idle"===R&&Object(h.jsx)(D,{}),"rejected"===R&&Object(h.jsx)(q,{message:y}),Object(h.jsx)(v,{images:s,openModal:X}),"pending"===R&&Object(h.jsx)(f,{}),L-12*p>0&&"resolved"===R&&Object(h.jsx)(W,{onClick:function(){x((function(e){return e+1}))}})]})}),T&&Object(h.jsx)(z,{onClose:X,children:Object(h.jsx)("img",{src:Y,alt:""})}),Object(h.jsx)(b.a,{autoClose:3e3})]})}o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",Form:"Searchbar_Form__1p_P8",Button:"Searchbar_Button__257ni",Label:"Searchbar_Label__3QAIr",Input:"Searchbar_Input__3SYi2"}}},[[52,1,2]]]);
//# sourceMappingURL=main.cb6ad2d9.chunk.js.map