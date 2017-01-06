var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var examplesObj = {
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
  distributionExample: `
  <div class="row around-xs">
  ${indent}<div class="col-xs-2"></div>
  ${indent}<div class="col-xs-2"></div>
  ${indent}<div class="col-xs-2"></div>
  </div>
  `,
  reorderExample: `
  <div class="row">
  ${indent}<div class="col-xs-2">1</div>
  ${indent}<div class="col-xs-2">2</div>
  ${indent}<div class="col-xs-2 first-xs">3</div>
  ${indent}...
  </div>
  `,
  reverseExample: `
  <div class="row reverse">
  ${indent}<div class="col-xs">1</div>
  ${indent}<div class="col-xs">2</div>
  ${indent}<div class="col-xs">3</div>
  </div>
  `
}

module.exports = examplesObj;
