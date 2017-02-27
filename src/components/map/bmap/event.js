/**
 * Created by fizz on 2017/2/14.
 * @event
 *
 * @attention 百度的事件绑定非常简单，只有两个：addEventListener和removeEventListener
 */

var SMapEvent = require('./SMapEvent');

var event = {};

event.map = require('./eventMap');

event.getSMapEvent = function(e) {
  return new SMapEvent(e);
};

/**
 * @function
 *
 * @param {} instance
 * @param {} eventName
 * @param {} handler
 * @param {} context
 *
 * @return EventListener
 * */
event.addDomListener = function(instance, eventName, handler, context) {
  var listener = {};

  if(context) {
    // listener = google.maps.event.addDomListener(instance, eventName, function(e) {
    //   handler.call(context, e);
    // });

    instance.addEventListener(eventName, function(e) {
      handler.call(context, e);
    });

  } else {
    // listener = google.maps.event.addDomListener(instance, eventName, handler);
    instance.addEventListener(eventName, handler);
  }
  return listener;
};

event.addListener = function(instance, eventName, handler, context) {
  var listener = {}, relevantEvent, realInstance;

  realInstance = instance._inner;
  relevantEvent = event.getRelevantEvent(instance, eventName);

  if(context) {
    listener = google.maps.event.addListener(realInstance, relevantEvent, function(e) {
      handler.call(context, event.getSMapEvent(e));
    });
  } else {
    listener = google.maps.event.addListener(realInstance, relevantEvent, function(e) {
      handler(event.getSMapEvent(e));
    });
  }
  return listener;
};

event.addListenerOnce = function(instance, eventName, handler, context) {
  var listener = {}, relevantEvent, realInstance;

  realInstance = instance._inner;

  relevantEvent = event.getRelevantEvent(instance, eventName);

  if(context) {
    listener = google.maps.event.addListenerOnce(realInstance, relevantEvent, function (e) {
      handler.call(context, event.getSMapEvent(e));
    });
  } else {
    listener = google.maps.event.addListenerOnce(realInstance, relevantEvent, function(e) {
      handler(event.getSMapEvent(e));
    });
  }
  return listener;
};

event.removeListener = function(listener) {
  google.maps.event.removeListener(listener);
};

event.triggerListener = function(instance, eventName, extArgs) {
  var relevantEvent = event.getRelevantEvent(instance, eventName);

  google.maps.event.trigger(instance, relevantEvent, extArgs);
};

event.getRelevantEvent = function(instance, eventName) {
  if(instance._type in event.map) {
    if(eventName in event.map[instance._type]) {
      return event.map[instance._type][eventName];
    } else {
      return eventName;
    }
  } else {
    return eventName;
  }
};

event.getSMapEventObject = function(e) {

};

module.exports = event;
