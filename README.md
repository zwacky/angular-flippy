# angular-flippy

AngularJS directive implementation with a CSS3 flip animation.

With v2.0 you'll find more customization within the directive itself. You are free to hook into any events like `ng-click` to fire the flip event.

## Demo

* Try the demo here: http://output.jsbin.com/kenunu
* Clone the repo and `gulp watch` to start the demo page locally

## Install

* npm: `npm install angular-flippy`
* bower: `bower install angular-flippy`
* add *angular-flippy* to your `angular.module('your-webapp', ['angular-flippy', ...)` dependencies

## Flippy Directive Parameters

```html
<flippy
  class="fancy"
  flip="['click', 'mouseenter']"
  flip-back="['click', 'mouseleave']"
  duration="800"
  timing-function="ease-in-out">
</flippy>
```
* `class`: fancy is an optional class to show some 3D-ness. (include `./css/flippy-fancy.min.css` for this exemplary style)
* `flip`: events that trigger the first flip. will only trigger if flip state is in opposite flip state.
* `flip-back`: events that trigger the flip back. will only trigger if flip state is in opposite flip state.
* `duration`: the time it takes to flip in ms
* `timing-function`: timing functions (see https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function)

## Events

There are two types of events accepted for the `flip` (first flip) and `flip-back` (flip back):
* Every [DOM event](https://en.wikipedia.org/wiki/DOM_events) e.g. click, mouseenter, mouseleave, dblclick, ...
* `custom:XXX` where XXX is the name of the broadcast event


### Custom Events Example
```html
// somewhere in your webapp
function buttonClicked() {
    $rootScope.$broadcast('FLIP_EVENT_IN');
}

// your directive
<flippy
    flip="['custom:FLIP_EVENT_IN']"
    flip-back="['custom:FLIP_EVENT_OUT']"
    duration="800"
    timing-function="ease-in-out">
</flippy>
```

## Contribute

Just use `gulp watch` and hack away!
