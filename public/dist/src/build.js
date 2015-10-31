(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/kalevrk/Documents/code/react/react-tutorial-3/public/src/js/app.js":[function(require,module,exports){
var Parent = require('./parent.js');
React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./parent.js":"/Users/kalevrk/Documents/code/react/react-tutorial-3/public/src/js/parent.js"}],"/Users/kalevrk/Documents/code/react/react-tutorial-3/public/src/js/child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function() {
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});

module.exports = Child;

},{}],"/Users/kalevrk/Documents/code/react/react-tutorial-3/public/src/js/parent.js":[function(require,module,exports){
var Child = require('./child.js');

var Parent = React.createClass({displayName: "Parent",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});

module.exports = Parent;

},{"./child.js":"/Users/kalevrk/Documents/code/react/react-tutorial-3/public/src/js/child.js"}]},{},["/Users/kalevrk/Documents/code/react/react-tutorial-3/public/src/js/app.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2FsZXZyay9Eb2N1bWVudHMvY29kZS9yZWFjdC9yZWFjdC10dXRvcmlhbC0zL3B1YmxpYy9zcmMvanMvYXBwLmpzIiwiL1VzZXJzL2thbGV2cmsvRG9jdW1lbnRzL2NvZGUvcmVhY3QvcmVhY3QtdHV0b3JpYWwtMy9wdWJsaWMvc3JjL2pzL2NoaWxkLmpzIiwiL1VzZXJzL2thbGV2cmsvRG9jdW1lbnRzL2NvZGUvcmVhY3QvcmVhY3QtdHV0b3JpYWwtMy9wdWJsaWMvc3JjL2pzL3BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLE1BQU0sRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O0FDRHpELElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsa0JBQUEsRUFDYSxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFBLEVBQUEsR0FBQTtBQUFBLE1BQ3BDLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7OztBQ1Z2QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRWxDLElBQUksNEJBQTRCLHNCQUFBO0VBQzlCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtRQUNILG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEsdUJBQTJCLENBQUEsRUFBQTtRQUNoQyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFBO01BQ2pCLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vcGFyZW50LmpzJyk7XG5SZWFjdC5yZW5kZXIoPFBhcmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsInZhciBDaGlsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgYW5kIHRoaXMgaXMgdGhlIDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPi5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGQ7XG4iLCJ2YXIgQ2hpbGQgPSByZXF1aXJlKCcuL2NoaWxkLmpzJyk7XG5cbnZhciBQYXJlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+IFRoaXMgaXMgdGhlIHBhcmVudC4gPC9kaXY+XG4gICAgICAgIDxDaGlsZCBuYW1lPVwiY2hpbGRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDtcbiJdfQ==
