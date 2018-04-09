var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassClassesObj = {
  rowClassesExample: `
  .row  // Define and element as a row
  .reverse  // Reverse the order of the row\'s children
  .natural-height  // Row children heights match their contents
  .flex-column  // Arrange row children vertically
  .start  // Align row children to the beginning of the row
  .center  // Align row children to the center of the row
  .end  // Align row children to the end of the row
  .top  // Align row children to the top of the row
  .middle  // Align row children to the middle of the row
  .bottom  // Align row children to the bottom of the row
  .around  // Apply equal space around each row child
  .between  // Apply equal space between each row child
  `,
  colClassesExample: `
  .col  // Define a column with auto-sizing
  .col-xs  // Define a column with auto-sizing on XS and up
  .col-sm  // Define a column with auto-sizing on SM and up
  .col-md  // Define a column with auto-sizing on MD and up
  .col-lg  // Define a column with auto-sizing on LG and up
  .col-xl  // Define a column with auto-sizing on XL and up
  .col-xs-<column number>  // Define a column\'s number width on XS and up
  .col-sm-<column number>  // Define a column\'s number width on SM and up
  .col-md-<column number>  // Define a column\'s number width on MD and up
  .col-lg-<column number>  // Define a column\'s number width on LG and up
  .col-xl-<column number>  // Define a column\'s number width on XL and up
  .col-xs-offset-<column number>  // Offset by a number width on XS and up
  .col-sm-offset-<column number>  // Offset by a number width on SM and up
  .col-md-offset-<column number>  // Offset by a number width on MD and up
  .col-lg-offset-<column number>  // Offset by a number width on LG and up
  .col-xl-offset-<column number>  // Offset by a number width on XL and up
  .first  // Make a column first in order within a row
  .first-xs  // Make a column first in order on XS and up
  .first-sm  // Make a column first in order on SM and up
  .first-md  // Make a column first in order on MD and up
  .first-lg  // Make a column first in order on LG and up
  .first-xl  // Make a column first in order on XL and up
  .last  // Make a column last in order on XS and up
  .last-xs  // Make a column last in order on XS and up
  .last-sm  // Make a column last in order on SM and up
  .last-md  // Make a column last in order on MD and up
  .last-lg  // Make a column last in order on LG and up
  .last-xl  // Make a column last in order on XL and up
  `,
  visClassesExample: `
  .show  // Show an element
  .show-xs  // Show an element on XS and up
  .show-xs-only  // Show an element on XS only
  .show-sm  // Show an element on SM and up
  .show-sm-only  // Show an element on SM only
  .show-md  // Show an element on MD and up
  .show-md-only  // Show an element on MD only
  .show-lg  // Show an element on LG and up
  .show-lg-only  // Show an element on LG only
  .show-xl  // Show an element on XL screens
  .hide  // Hide an element
  .hide-xs  // Hide an element on XS and up
  .hide-xs-only  // Hide an element on XS only
  .hide-sm  // Hide an element on SM and up
  .hide-sm-only  // Hide an element on SM only
  .hide-md  // Hide an element on MD and up
  .hide-md-only  // Hide an element on MD only
  .hide-lg  // Hide an element on LG and up
  .hide-lg-only  // Hide an element on LG only
  .hide-xl  // Hide an element on XL screens
  `
}

module.exports = sassClassesObj;
