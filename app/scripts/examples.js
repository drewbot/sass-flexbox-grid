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
  ${indent}<div class="col"></div>
  ${indent}<div class="col"></div>
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
  `,
  variablesExample: `
  $grid-columns: 12;

  $xs-max: 640px;
  $sm-max: 1024px;
  $md-max: 1440px;
  $lg-max: 1920px;

  $content-well-max-width: 2400px;
  `,
  mixinsExample: `
  .container {
  ${indent}@include row();
  ${indent}.box {
  ${indentDouble}@inlcude col(6);
  ${indentDouble}@inlcude col(md, 3);
  ${indent}}
  ${indent}.extras {
  ${indentDouble}@include hide(lg);
  ${indent}}
  }
  `,
  visibilityExample: `
  <div class="row">
  ${indent}<div class="col hide-md-up"></div>
  ${indent}<div class="col hide-xs-up show-md-up"></div>
  ${indent}<div class="col"></div>
  ${indent}<div class="col"></div>
  ${indent}<div class="col"></div>
  ${indent}<div class="col hide-sm-only"></div>
  </div>
  `,
  eqHeightExample: `
  <div class="row eq-height">
  ${indent}<div class="col">
  ${indentDouble}<div height="20px"></div>
  ${indent}</div>
  ${indent}<div class="col">
  ${indentDouble}<div height="150px"></div>
  ${indent}</div>
  </div>
  `
}

module.exports = examplesObj;
