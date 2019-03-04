class jQuery {
  constructor(selector) {
    const slice = Array.prototype.splice;
    console.log(document.querySelectorAll(selector));
    const dom = slice.call(document.querySelectorAll(selector) || []);
    const len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  append(node) {
  }

  addClass(name) {
  }

  html(htm) {
  }
}

window.$ = function (selector) {
  return new jQuery(selector);
};

window.onload = function () {
  var $ul = $('ul');
  // console.log($ul);
}