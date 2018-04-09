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
  $xs-max: 40rem; // Set xs breakpoint's max width
  $sm-max: 64rem; // Set sm breakpoint's max width
  $md-max: 90rem; // Set md breakpoint's max width
  $lg-max: 120rem; // Set lg breakpoint's max width
  ${indent}
  $gutter: 1rem; // Set gutter size
  ${indent}
  $content-well-max-width: "none"; // Set the max-width of the content well
  ${indent}
  $sm-start: ($xs-max + 1); // Generate sm breakpoint's min width
  $md-start: ($sm-max + 1); // Generate md breakpoint's min width
  $lg-start: ($md-max + 1); // Generate lg breakpoint's min width
  $xl-start: ($lg-max + 1); // Generate xl breakpoint's min width
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
