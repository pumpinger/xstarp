/**
 * Created by fizz on 2017/2/14.
 */

var event = require('./event')

var onOff = {};

onOff.on = function(eventName, handler, context) {
  console.log('调用了On方法');

  console.log(this);

  var listener, eventListener;

  listener = event.addListener(this._inner, eventName, handler, context);

  eventListener = {
    eventName: eventName,
    handler: handler,
    context: context,
    listener: listener
  };

  if(!this._eventListener) this._eventListener = [];

  this._eventListener.push(eventListener);
  return listener;
};

onOff.off = function(eventName, handler, context) {
  if(!this._eventListener) return;

  var filterResult = this._eventListener.filter( function(item, index) {
    if(eventName === item.eventName) return true;
    return false;
  });

  if(filterResult && filterResult.length > 0) {
    filterResult.forEach( function(item, index) {
      if( item.handler === handler &&
        item.context === context ) {
        console.log('here am I');
        event.removeListener(item.listener);
      }
    })
  }

};

module.exports = onOff;
