(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__1PXH0"}},46:function(e,t,c){e.exports={comments:"Comments_comments__2QL8b",button1:"Comments_button1__DM49g",butto1:"Comments_butto1__pw2cW","button1--flat":"Comments_button1--flat__HZfMo"}},47:function(e,t,c){e.exports={form:"NewCommentForm_form__3_5NH",loading:"NewCommentForm_loading__1yoAE",control:"NewCommentForm_control__23AJY",actions:"NewCommentForm_actions__3P9iY"}},48:function(e,t,c){e.exports={item:"CommentItem_item__3UVnc"}},49:function(e,t,c){e.exports={comments:"CommentsList_comments__2k3sY"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(45),m=c.n(a),r=c(1),j=function(e){return Object(r.jsxs)("figure",{className:m.a.quote,children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("figcaption",{children:e.author})]})},i=c(37),d=c(46),u=c.n(d),l=c(35),b=c(36),x=c(14),O=c(47),h=c.n(O),f=function(e){var t=Object(n.useRef)(),c=Object(l.a)(b.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);return Object(r.jsxs)("form",{className:h.a.form,onSubmit:function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})},children:["pending"===o&&Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})}),Object(r.jsxs)("div",{className:h.a.control,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{className:h.a.actions,children:Object(r.jsx)("button",{className:"btn",children:"Add Comment"})})]})},_=c(48),p=c.n(_),N=function(e){return Object(r.jsx)("li",{className:p.a.item,children:Object(r.jsx)("p",{children:e.text})})},C=c(49),g=c.n(C),v=function(e){return Object(r.jsx)("ul",{className:g.a.comments,children:e.comments.map((function(e){return Object(r.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(s.j)().quoteId,m=Object(l.a)(b.c),j=m.sendRequest,d=m.status,O=m.data;Object(n.useEffect)((function(){j(a)}),[a,j]);var h,_=Object(n.useCallback)((function(){j(a)}),[j,a]);"pending"===d&&(h=Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})})),"completed"===d&&O&&O.length>0&&(h=Object(r.jsx)(v,{comments:O})),"completed"!==d||O&&0!==O.length||(h=Object(r.jsx)("p",{className:"centered",children:"No comments were added yet!"}));return Object(r.jsxs)("section",{className:u.a.comments,children:[Object(r.jsx)("h2",{children:"User Comments"}),!c&&Object(r.jsx)("button",{className:u.a.button1,onClick:function(){o(!0)},children:"Add a Comment"}),Object(r.jsx)("button",{className:u.a.button1,onClick:function(e){o(!1)},children:"Remove TextBox"}),c&&Object(r.jsx)(f,{quoteId:a,onAddedComment:_}),h]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(l.a)(b.e,!0),a=c.sendRequest,m=c.status,i=c.data,d=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===m?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})}):d?Object(r.jsx)("p",{className:"centered",children:d}):i.text?Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(j,{text:i.text,author:i.author}),Object(r.jsx)(s.c,{path:e.path,exact:!0,children:Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(r.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(r.jsx)(q,{})})]}):Object(r.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.5ede1fc6.chunk.js.map