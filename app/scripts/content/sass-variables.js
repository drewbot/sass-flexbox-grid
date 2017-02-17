var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassVarsObj = {
  gridVarsExample: `
  $grid-columns: 12; // Set number of columns in the grid
  ${indent}
  $xs-max: 640px; // Set xs breakpoint's max width
  $sm-max: 1024px; // Set sm breakpoint's max width
  $md-max: 1440px; // Set md breakpoint's max width
  $lg-max: 1920px; // Set lg breakpoint's max width
  ${indent}
  $sm-start: ($xs-max + 1); // Set sm breakpoint's min width
  $md-start: ($sm-max + 1); // Set md breakpoint's min width
  $lg-start: ($md-max + 1); // Set lg breakpoint's min width
  $xl-start: ($lg-max + 1); // Set xl breakpoint's min width
  ${indent}
  $content-well-max-width: 2400px; // Set the max-width of the content well
  `,
  breakpointVarsExample: `
  $breakpoint-xs-only: "only screen and (max-width: #{$xs-max})";
  $breakpoint-sm-up: "only screen and (min-width: #{$sm-start})";
  $breakpoint-sm-only: "only screen and (min-width: #{$sm-start}) and (max-width: #{$sm-max})";
  $breakpoint-md-up: "only screen and (min-width: #{$md-start})";
  $breakpoint-md-only: "only screen and (min-width: #{$md-start}) and (max-width: #{$md-max})";
  $breakpoint-lg-up: "only screen and (min-width: #{$lg-start})";
  $breakpoint-lg-only: "only screen and (min-width: #{$lg-start}) and (max-width: #{$lg-max})";
  $breakpoint-xl-up: "only screen and (min-width: #{$xl-start})";
  `
}

module.exports = sassVarsObj;
