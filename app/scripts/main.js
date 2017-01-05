var mainObj = {
  owner: 'Drew Botka',
  copyright: new Date().getFullYear(),
  isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright() {
    return `&copy; ${this.copyright} ${this.owner}. All Rights Reserved.`
  }
};

module.exports = mainObj;
