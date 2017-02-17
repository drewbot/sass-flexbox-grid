var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassClassesObj = {
  rowClassesExample: `
  .row
  .reverse
  .eq-height
  .auto-height
  .start
  .center
  .end
  .top
  .middle
  .bottom
  .around
  .between
  `,
  colClassesExample: `
  .col
  .col-xs
  .col-sm
  .col-md
  .col-lg
  .col-xl
  .col-xs-<column number>
  .col-sm-<column number>
  .col-md-<column number>
  .col-lg-<column number>
  .col-xl-<column number>
  .col-xs-offset-<column number>
  .col-sm-offset-<column number>
  .col-md-offset-<column number>
  .col-lg-offset-<column number>
  .col-xl-offset-<column number>
  .first
  .first-xs
  .first-sm
  .first-md
  .first-lg
  .first-xl
  .last
  .last-xs
  .last-sm
  .last-md
  .last-lg
  .last-xl
  `,
  visClassesExample: `
  .show
  .show-xs
  .show-xs-only
  .show-sm
  .show-sm-only
  .show-md
  .show-md-only
  .show-lg
  .show-lg-only
  .show-xl
  .hide
  .hide-xs
  .hide-xs-only
  .hide-sm
  .hide-sm-only
  .hide-md
  .hide-md-only
  .hide-lg
  .hide-lg-only
  .hide-xl
  `
}

module.exports = sassClassesObj;
