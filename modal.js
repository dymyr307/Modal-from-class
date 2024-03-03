class Modal {
  constructor(text) {
    this.text = text;
    this.init();
  }

  init() {
    this.createMarkup();
    this.modal = document.getElementById('myModal');
  }

  createMarkup() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${this.text}</p>
        </div>
    </div>
    `
    );
  }

  attachEvents() {}
}
