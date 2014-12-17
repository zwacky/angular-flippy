angular-flippy
==============

AngularJS directive implementation with a CSS3 flip animation.

With v1.0 you'll find more customization within the directive itself. You are free to hook into any events like `ng-click` to fire the flip event.

Demo
----
Try the demo here: http://codepen.io/zwacky/pen/bnpCh/

Flippy Directive Parameters
---------------------------
```html
<flippy
  class="fancy"
  ng-click="flip()"
  ng-mouseenter="flip()"
  ng-mouseleave="flip()"
  flip-duration="800"
  timing-function="ease-in-out"
>
```
* `class`: fancy is an optional class to show some 3D-ness. (include `./css/flippy-fancy.min.css` for this exemplary style)
* `ng-click`: toggles the flipping upon click
* `ng-mouseenter`: toggles the flipping upon mouse enter
* `ng-mouseleave`: toggles the flipping upon mouse leave
* `flip-duration`: the time it takes to flip in ms
* `timing-function`: timing functions (see https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function)