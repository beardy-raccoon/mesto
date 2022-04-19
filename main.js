(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".popup_type_edit-profile"),n=t.querySelector(".popup__input_type_name"),r=t.querySelector(".popup__input_type_about"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__avatar-edit-button"),a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r,o,i){var a,u,c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=function(){c._cardElement.remove()},(a="handleDeleteCard")in this?Object.defineProperty(this,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):this[a]=u,this._elementTemplate=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._handleCardClick=r,this._handleDelCardBtnClick=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"_handleLikedCard",value:function(){this._cardElement.querySelector(".element__like-button").classList.remove("element__like-button_active")}},{key:"_handleUnLikedCard",value:function(){this._cardElement.querySelector(".element__like-button").classList.add("element__like-button_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"displayLikes",value:function(e){this._likes=e,this._cardElement.querySelector(".element__like-counter").textContent=this._likes.length,this.isLiked()?this._handleUnLikedCard():this._handleLikedCard()}},{key:"_addListeners",value:function(e){var t=this;e.querySelector(".element__delete-button").addEventListener("click",(function(){return t._handleDelCardBtnClick(t._id)})),e.querySelector(".element__like-button").addEventListener("click",(function(){return t._handleLikeClick(t._id)})),e.querySelector(".element__image").addEventListener("click",this._handleCardClick)}},{key:"createCard",value:function(){this._cardElement=this._elementTemplate.querySelector(".element").cloneNode(!0);var e=this._cardElement.querySelector(".element__image");return e.src=this._link,e.alt=this._name,this._cardElement.querySelector(".element__image-name").textContent=this._name,this._addListeners(this._cardElement),this.displayLikes(this._likes),this._ownerId!==this._userId&&(this._cardElement.querySelector(".element__delete-button").style.display="none"),this._cardElement}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(n),this._popupForm=this._popup.querySelector(".popup__form"),this._config=t,this._popupSubmitButton=this._popupForm.querySelector(this._config.submitButtonSelector),this._popupInputs=this._popupForm.querySelectorAll(this._config.inputSelector)}var t,n;return t=e,(n=[{key:"_handleFormSubmitPrevDef",value:function(e){e.preventDefault()}},{key:"_enableInputErr",value:function(e,t){var n=this._popupForm.querySelector("#error-".concat(e.id));n.textContent=t,e.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass)}},{key:"_disableInputErr",value:function(e){var t=this._popupForm.querySelector("#error-".concat(e.id));t.textContent="",e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass)}},{key:"_validateInput",value:function(e){e.validity.valid?this._disableInputErr(e):this._enableInputErr(e,e.validationMessage)}},{key:"_enableButton",value:function(){this._popupSubmitButton.removeAttribute("disabled"),this._popupSubmitButton.classList.remove(this._config.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._popupSubmitButton.setAttribute("disabled",""),this._popupSubmitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._popupForm.checkValidity()?this._enableButton():this._disableButton()}},{key:"resetValidation",value:function(){var e=this;Array.from(this._popupInputs).forEach((function(t){e._disableInputErr(t)})),this._toggleButtonState()}},{key:"_setEvtListeners",value:function(){var e=this;this._toggleButtonState(),Array.from(this._popupInputs).forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._popupForm.addEventListener("submit",this._handleFormSubmitPrevDef),this._setEvtListeners()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._submitBtn=this._popup.querySelector(".popup__submit-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"changeBtnText",value:function(e){this._submitBtn.textContent=e}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image-link"),t._popupName=t._popup.querySelector(".popup__image-name"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._popupName.textContent=t,this._popupImage.src=n,m(k(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function P(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputsArr=function(e){if(Array.isArray(e))return E(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputsArr.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;C(A(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){C(A(a.prototype),"close",this).call(this),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.profileNameSelector,r=t.profileAboutSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarElememt=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userAbout:this._userAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._userNameElement.textContent=t,this._userAboutElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.userAvatar;this._userAvatarElememt.style.backgroundImage="url(".concat(t,")")}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._getResponse)}},{key:"editProfileAvatar",value:function(e){var t=e.avatarlink;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._getResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:"1"})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}});function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function V(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e){"Enter"===e.key&&t._handleConfirmDeleteCard()},(r="_handleEntSubmit")in(n=J(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"handleConfirmDeleteCard",value:function(e){this._handleConfirmDeleteCard=e}},{key:"open",value:function(){D(M(a.prototype),"open",this).call(this),document.addEventListener("keydown",this._handleEntSubmit)}},{key:"close",value:function(){D(M(a.prototype),"close",this).call(this),document.removeEventListener("keydown",this._handleEntSubmit)}},{key:"setEventListeners",value:function(){var e=this;D(M(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleConfirmDeleteCard()}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z,Y=new s(a,".popup_type_add-card"),G=new s(a,".popup_type_edit-profile"),K=new s(a,".popup_type_set-avatar"),Q=function(e){return W({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:z,ownerId:e.owner._id})};Promise.all([q.getProfile(),q.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo({userName:o.name,userAbout:o.about}),ne.setUserAvatar({userAvatar:o.avatar}),z=o._id,i.forEach((function(e){X.addItem(Q(e))}))})).catch(console.log),Y.enableValidation(),G.enableValidation(),K.enableValidation();var W=function(e){var t=new c(e,"#element-template",(function(){Z.open({name:e.name,link:e.link})}),(function(e){re.open(),re.handleConfirmDeleteCard((function(){re.changeBtnText("Удаление..."),q.deleteCard(e).then((function(){t.handleDeleteCard(),re.close()})).catch((function(e){re.changeBtnText("Error!".concat(e))})).finally((function(){return re.changeBtnText("Да")}))}))}),(function(e){t.isLiked()?q.deleteLike(e).then((function(e){t.displayLikes(e.likes)})):q.setLike(e).then((function(e){t.displayLikes(e.likes)}))}));return t.createCard()},X=new p({items:[],renderer:function(e){var t=W(e);X.addItem(t)}},".elements-list"),Z=new w(".popup_type_image"),ee=new I(".popup_type_edit-profile",(function(e){ee.changeBtnText("Сохранение..."),q.editProfile(e).then((function(){ne.setUserInfo({userName:e.name,userAbout:e.about}),ee.close()})).catch(console.log).finally((function(){return ee.changeBtnText("Сохранить")}))})),te=new I(".popup_type_add-card",(function(e){!function(e){te.changeBtnText("Сохранение..."),q.addCard(e["card-name"],e["card-link"]).then((function(e){X.addNewItem(Q(e)),te.close()})).catch(console.log).finally((function(){return te.changeBtnText("Создать")}))}(e)})),ne=new T({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar-edit-button"}),re=new H(".popup_type_rYouSure"),oe=new I(".popup_type_set-avatar",(function(e){oe.changeBtnText("Сохранение..."),q.editProfileAvatar(e).then((function(){ne.setUserAvatar({userAvatar:e.avatarlink}),oe.close()})).catch(console.log).finally((function(){return oe.changeBtnText("Сохранить")}))}));X.renderItems(),Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),e.addEventListener("click",(function(){var e=ne.getUserInfo(),t=e.userName,o=e.userAbout;n.value=t,r.value=o,G.resetValidation(),ee.open()})),o.addEventListener("click",(function(){Y.resetValidation(),te.open()})),i.addEventListener("click",(function(){K.resetValidation(),oe.open()}))})();