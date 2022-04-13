class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-39/cards', {
      headers: {
        authorization: 'be572c5e-d007-4eb5-8f11-d7febc239ede',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка api загрузки карточек с сервера, мой господин!: ${res.status}`))
    .catch(console.log)
  }

  getProfile() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-39/users/me', {
      headers: {
        authorization: 'be572c5e-d007-4eb5-8f11-d7febc239ede',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка api загрузки профиля с сервера, мой господин! Статус ошибки: ${res.status}`))
    .catch(console.log)
  }

  editProfile({name, about}) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-39/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'be572c5e-d007-4eb5-8f11-d7febc239ede',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка api редактирования профиля, мой господин! Статус ошибки: ${res.status}`))
    .catch(console.log)
  }

  addCard(name, link) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-39/cards', {
      method: 'POST',
      headers: {
        authorization: 'be572c5e-d007-4eb5-8f11-d7febc239ede',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка api добавления карточки, мой господин! Статус ошибки: ${res.status}`))
    .catch(console.log)
  }

  deleteCard(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-39/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'be572c5e-d007-4eb5-8f11-d7febc239ede',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка api delete карточки, мой господин! Статус ошибки: ${res.status}`))
    .catch(console.log)
  }
}

export const api = new Api({baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39'}, {headers: {authorization: 'be572c5e-d007-4eb5-8f11-d7febc239ede','Content-Type': 'application/json'}});

