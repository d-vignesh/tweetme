(this.webpackJsonptweetme_web=this.webpackJsonptweetme_web||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),o=(n(13),n(7)),s=n.n(o),i=(n(14),n(2)),u=n(1);function m(e,t,n,a){var c;a&&(c=JSON.stringify(a));var r=new XMLHttpRequest,l="http://localhost:8000/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,l),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(){n({message:"an error occured"},400)},r.send(c)}function d(e,t,n){var a="/tweets";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://localhost:8000/api","")),m("GET",a,t)}function f(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),m("GET",n,e)}function w(e){var t=e.tweet,n=e.action,a=e.didPerformAction,r=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=n.display?n.display:"Action",s="like"===n.type?"".concat(r," ").concat(o):o,i=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)};return c.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,n){m("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)}},"  ",s," ")}function p(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profile/".concat(t)}},e.children)}function b(e){var t=e.user,n=!0===e.includeFullName?"".concat(t.first_name," ").concat(t.last_name," "):null;return c.a.createElement(c.a.Fragment,null,n,c.a.createElement(p,{username:t.username},"@",t.username))}function v(e){var t=e.user;return c.a.createElement(p,{username:t.username},c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]))}function E(e){var t=e.tweet;return t.parent?c.a.createElement(h,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function h(e){var t=e.tweet,n=e.didRetweet,r=e.hideActions,l=e.isRetweet,o=e.retweeter,s=Object(a.useState)(e.tweet?e.tweet:null),i=Object(u.a)(s,2),m=i[0],d=i[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===l?"".concat(f," p-2 border rounded"):f;var p=window.location.pathname.match(/\d+/),h=p?p[0]:-1,j="".concat(t.id)==="".concat(h),O=function(e,t){200===t?d(e):201===t&&n&&n(e)};return c.a.createElement("div",{className:f},!0===l&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"retweet via ",c.a.createElement(b,{user:o}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},c.a.createElement(v,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement(b,{includeFullName:!0,user:t.user}),c.a.createElement("p",null,t.content),c.a.createElement(E,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},m&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{tweet:m,didPerformAction:O,action:{type:"like",display:"likes"}}),c.a.createElement(w,{tweet:m,didPerformAction:O,action:{type:"unlike",display:"unlike"}}),c.a.createElement(w,{tweet:m,didPerformAction:O,action:{type:"retweet",display:"retweet"}})),!0===j?null:c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"view")))))}function j(e){var t=Object(a.useState)(e.newTweets?e.newTweets:[]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],w=Object(a.useState)(null),p=Object(u.a)(w,2),b=p[0],v=p[1],E=Object(a.useState)(!1),j=Object(u.a)(E,2),O=j[0],g=j[1];Object(a.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&f(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===O){d(e.username,(function(e,t){200===t&&(l(e.results),v(e.next),g(!0))}))}}),[r,O,g,e.username]);var N=function(e){var t=Object(i.a)(m);t.unshift(e),l(t);var n=Object(i.a)(r);n.unshift(m),f(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(h,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==b){d(e.username,(function(e,t){if(200===t){var n=Object(i.a)(m).concat(e.results);l(n),v(e.next),f(n)}}),b)}},className:"btn btn-outline-primary"},"load next"))}function O(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("an error occured"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;m("POST","/tweets/create/",a,{content:n}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"tweet")))}function g(e){var t=Object(a.useState)(e.newTweets?e.newTweets:[]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],d=s[1],w=Object(a.useState)(null),p=Object(u.a)(w,2),b=p[0],v=p[1],E=Object(a.useState)(!1),j=Object(u.a)(E,2),O=j[0],g=j[1];Object(a.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&d(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===O){f((function(e,t){200===t&&(l(e.results),v(e.next),g(!0))}))}}),[r,O,g,e.username]);var N=function(e){var t=Object(i.a)(m);t.unshift(e),l(t);var n=Object(i.a)(r);n.unshift(m),d(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(h,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){f((function(e,t){if(200===t){var n=Object(i.a)(m).concat(e.results);l(n),v(e.next),d(n)}}),b)}},className:"btn btn-outline-primary"},"load next"))}function N(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(O,{className:"col-12 mb-3",didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),l(t)}}),c.a.createElement(j,Object.assign({newTweets:r},e)))}function y(e){var t=e.tweetId,n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],o=r[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),d=i[0],f=i[1],w=function(e,t){200===t?f(e):alert("An error occured when finding your tweet")};return Object(a.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t)}(t,w),o(!0))}),[l,o,t]),null===d?null:c.a.createElement(h,{tweet:d,className:e.className})}var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(N,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=document.getElementById("root");T&&l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),T);var S=c.a.createElement,x=document.getElementById("tweetme");x&&l.a.render(S(N,x.dataset),x);var R=document.getElementById("tweetme-feed");R&&l.a.render(S((function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(O,{className:"col-12 mb-3",didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),l(t)}}),c.a.createElement(g,Object.assign({newTweets:r},e)))}),x.dataset),R),document.querySelectorAll(".tweetme-detail").forEach((function(e){l.a.render(S(y,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ff8c8a96.chunk.js.map