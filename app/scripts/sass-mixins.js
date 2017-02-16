var indent = `&nbsp;&nbsp;`,
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassMixinsObj = {
  rowMixins: `
  @include row();
  @include row-reverse();
  @include row-eq-height();
  @include row-auto-height();
  `,
  colMixins: `
  @include col(<breakpoint prefix>, <number of columns>);
  ${indent}// no breakpoint arg = xs-<number of columns>
  ${indent}@include col(<number of columns>);
  ${indent}// no args =  auto-width column at the xs breakpoint
  ${indent}@include col();
  @include col-offset(<breakpoint prefix>, <number of columns>);
  @include col-reverse();
  `,
  arrangeMixins: `
  // apply to a row to arrange descendants
  @include start(<breakpoint prefix>);
  @include center(<breakpoint prefix>);
  @include end(<breakpoint prefix>);
  @include top(<breakpoint prefix>);
  @include middle(<breakpoint prefix>);
  @include bottom(<breakpoint prefix>);
  @include around(<breakpoint prefix>);
  @include between(<breakpoint prefix>);
  ${indent}
  // Apply to a column to arrange this element
  @include first(<breakpoint prefix>);
  @include last(<breakpoint prefix>);
  `,
  visibilityMixins: `
  @include show(<breakpoint range prefix>);
  @include hide(<breakpoint range prefix>);
  `
}

module.exports = sassMixinsObj;
