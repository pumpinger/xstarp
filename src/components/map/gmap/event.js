/**
 * Created by fizz on 2017/2/14.
 */
var event = {};

event.on = function(eventName, handler, context) {};
event.off = function(eventName, handler, context) {};

event.addDomListener = function(instance, eventName, handler, context) {
  var listener = {};
  if(context) {
    listener = google.maps.event.addDomListener(context, eventName, handler);
  } else {
    listener = google.maps.event.addDomListener(instance, eventName, handler);
  }
  return listener;
};

event.addListener = function(instance, eventName, handler, context) {
  var listener = {};
  if(context) {
    listener = google.maps.event.addListener(context, eventName, handler);
  } else {
    listener = google.maps.event.addListener(instance, eventName, handler);
  }
  return listener;
};

event.addListenerOnce = function(instance, eventName, handler, context) {
  var listener = {};
  if(context) {
    listener = google.maps.event.addListenerOnce(instance, eventName, function (e) {
      handler.call(context,e);
    });
  } else {
    listener = google.maps.event.addListenerOnce(instance, eventName, handler);
  }
  return listener;
};

event.removeListener = function(listener) {
  google.maps.event.removeListener(listener);
};

event.triggerListener = function(instance, eventName, extArgs) {
  google.maps.event.trigger(instance, eventName, extArgs);
};

module.exports = event;
