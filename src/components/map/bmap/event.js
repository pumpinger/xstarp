/**
 * Created by fizz on 2017/2/14.
 * @event base Object
 *
 * @attention 百度的事件绑定非常简单，只有两个：addEventListener和removeEventListener
 * @BMapLib EventWrapper()
 * @url: http://api.map.baidu.com/library/EventWrapper/1.2/docs/symbols/BMapLib.EventWrapper.html
 */

var SMapEvent = require('./SMapEvent');

var event = {};

event.map = require('./eventMap');

event.listeners = [];

event.getSMapEvent = function(e) {
  return new SMapEvent(e);
};

/**
 * @function
 *
 * @param {Object} instance DOM object
 * @param {String} eventName
 * @param {Function} handler
 * @param {Object} context
 *
 * @return EventListener
 * */
event.addDomListener = function(instance, eventName, handler, context) {
  var callBack = function (e) {
    handler.call(context, e);
  };

  if(context) {
    instance.addEventListener(eventName, callBack);
  } else {
    instance.addEventListener(eventName, handler);
  }

  var listener = {
    eventName: eventName,
    handler: handler,
    context: context,
    id: event.listeners.length,
    eventType: 'domEvent' // domEvent, mapEvent
  };

  event.listeners.push(listener);

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
  var listeners = event.listeners;

  if(listener.eventType === 'domEvent') {

    if(listener.id) {
      listeners.filter( function(item) {
        if(item.id && item.id === listener.id) {
          item.instance.removeEventListener(item.eventName, item.handler);
        }
      })
    }

    else {
      listeners.forEach( function(item) {
        if(item.eventName === listener.eventName) {
          if(item.handler === listener.handler &&
            item.context === listener.context ) {
            item.instance.removeEventListener(item.eventName, item.handler);
          }
        }
      });
    }

  }

  else if( listener.eventType === 'mapEvent' ){
    listeners.forEach( function(item) {
      if(item.eventName === listener.eventName) {
        if(item.handler === listener.handler &&
          item.context === listener.context ) {

          item.instance.removeEventListener(item.eventName, item.handler);
        }
      }
    });
  }
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
