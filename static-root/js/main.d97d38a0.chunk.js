(this.webpackJsonptweetme_web=this.webpackJsonptweetme_web||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),o=(n(14),n(7)),i=n.n(o),s=(n(15),n(2)),u=n(1);function m(e,t,n,a){var c;a&&(c=JSON.stringify(a));var r=new XMLHttpRequest,l="http://localhost:8000/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,l),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(){n({message:"an error occured"},400)},r.send(c)}function d(e,t,n){var a="/tweets";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://localhost:8000/api","")),m("GET",a,t)}function f(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),m("GET",n,e)}function w(e){var t=e.tweet,n=e.action,a=e.didPerformAction,r=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=n.display?n.display:"Action",i="like"===n.type?"".concat(r," ").concat(o):o,s=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)};return c.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,n){m("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,s)}},"  ",i," ")}function p(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profile/".concat(t)}},e.children)}function b(e){var t=e.user,n=e.includeFullName,a=e.hideLink,r=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return c.a.createElement(c.a.Fragment,null,r,!0===a?"@".concat(t.username):c.a.createElement(p,{username:t.username},"@",t.username))}function E(e){var t=e.user,n=e.hideLink,a=c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]);return!0===n?a:c.a.createElement(p,{username:t.username},a)}var v=n(8),h=n.n(v);function O(e){return c.a.createElement("span",{className:e.className},h()(e.children).format("0a"))}function j(e){var t=e.user,n=e.didFollowToggle,a=e.profileLoading,r=t&&t.is_following?"unfollow":"follow";r=a?"loading..":r;return t?c.a.createElement("div",null,c.a.createElement(E,{user:t,hideLink:!0}),c.a.createElement("p",null,c.a.createElement(b,{user:t,includeFullName:!0,hideLink:!0})),c.a.createElement("p",null,c.a.createElement(O,null,t.follower_count),1===t.follower_count?" follower":" followers"),c.a.createElement("p",null,c.a.createElement(O,null,t.following_count)," following"),c.a.createElement("p",null,t.location),c.a.createElement("p",null,t.bio),c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!a&&n(r)}},r)):null}function g(e){var t=e.username,n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],o=r[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),d=s[0],f=s[1],w=Object(a.useState)(!1),p=Object(u.a)(w,2),b=p[0],E=p[1],v=function(e,t){200===t&&f(e)};Object(a.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/profiles/".concat(e,"/"),t)}(t,v),o(!0))}),[l,o,t]);return!1===l?"loadingProfile...":d?c.a.createElement(j,{user:d,didFollowToggle:function(e){!function(e,t,n){var a={action:"".concat(t&&t).toLowerCase()};m("POST","/profiles/".concat(e,"/follow"),n,a)}(t,e,(function(e,t){200===t&&f(e),E(!1)})),E(!0)},profileLoading:b}):null}function N(e){var t=e.tweet;return t.parent?c.a.createElement(y,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function y(e){var t=e.tweet,n=e.didRetweet,r=e.hideActions,l=e.isRetweet,o=e.retweeter,i=Object(a.useState)(e.tweet?e.tweet:null),s=Object(u.a)(i,2),m=s[0],d=s[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===l?"".concat(f," p-2 border rounded"):f;var p=window.location.pathname.match(/\d+/),v=p?p[0]:-1,h="".concat(t.id)==="".concat(v),O=function(e,t){200===t?d(e):201===t&&n&&n(e)};return c.a.createElement("div",{className:f},!0===l&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"retweet via ",c.a.createElement(b,{user:o}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},c.a.createElement(E,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement(b,{includeFullName:!0,user:t.user}),c.a.createElement("p",null,t.content),c.a.createElement(N,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},m&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{tweet:m,didPerformAction:O,action:{type:"like",display:"likes"}}),c.a.createElement(w,{tweet:m,didPerformAction:O,action:{type:"unlike",display:"unlike"}}),c.a.createElement(w,{tweet:m,didPerformAction:O,action:{type:"retweet",display:"retweet"}})),!0===h?null:c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"view")))))}function k(e){var t=Object(a.useState)(e.newTweets?e.newTweets:[]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],w=Object(a.useState)(null),p=Object(u.a)(w,2),b=p[0],E=p[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),O=h[0],j=h[1];Object(a.useEffect)((function(){var t=Object(s.a)(e.newTweets).concat(r);t.length!==m.length&&f(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===O){d(e.username,(function(e,t){200===t&&(l(e.results),E(e.next),j(!0))}))}}),[r,O,j,e.username]);var g=function(e){var t=Object(s.a)(m);t.unshift(e),l(t);var n=Object(s.a)(r);n.unshift(m),f(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(y,{tweet:e,didRetweet:g,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==b){d(e.username,(function(e,t){if(200===t){var n=Object(s.a)(m).concat(e.results);l(n),E(e.next),f(n)}}),b)}},className:"btn btn-outline-primary"},"load next"))}function T(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("an error occured"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;m("POST","/tweets/create/",a,{content:n}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"tweet")))}function S(e){var t=Object(a.useState)(e.newTweets?e.newTweets:[]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],d=i[1],w=Object(a.useState)(null),p=Object(u.a)(w,2),b=p[0],E=p[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),O=h[0],j=h[1];Object(a.useEffect)((function(){var t=Object(s.a)(e.newTweets).concat(r);t.length!==m.length&&d(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===O){f((function(e,t){200===t&&(l(e.results),E(e.next),j(!0))}))}}),[r,O,j,e.username]);var g=function(e){var t=Object(s.a)(m);t.unshift(e),l(t);var n=Object(s.a)(r);n.unshift(m),d(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(y,{tweet:e,didRetweet:g,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){f((function(e,t){if(200===t){var n=Object(s.a)(m).concat(e.results);l(n),E(e.next),d(n)}}),b)}},className:"btn btn-outline-primary"},"load next"))}function x(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(T,{className:"col-12 mb-3",didTweet:function(e){var t=Object(s.a)(r);t.unshift(e),l(t)}}),c.a.createElement(k,Object.assign({newTweets:r},e)))}function A(e){var t=e.tweetId,n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],o=r[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),d=s[0],f=s[1],w=function(e,t){200===t?f(e):alert("An error occured when finding your tweet")};return Object(a.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t)}(t,w),o(!0))}),[l,o,t]),null===d?null:c.a.createElement(y,{tweet:d,className:e.className})}var R=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(x,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=document.getElementById("root");L&&l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),L);var q=c.a.createElement,C=document.getElementById("tweetme");C&&l.a.render(q(x,C.dataset),C);var F=document.getElementById("tweetme-feed");F&&l.a.render(q((function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(T,{className:"col-12 mb-3",didTweet:function(e){var t=Object(s.a)(r);t.unshift(e),l(t)}}),c.a.createElement(S,Object.assign({newTweets:r},e)))}),C.dataset),F),document.querySelectorAll(".tweetme-detail").forEach((function(e){l.a.render(q(A,e.dataset),e)})),document.querySelectorAll(".tweetme-profile-badge").forEach((function(e){l.a.render(q(g,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d97d38a0.chunk.js.map