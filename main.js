(()=>{"use strict";document.querySelector(".profile__title"),document.querySelector(".profile__subtitle");var e=document.querySelector(".profile__edit-button"),t=(document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit-profile")),n=document.querySelector(".popup_type_image"),r=(n.querySelector(".popup__image-link"),n.querySelector(".popup__image-name"),t.querySelector(".popup__form")),o=t.querySelector(".popup__input_type_name"),i=t.querySelector(".popup__input_type_about"),u=document.querySelector(".profile__add-button"),a=document.querySelector(".popup_type_add-card"),c=(a.querySelector(".popup__input_card_name"),a.querySelector(".popup__input_card_link"),a.querySelector(".popup__form")),l=(document.querySelector(".elements-list"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o){var i,u,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=function(){a._cardElement.remove()},(i="_handleDeleteCard")in this?Object.defineProperty(this,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):this[i]=u,this._elementTemplate=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._handleCardClick=r,this._handleDelCardBtnClick=o}var t,n;return t=e,(n=[{key:"_handleLikeCard",value:function(e){e.currentTarget.classList.toggle("element__like-button_active")}},{key:"_setLike",value:function(){this._cardElement.querySelector(".element__like-counter").textContent=this._likes.length}},{key:"_addListeners",value:function(e){this._cardElement.querySelector(".element__delete-button").addEventListener("click",(function(){return console.log("clicked")})),e.querySelector(".element__like-button").addEventListener("click",this._handleLikeCard),e.querySelector(".element__image").addEventListener("click",this._handleCardClick)}},{key:"createCard",value:function(){this._cardElement=this._elementTemplate.querySelector(".element").cloneNode(!0);var e=this._cardElement.querySelector(".element__image");return e.src=this._link,e.alt=this._name,this._cardElement.querySelector(".element__image-name").textContent=this._name,this._addListeners(this._cardElement),this._setLike(),this._cardElement}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupForm=n,this._config=t,this._popupSubmitButton=this._popupForm.querySelector(this._config.submitButtonSelector),this._popupInputs=this._popupForm.querySelectorAll(this._config.inputSelector)}var t,n;return t=e,(n=[{key:"_handleFormSubmit",value:function(e){e.preventDefault()}},{key:"_enableInputErr",value:function(e,t){var n=this._popupForm.querySelector("#error-".concat(e.id));n.textContent=t,e.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass)}},{key:"_disableInputErr",value:function(e){var t=this._popupForm.querySelector("#error-".concat(e.id));t.textContent="",e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass)}},{key:"_validateInput",value:function(e){e.validity.valid?this._disableInputErr(e):this._enableInputErr(e,e.validationMessage)}},{key:"_enableButton",value:function(){this._popupSubmitButton.removeAttribute("disabled"),this._popupSubmitButton.classList.remove(this._config.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._popupSubmitButton.setAttribute("disabled",""),this._popupSubmitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._popupForm.checkValidity()?this._enableButton():this._disableButton()}},{key:"resetValidation",value:function(){var e=this;Array.from(this._popupInputs).forEach((function(t){e._disableInputErr(t)})),this._toggleButtonState()}},{key:"_setEvtListeners",value:function(){var e=this;this._toggleButtonState(),Array.from(this._popupInputs).forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._popupForm.addEventListener("submit",this._handleFormSubmit),this._setEvtListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("mousedown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image-link"),t._popupName=t._popup.querySelector(".popup__image-name"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._popupName.textContent=t,this._popupImage.src=n,g(E(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function A(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return C(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"setEventListeners",value:function(){var e=this;q(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){q(T(u.prototype),"close",this).call(this),this._form.reset()}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.profileNameSelector,r=t.profileAboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userAbout:this._userAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._userNameElement.textContent=t,this._userAboutElement.textContent=n}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._headers=n}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards",{headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api загрузки карточек с сервера, мой господин!: ".concat(e.status))})).catch(console.log)}},{key:"getProfile",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/users/me",{headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api загрузки профиля с сервера, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("https://mesto.nomoreparties.co/v1/cohort-39/users/me",{method:"PATCH",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api редактирования профиля, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards",{method:"POST",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api добавления карточки, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39"},{headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}),V=new y(l,c),U=new y(l,r);F.getProfile().then((function(e){$.setUserInfo({userName:e.name,userAbout:e.about})})),F.getInitialCards().then((function(e){e.forEach((function(e){var t=D({name:e.name,link:e.link,likes:e.likes});console.log("Card Object",e),z.addItem(t)}))})),V.enableValidation(),U.enableValidation();var D=function(e){return new p(e,"#element-template",(function(){J.open({name:e.name,link:e.link}),G.open()})).createCard()},z=new h({items:[],renderer:function(e){var t=D(e);z.addItem(t)}},".elements-list"),J=new j(".popup_type_image"),M=new B(".popup_type_edit-profile",(function(e){console.log(e),F.editProfile(e).then((function(){$.setUserInfo({userName:e.name,userAbout:e.about}),M.close()}))})),H=new B(".popup_type_add-card",(function(e){!function(e){F.addCard(e["card-name"],e["card-link"]).then((function(e){var t=D({name:e.name,link:e.link,likes:e.likes});z.addItem(t)}))}(e),H.close()})),$=new N({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle"}),G=new B(".popup_type_sure",(function(){console.log("click yopta!")}));z.renderItems(),J.setEventListeners(),M.setEventListeners(),H.setEventListeners(),G.setEventListeners(),e.addEventListener("click",(function(){var e=$.getUserInfo(),t=e.userName,n=e.userAbout;o.value=t,i.value=n,U.resetValidation(),M.open()})),u.addEventListener("click",(function(){V.resetValidation(),H.open()}))})();