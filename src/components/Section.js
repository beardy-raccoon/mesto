export class Section {
  constructor({ items, renderer }, contSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(contSelector);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(cardElement) {
    this._container.append(cardElement);
  }

  addNewItem(cardElement) {
    this._container.prepend(cardElement);
  }
}
