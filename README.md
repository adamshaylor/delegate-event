delegate-event
==============

An angular directive for event delegation

## Requirements

Angular 1.0+, jQuery 1.7+.

## Usage

```html

<!-- Simple delegation -->
<div delegate-event on-click="handlerA">
  <button>Click here</button>
</div>

<!-- Works with the `data-` prefix -->
<div data-delegate-event data-on-click="handlerB">
  <button>Click here</button>
</div>

<!-- Delegation with filtering -->
<div delegate-event on-click="handler" on-click-filter=".special">
  <button>This won’t work</button>
  <button class="handlerC">This will</button>
</div>

<!-- Works with any event that follows the standard event naming convention (http://www.w3.org/TR/DOM-Level-3-Events/#event-types) -->
<div delegate-event on-customevent="handlerD">
  <button your-directive-fires-customevent></button>
</div>

<!-- Works fine for direct binding, too -->
<button delegate-event on-click="handlerE">Click here</button>



```

## Why

Most of the time Angular’s data binding does away with an event-centric architecture. The rest of the time, you should probably consider writing your own directive to define event binding, delegation and handling.

Every once in a while, however, you may have some reason to define event delegation within an Angular template. For example, you may need to:

* Define simple responses to events that bubble up from complex, dynamic DOM structures
* Add behavior to a Bootstrap wrapper directive
