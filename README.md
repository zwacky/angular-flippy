angular-flippy
==============

AngularJS directive implementation with a CSS3 flip animation.

The implementation is more CSS3 heavy than javascript-y, that's why you will find a lot of configuration options inside the .less file (or css directly).

Demo
----
Try the demo here: http://codepen.io/zwacky/pen/bnpCh/

Flippy Directive Parameters
---------------------------
```html
<flippy
  data-click-toggle="true"
  data-mouseover-toggle="true"
>
```
* `data-click-toggle`: flips card upon click
* `data-mouseover-toggle`: flips card upon mouseover

Flippy CSS Configurations
-------------------------
Inside `less/flippy.less` you can make your own changes. 

**Note**: Flippy comes by default with a border and box-shadow. The shadow makes it look like the flipped card (back) is more above the ground than the unflipped card (front), which creates a nice illusion.

* `@card-width`: width of card
* `@card-height`: height of card, usually same as `@card-width`
* `flip-duration`: time for the flip effect to last