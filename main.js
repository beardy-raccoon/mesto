(()=>{"use strict";document.querySelector(".profile__title"),document.querySelector(".profile__subtitle");var e=document.querySelector(".profile__edit-button"),t=(document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit-profile")),n=document.querySelector(".popup_type_image"),o=(n.querySelector(".popup__image-link"),n.querySelector(".popup__image-name"),t.querySelector(".popup__form"),t.querySelector(".popup__input_type_name")),r=t.querySelector(".popup__input_type_about"),i=document.querySelector(".profile__add-button"),a=document.querySelector(".popup_type_add-card"),u=(a.querySelector(".popup__input_card_name"),a.querySelector(".popup__input_card_link"),a.querySelector(".popup__form"),document.querySelector(".elements-list"),document.querySelector(".profile__avatar-edit-button")),c=(document.querySelector(".popup_type_set-avatar").querySelector(".popup__form"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t,n,o,r,i){var a,u,c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=function(){c._cardElement.remove()},(a="handleDeleteCard")in this?Object.defineProperty(this,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):this[a]=u,this._elementTemplate=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._handleCardClick=o,this._handleDelCardBtnClick=r,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"_handleLikedCard",value:function(){this._cardElement.querySelector(".element__like-button").classList.remove("element__like-button_active")}},{key:"_handleUnLikedCard",value:function(){this._cardElement.querySelector(".element__like-button").classList.add("element__like-button_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"displayLikes",value:function(e){this._likes=e,this._cardElement.querySelector(".element__like-counter").textContent=this._likes.length,this.isLiked()?this._handleUnLikedCard():this._handleLikedCard()}},{key:"_addListeners",value:function(e){var t=this;e.querySelector(".element__delete-button").addEventListener("click",(function(){return t._handleDelCardBtnClick(t._id)})),e.querySelector(".element__like-button").addEventListener("click",(function(){return t._handleLikeClick(t._id)})),e.querySelector(".element__image").addEventListener("click",this._handleCardClick)}},{key:"createCard",value:function(){this._cardElement=this._elementTemplate.querySelector(".element").cloneNode(!0);var e=this._cardElement.querySelector(".element__image");return e.src=this._link,e.alt=this._name,this._cardElement.querySelector(".element__image-name").textContent=this._name,this._addListeners(this._cardElement),this.displayLikes(this._likes),this._ownerId!==this._userId&&(this._cardElement.querySelector(".element__delete-button").style.display="none"),this._cardElement}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(n),this._popupForm=this._popup.querySelector(".popup__form"),this._config=t,this._popupSubmitButton=this._popupForm.querySelector(this._config.submitButtonSelector),this._popupInputs=this._popupForm.querySelectorAll(this._config.inputSelector)}var t,n;return t=e,(n=[{key:"_handleFormSubmitPrevDef",value:function(e){e.preventDefault(),console.log("handleFormSubmit preventDef from FormValidator worked")}},{key:"_enableInputErr",value:function(e,t){var n=this._popupForm.querySelector("#error-".concat(e.id));n.textContent=t,e.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass)}},{key:"_disableInputErr",value:function(e){var t=this._popupForm.querySelector("#error-".concat(e.id));t.textContent="",e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass)}},{key:"_validateInput",value:function(e){e.validity.valid?this._disableInputErr(e):this._enableInputErr(e,e.validationMessage)}},{key:"_enableButton",value:function(){this._popupSubmitButton.removeAttribute("disabled"),this._popupSubmitButton.classList.remove(this._config.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._popupSubmitButton.setAttribute("disabled",""),this._popupSubmitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._popupForm.checkValidity()?this._enableButton():this._disableButton()}},{key:"resetValidation",value:function(){var e=this;Array.from(this._popupInputs).forEach((function(t){e._disableInputErr(t)})),this._toggleButtonState()}},{key:"_setEvtListeners",value:function(){var e=this;this._toggleButtonState(),Array.from(this._popupInputs).forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._popupForm.addEventListener("submit",this._handleFormSubmitPrevDef),this._setEvtListeners()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=function(){function e(t){var n,o,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){"Escape"===e.key&&r.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._popup=document.querySelector(t),this._submitBtn=this._popup.querySelector(".popup__submit-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"changeBtnText",value:function(e){this._submitBtn.textContent=e}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("mousedown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=k(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},v.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image-link"),t._popupName=t._popup.querySelector(".popup__image-name"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._popupName.textContent=t,this._popupImage.src=n,v(w(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=L(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},P.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(o);if(r){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return C(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"switchHandleFormSubmit",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;P(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues()),console.log("handleFormSubmit from PopupWithForm called")}))}},{key:"close",value:function(){P(I(a.prototype),"close",this).call(this),this._form.reset(),document.removeEventListener("keydown",this._handleEntSubmit)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t){var n=t.profileNameSelector,o=t.profileAboutSelector,r=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(o),this._userAvatarElememt=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userAbout:this._userAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._userNameElement.textContent=t,this._userAboutElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.userAvatar;this._userAvatarElememt.style.backgroundImage="url(".concat(t,")")}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var D=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._headers=n}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards",{headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api загрузки карточек с сервера, мой господин!: ".concat(e.status))})).catch(console.log)}},{key:"getProfile",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/users/me",{headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api загрузки профиля с сервера, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"editProfile",value:function(e){var t=e.name,n=e.about;return fetch("https://mesto.nomoreparties.co/v1/cohort-39/users/me",{method:"PATCH",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api редактирования профиля, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"editProfileAvatar",value:function(e){var t=e.avatarlink;return fetch("https://mesto.nomoreparties.co/v1/cohort-39/users/me/avatar",{method:"PATCH",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api редактирования аватара, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards",{method:"POST",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api добавления карточки, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards/".concat(e),{method:"DELETE",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api delete карточки, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"setLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api setLike, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-39/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка api deleteLike, мой господин! Статус ошибки: ".concat(e.status))})).catch(console.log)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39"},{headers:{authorization:"be572c5e-d007-4eb5-8f11-d7febc239ede","Content-Type":"application/json"}});function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=V(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},U.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function H(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var W,Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(o);if(r){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t,n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=function(e){"Enter"===e.key&&t._handleConfirmDeleteCard()},(o="_handleEntSubmit")in(n=J(t=i.call(this,e)))?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,t._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"handleConfirmDeleteCard",value:function(e){this._handleConfirmDeleteCard=e}},{key:"open",value:function(){U(M(a.prototype),"open",this).call(this),document.addEventListener("keydown",this._handleEntSubmit)}},{key:"close",value:function(){U(M(a.prototype),"close",this).call(this),document.removeEventListener("keydown",this._handleEntSubmit)}},{key:"setEventListeners",value:function(){var e=this;U(M(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleConfirmDeleteCard(),console.log("хотя бы это сарботало")}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m),$=new f(c,".popup_type_add-card"),G=new f(c,".popup_type_edit-profile"),K=new f(c,".popup_type_set-avatar");D.getProfile().then((function(e){oe.setUserInfo({userName:e.name,userAbout:e.about}),oe.setUserAvatar({userAvatar:e.avatar}),W=e._id}));var Q=function(e){return X({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:W,ownerId:e.owner._id})};D.getInitialCards().then((function(e){e.forEach((function(e){Z.addItem(Q(e))}))})),$.enableValidation(),G.enableValidation(),K.enableValidation();var X=function(e){var t=new s(e,"#element-template",(function(){ee.open({name:e.name,link:e.link})}),(function(e){re.open(),re.handleConfirmDeleteCard((function(){re.changeBtnText("Удаление"),D.deleteCard(e).then((function(){t.handleDeleteCard(),re.close()})).finally((function(){return re.changeBtnText("Готово")}))}))}),(function(e){t.isLiked()?D.deleteLike(e).then((function(e){t.displayLikes(e.likes)})):D.setLike(e).then((function(e){t.displayLikes(e.likes)}))}));return t.createCard()},Z=new h({items:[],renderer:function(e){var t=X(e);Z.addItem(t)}},".elements-list"),ee=new E(".popup_type_image"),te=new B(".popup_type_edit-profile",(function(e){te.changeBtnText("Сохранение..."),D.editProfile(e).then((function(t){console.log("Edit profile fetch res",t),console.log("incoming to handleProfileFormSubmit data",e),oe.setUserInfo({userName:e.name,userAbout:e.about}),te.close()})).finally((function(){return te.changeBtnText("Готово")}))})),ne=new B(".popup_type_add-card",(function(e){!function(e){ne.changeBtnText("Сохранение"),D.addCard(e["card-name"],e["card-link"]).then((function(e){Z.addNewItem(Q(e))})).finally((function(){return ne.changeBtnText("Готово")}))}(e),ne.close()})),oe=new x({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar-edit-button"}),re=new Y(".popup_type_rYouSure"),ie=new B(".popup_type_set-avatar",(function(e){console.log("1 - incoming to handleSetAvatarFormSubmit data",e),ie.changeBtnText("Сохранение..."),D.editProfileAvatar(e).then((function(t){console.log("Edit avatar fetch res",t),console.log("2 - incoming to then data",e),oe.setUserAvatar({userAvatar:e.avatarlink}),ie.close()})).finally((function(){return ie.changeBtnText("Готово")}))}));Z.renderItems(),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),ie.setEventListeners(),e.addEventListener("click",(function(){var e=oe.getUserInfo(),t=e.userName,n=e.userAbout;o.value=t,r.value=n,G.resetValidation(),te.changeBtnText("Сохранить"),te.open()})),i.addEventListener("click",(function(){$.resetValidation(),ne.changeBtnText("Создать"),ne.open()})),u.addEventListener("click",(function(){K.resetValidation(),ie.changeBtnText("Сохранить"),ie.open()}))})();