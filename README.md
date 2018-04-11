# Sass Flexbox Grid
## Overview
A responsive grid system based on [Flexbox Grid](http://flexboxgrid.com/ "flexbox-grid") and the flex property, re-written in Sass, edited and expanded upon.

Enhancements include:
- Visibility classes
- Additional 'XL' breakpoint
- Sass variables and mixins
- Customizable grid

## Installation

### npm
```
npm install @drewbot/sass-flexbox-grid --save
```
Then link to your preferred CSS or Sass File:

####  CSS
`node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css`

#### CSS (minified)
`node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.min.css`

Or copy the Sass files over to your `src` directory from the following directory:

`node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/scss`

### Direct download

[https://github.com/drewbot/sass-flexbox-grid/raw/master/public/sass-flexbox.zip](https://github.com/drewbot/sass-flexbox-grid/raw/master/public/sass-flexbox.zip)

## Dependencies
The Sass Version simply requires The Sass library to be installed.

Plain CSS and minified CSS versions can be used with no other dependencies.

## Mobile First

Use Sass Flexbox Grid's mobile-first media queries and grid classes. All styles should first be declared at small (mobile) then built outward for larger screens using min-width media queries.

## Version 1.0.0 Release Notes

- Added gutters to the top, bottom, left, and right of all columns by default.
- Gutter size can be adjusted by changing the value of the sass variable `$gutter`.
- The `.col-gutter-lr` class will only apply gutters to the left and right of a column.
- The `.col-no-gutter` class will remove gutters from a column.

## Version 2.0.0 Release Notes

- All columns within a row will automatically scale in height to match the tallest column in the row.
  - `eq-height` is thereby deprecated.
- `.auto-height` class has been refactored to `.natural-height`.
  - Likewise, the `row-auto-height()` mixin has been refactored to `row-natural-height()`.
- The `flex-column()` mixin has been refactored to `row-flex-column()`.
- The `.show` class can now be applied to `.row` elements.
- The `show()` mixin now accepts an optional `$row` argument and can be used on `row` elements.
  - Example: `@include show("xs", "row")` or `@include show("xs", "true")`.

## Version 2.0.2 Release Notes

- Added `box-sizing: border-box;` to all rows and columns by default.
