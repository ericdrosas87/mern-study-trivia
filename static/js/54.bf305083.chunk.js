(this["webpackJsonpmern-quiz"]=this["webpackJsonpmern-quiz"]||[]).push([[54],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"ion_modal",(function(){return D}));var o=a(16),r=a(1),n=a.n(r),i=a(4),s=a(5),d=a(6),c=a(17),l=a(14),m=a(20),p=a(3),h=a(21),f=a(43),u=a(42),b=(a(30),a(26)),x=a(167),w=a(169),y=.93,v=function(e,t,a){var o=e.offsetHeight,r=!1,n=Object(u.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:function(){t.progressStart(!0,r?1:0)},onMove:function(e){var a=e.deltaY/o;a<0||t.progressStep(a)},onEnd:function(e){var i=e.velocityY,s=e.deltaY/o;if(!(s<0)){var d=(e.deltaY+1e3*i)/o>=.5,c=d?-.001:.001;d?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=Object(f.a)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=Object(f.a)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var l=g(d?s*o:(1-s)*o,i);r=d,n.enable(!1),t.onFinish((function(){d||n.enable(!0)})).progressEnd(d?1:0,c,l),d&&a()}}});return n},g=function(e,t){return Object(m.c)(400,e/Math.abs(1.1*t),500)},k=function(e,t){var a=Object(p.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=Object(p.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=Object(p.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(t){var n=window.innerWidth<768,i="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=Object(p.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(n){var c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=y,m="translateY(".concat(i?"-10px":c,") scale(").concat(l,")");s.afterStyles({transform:m}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"}]),r.addAnimation(s)}else if(r.addAnimation(a),i){var h="translateY(-10px) scale(".concat(i?y:1,")");s.afterStyles({transform:h}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:h}]);var f=Object(p.a)().afterStyles({transform:h}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:h}]);r.addAnimation([s,f])}else o.fromTo("opacity","0","1")}else r.addAnimation(a);return r},j=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=Object(p.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=Object(p.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),n=Object(p.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(r);if(t){var i=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,d=Object(p.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(c.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&c.style.setProperty("background-color",""))})),c=document.body;if(i){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m=s?"-10px":l,h=y,f="translateY(".concat(m,") scale(").concat(h,")");d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:f,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),n.addAnimation(d)}else if(n.addAnimation(o),s){var u=s?y:1,b="translateY(-10px) scale(".concat(u,")");d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:b},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var x=Object(p.a)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:b},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);n.addAnimation([d,x])}else r.fromTo("opacity","1","0")}else n.addAnimation(o);return n},O=function(e){var t=Object(p.a)(),a=Object(p.a)(),o=Object(p.a)();return a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,o])},E=function(e){var t=Object(p.a)(),a=Object(p.a)(),o=Object(p.a)(),r=e.querySelector(".modal-wrapper");return a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,o])},D=function(){function e(t){var a=this;Object(s.a)(this,e),Object(c.l)(this,t),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){a.dismiss(void 0,b.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),a.dismiss()},this.onLifecycle=function(e){var t=a.usersElement,o=S[e.type];if(t&&o){var r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},Object(b.e)(this.el),this.didPresent=Object(c.f)(this,"ionModalDidPresent",7),this.willPresent=Object(c.f)(this,"ionModalWillPresent",7),this.willDismiss=Object(c.f)(this,"ionModalWillDismiss",7),this.didDismiss=Object(c.f)(this,"ionModalDidDismiss",7)}return Object(d.a)(e,[{key:"present",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t,a,o,r,s,d=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return a=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,Object(w.a)(this.delegate,t,this.component,["ion-page"],a);case 8:return this.usersElement=e.sent,e.next=11,Object(h.d)(this.usersElement);case 11:return Object(c.n)((function(){return d.el.classList.add("show-modal")})),e.next=14,Object(b.f)(this,"modalEnter",k,O,this.presentingElement);case 14:o=Object(l.b)(this),this.swipeToClose&&"ios"===o&&(r=this.leaveAnimation||l.c.get("modalLeave",j),s=this.animation=r(this.el,this.presentingElement),this.gesture=v(this.el,s,(function(){d.gestureAnimationDismissing=!0,d.animation.onFinish(Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.dismiss(void 0,"gesture");case 2:d.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}}),e)}))))})),this.gesture.enable(!0));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dismiss",value:function(){var e=Object(i.a)(n.a.mark((function e(t,a){var o,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===a){e.next=2;break}return e.abrupt("return",!1);case 2:return o=b.i.get(this)||[],e.next=5,Object(b.g)(this,t,a,"modalLeave",j,E,this.presentingElement);case 5:if(!(r=e.sent)){e.next=11;break}return e.next=9,Object(w.b)(this.delegate,this.usersElement);case 9:this.animation&&this.animation.destroy(),o.forEach((function(e){return e.destroy()}));case 11:return this.animation=void 0,e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return Object(b.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(b.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e,t=Object(l.b)(this);return Object(c.j)(c.b,{"no-router":!0,"aria-modal":"true",class:Object.assign((e={},Object(o.a)(e,t,!0),Object(o.a)(e,"modal-card",void 0!==this.presentingElement&&"ios"===t),e),Object(x.b)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(c.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&Object(c.j)("div",{class:"modal-shadow"}),Object(c.j)("div",{role:"dialog",class:"modal-wrapper"}))}},{key:"el",get:function(){return Object(c.g)(this)}}]),e}(),S={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};D.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return m}));var o=a(1),r=a.n(o),n=a(4),i=a(16),s=function(e,t){return null!==t.closest(e)},d=function(e){return"string"===typeof e&&e.length>0?Object(i.a)({"ion-color":!0},"ion-color-".concat(e),!0):void 0},c=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},l=/^[a-z][a-z0-9+\-.]*:/,m=function(){var e=Object(n.a)(r.a.mark((function e(t,a,o){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||l.test(t)){e.next=5;break}if(!(n=document.querySelector("ion-router"))){e.next=5;break}return null!=a&&a.preventDefault(),e.abrupt("return",n.push(t,o));case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t,a,o){return e.apply(this,arguments)}}()},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var o=a(1),r=a.n(o),n=a(4),i=function(){var e=Object(n.a)(r.a.mark((function e(t,a,o,n,i){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(a,o,i,n));case 2:if("string"===typeof o||o instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"===typeof o?a.ownerDocument&&a.ownerDocument.createElement(o):o,n&&n.forEach((function(e){return s.classList.add(e)})),i&&Object.assign(s,i),a.appendChild(s),!s.componentOnReady){e.next=11;break}return e.next=11,s.componentOnReady();case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,a,o,r,n){return e.apply(this,arguments)}}(),s=function(e,t){if(t){if(e){var a=t.parentElement;return e.removeViewFromDom(a,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=54.bf305083.chunk.js.map