export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._userNameElement = document.querySelector(profileNameSelector);
    this._userAboutElement = document.querySelector(profileAboutSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userAbout: this._userAboutElement.textContent
    }
  }

  setUserInfo({ userName, userAbout }) {
    this._userNameElement.textContent = userName
    this._userAboutElement.textContent = userAbout
  }
}
