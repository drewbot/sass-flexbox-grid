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
  $grid-columns: 12; // Set number of columns in the grid
  ${indent}
  $xs-max: 40rem; // Set xs breakpoint's max width
  $sm-max: 64rem; // Set sm breakpoint's max width
  $md-max: 90rem; // Set md breakpoint's max width
  $lg-max: 120rem; // Set lg breakpoint's max width
  ${indent}
  $gutter: 1rem; // Set gutter size
  ${indent}
  $content-well-max-width: "none"; // Set the max-width of the content well
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
  ${indent}<div class="col hide-md"></div>
  ${indent}<div class="col hide-xs show-md"></div>
  ${indent}<div class="col"></div>
  ${indent}<div class="col"></div>
  ${indent}<div class="col"></div>
  ${indent}<div class="col hide-sm-only"></div>
  </div>
  `,
  eqHeightExample: `
  <div class="row">
  ${indent}<div class="col">Content of varying height</div>
  ${indent}<div class="col">Content of varying height</div>
  </div>
  `
}

module.exports = examplesObj;

// var examplesArray = [
//   {
//     id: 'responsiveExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs-12 col-sm-8 col-md-6 col-lg-4"></div>
//     </div>
//     `
//   },
//   {
//     id: 'offsetsExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs-offset-3 col-xs-9"></div>
//     </div>
//     `
//   },
//   {
//     id: 'autoWidthExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col"></div>
//     </div>
//     `
//   },
//   {
//     id: 'nestedExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs">
//     ${indentDouble}<div class="row">
//     ${indentTriple}<div class="col-xs"></div>
//     ${indentDouble}</div>
//     ${indent}</div>
//     </div>
//     `
//   },
//   {
//     id: 'alignmentExample',
//     markup: `
//     <div class="row start-xs">
//     ${indent}<div class="col-xs-6">content</div>
//     </div>
//     `
//   },
//   {
//     id: 'distributionExample',
//     markup: `
//     <div class="row around-xs">
//     ${indent}<div class="col-xs-2"></div>
//     ${indent}<div class="col-xs-2"></div>
//     ${indent}<div class="col-xs-2"></div>
//     </div>
//     `
//   },
//   {
//     id: 'reorderExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs-2">1</div>
//     ${indent}<div class="col-xs-2">2</div>
//     ${indent}<div class="col-xs-2 first-xs">3</div>
//     ${indent}...
//     </div>
//     `
//   },
//   {
//     id: 'reverseExample',
//     markup: `
//     <div class="row reverse">
//     ${indent}<div class="col-xs">1</div>
//     ${indent}<div class="col-xs">2</div>
//     ${indent}<div class="col-xs">3</div>
//     </div>
//     `
//   },
//   {
//     id: 'variablesExample',
//     markup: `
//     $grid-columns: 12;
//
//     $xs-max: 640px;
//     $sm-max: 1024px;
//     $md-max: 1440px;
//     $lg-max: 1920px;
//
//     $content-well-max-width: 2400px;
//     `
//   },
//   {
//     id: 'mixinsExample',
//     markup: `
//     .container {
//     ${indent}@include row();
//     ${indent}.box {
//     ${indentDouble}@inlcude col(6);
//     ${indentDouble}@inlcude col(md, 3);
//     ${indent}}
//     ${indent}.extras {
//     ${indentDouble}@include hide(lg);
//     ${indent}}
//     }
//     `
//   },
//   {
//     id: 'visibilityExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col hide-md-up"></div>
//     ${indent}<div class="col hide-xs-up show-md-up"></div>
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col hide-sm-only"></div>
//     </div>
//     `
//   },
//   {
//     id: 'eqHeightExample',
//     markup: `
//     <div class="row eq-height">
//     ${indent}<div class="col">Content of varying height</div>
//     ${indent}<div class="col">Content of varying height</div>
//     </div>
//     `
//   }
// ]
