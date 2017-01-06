var mainObj = {
  owner: 'Drew Botka',
  githubUrl: `https://github.com/drewbot`,
  currentYear: new Date().getFullYear(),
  isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright() {
    return `&copy; ${this.currentYear} ${this.owner}. All Rights Reserved.`
  },
  getOwnerContent() {
    return `Made by <a href="${this.githubUrl}">${this.owner}</a>`
  }
};

module.exports = mainObj;
