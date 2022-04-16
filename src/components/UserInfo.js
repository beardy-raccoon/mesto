export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
    this._userNameElement = document.querySelector(profileNameSelector);
    this._userAboutElement = document.querySelector(profileAboutSelector);
    this._userAvatarElememt = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userAbout: this._userAboutElement.textContent
    }
  }

  setUserInfo({ userName, userAbout }) {
    this._userNameElement.textContent = userName;
    this._userAboutElement.textContent = userAbout;
  }

  setUserAvatar({userAvatar}) {
    this._userAvatarElememt.style.backgroundImage  = `url(${userAvatar})`;
  }
}
