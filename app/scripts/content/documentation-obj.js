var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var documentationObj = {
  npmInstallationExample: `
  npm install @drewbot/sass-flexbox-grid --save
  `,
  cssInstallationExample: `
  // Full version
  node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css
  // Minified version
  node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.min.css
  `,
  sassInstallationExample: `
  node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/scss
  `,
  variableSetupExample: `
  // .../sass-flexbox-grid/public/sass-flexbox/scss/variables/_grid-variables.scss
  ${indent}
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
  `
}

module.exports = documentationObj;
