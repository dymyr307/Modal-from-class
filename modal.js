const btn1 = document.getElementById('openModal_1');
btn1.addEventListener('click', () => {
  new Modal('Text for modal 1');
});

const btn2 = document.getElementById('openModal_2');
btn2.addEventListener('click', () => {
  new Modal('Text for modal <--------2------------>');
});

class Modal {
  constructor(text = 'ERROR') {
    this.text = text;
    this.init();
  }

  init() {
    this.createMarkup();
    this.modal = document.getElementById('myModal');
    this.closeBtn = this.modal.querySelector('.close');
    this.attachEvents();
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

  attachEvents() {
    this.closeFn = this.closeFn.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.closeBtn.addEventListener('click', this.closeFn);
    window.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if (e.target === this.modal) {
      this.closeFn();
    }
  }

  closeFn() {
    this.detachEvents();
    this.modal.remove();
    this.modal = null;
  }

  detachEvents() {
    this.closeBtn.removeEventListener('click', this.closeFn);
    window.removeEventListener('click', this.handleClick);
  }
}
