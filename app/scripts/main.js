var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var mainObj = {
  owner: 'Drew Botka',
  copyright: new Date().getFullYear(),
  responsiveExample: `
  <div class="row">
  ${indent}<div class="col-xs-12 col-sm-8 col-md-6 col-lg-4"></div>
  </div>
  `,
  offsetsExample: `
  <div class="row">
  ${indent}<div class="col-xs-offset-3 col-xs-9"></div>
  </div>
  `,
  autoWidthExample: `
  <div class="row">
  ${indent}<div class="col-xs"></div>
  ${indent}<div class="col-xs"></div>
  </div>
  `,
  nestedExample: `
  <div class="row">
  ${indent}<div class="col-xs">
  ${indentDouble}<div class="row">
  ${indentTriple}<div class="col-xs"></div>
  ${indentDouble}</div>
  ${indent}</div>
  </div>
  `,
  alignmentExample: `
  <div class="row start-xs">
  ${indent}<div class="col-xs-6">content</div>
  </div>
  `,
  isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright() {
    return `&copy; ${this.copyright} ${this.owner}. All Rights Reserved.`
  }
};

module.exports = mainObj;
