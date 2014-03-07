# "Test and throw away" mockups

## Demo

[virtusize.github.io/mockups/purchase-history/](http://virtusize.github.io/mockups/purchase-history/)  
[virtusize.github.io/mockups/vector-rendering/](http://virtusize.github.io/mockups/vector-rendering/) (Snap)  
[virtusize.github.io/mockups/vector-rendering/raphael.html](http://virtusize.github.io/mockups/vector-rendering/raphael.html) (Raphaël)  
Widget v5 panels: [Select item](http://virtusize.github.io/mockups/v5/) [Compare](http://virtusize.github.io/mockups/v5/compare.html) [Wardrobe](http://virtusize.github.io/mockups/v5/wardrobe.html)

## How to deploy

There is a  `gh-pages` branch, which holds the published version.
Everything merged and pushed to that branch will automatically be released.

## Mockup structure for purchase history

- Standalone
- Mostly static
- Frontend only: HTML, CSS and jQuery
- Only start, compare and wardrobe view
- Focus on flow and interaction
- Going old-school: mostly images in the design, no fancy CSS
- To make it work checkout feature/v5-styles branch and create links to frontend assets like this:
  cd v5
  ln -s [path to frontend]/src/core/styles ./assets/core
  ln -s [path to frontend]/src/widget/styles ./assets/less

## Mockup structure for vector rendering

### Snap
- Standalone
- Frontend only: HTML, CSS and [Snap.svg](http://snapsvg.io/)
- Showcase of basic shape rendering, making use of masking
- Shape styles done with CSS, implementing both transparency and dashed strokes
- Shapes support basic hover and click events
- Centered text rendering in SVG, with option to load web font

### Raphaël
- Standalone
- Frontend only: HTML, CSS and [Raphaël](http://raphaeljs.com/) (fallback to VML for IE8)
- Showcase of basic shape rendering, implementing basic transparency
- Shape styles done with CSS for SVG and hard coded for VML
- Shapes support basic hover and click events
- Centered text rendering, support for web font in SVG, limited VML capabilities
