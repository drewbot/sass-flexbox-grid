var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassMixinsObj = {
  rowMixinsExample: `
  row(); // Define and element as a row
  row-reverse();  // Reverse the order of the row\'s children
  row-natural-height();  // Row children heights match their contents
  row-flex-column();  // Row children arrange vertically
  `,
  colMixinsExample: `
  //  Pass in breakpoint and number arguments to define a column
  col(<breakpoint prefix>, <number of columns>);
  ${indent}
  //  No breakpoint arg = xs-<number of columns>
  col(<number of columns>);
  ${indent}
  //  No args =  auto-width column at the xs breakpoint
  col();
  ${indent}
  //  Pass in breakpoint and number arguments to offset a column
  col-offset(<breakpoint prefix>, <number of columns>);
  ${indent}
  //  Reverse the order of an auto width col
  col-reverse();
  `,
  arrangeMixinsExample: `
  // apply to a row to arrange descendants
  start(<breakpoint prefix>);  // Align to the beginning of the row
  center(<breakpoint prefix>);  // Align to the center of the row
  end(<breakpoint prefix>);  // Align to the end of the row
  top(<breakpoint prefix>);  // Align to the top of the row
  middle(<breakpoint prefix>);  // Align to the middle of the row
  bottom(<breakpoint prefix>);  // Align to the bottom of the row
  around(<breakpoint prefix>);  // Apply equal space around each row child
  between(<breakpoint prefix>);  // Apply equal space between each row child
  ${indent}
  // Apply to a column to arrange this element
  first(<breakpoint prefix>);  // Make a column first in order within a row
  last(<breakpoint prefix>);  // Make a column last in order on XS and up
  `,
  visibilityMixinsExample: `
  show(<breakpoint range prefix>);  // Show an element
  hide(<breakpoint range prefix>);  // Hide an element
  `
}

module.exports = sassMixinsObj;
