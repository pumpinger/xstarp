;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.293487 801.749838l-75.138399-132.191607L829.155088 393.281701c0-57.605993-20.926644-118.339945-58.927286-171.013-38.656232-53.5865-92.928659-95.517313-152.813207-118.068608-0.348862-0.131455-0.701094-0.254484-1.055012-0.369086-1.373537-0.44324-6.476693-2.072946-13.974691-4.228473l0-9.201858c0-49.846771-40.553905-90.400675-90.400675-90.400675s-90.400675 40.553905-90.400675 90.400675l0 8.539527c-6.983975 1.995421-11.411316 3.414462-11.918598 3.579624-0.26291 0.084266-0.52582 0.175273-0.78536 0.269652-60.799679 22.015362-115.999032 63.900671-155.428827 117.938838-38.711848 53.052253-60.029487 114.333934-60.029487 172.55507L193.42127 669.561602l-80.40503 141.509752c-9.673749 16.865018-9.613077 37.862445 0.166847 54.806673 9.720938 16.834682 27.915675 27.292105 47.485634 27.292105L359.363136 893.170134c11.392777 73.990695 75.494002 130.829866 152.622766 130.829866 77.128764 0 141.231674-56.839172 152.622766-130.829866l198.660709 0c30.286923 0 54.926331-24.609073 54.926331-54.857233C918.195708 824.580896 913.286365 811.738742 904.293487 801.749838zM511.985902 47.189018c23.088912 0 42.006652 18.203164 43.156042 41.010627-4.843616-0.916815-9.747903-1.756106-14.625225-2.465626-2.089799-0.303358-4.177913-0.320211-6.215468-0.077525-0.840976-0.123029-1.697119-0.251113-2.56506-0.384253-6.028397-0.910074-12.860693-1.939806-20.481719-1.939806-7.614285 0-14.44321 1.029732-20.469922 1.93812-0.738171 0.111231-1.46623 0.220777-2.184177 0.326952-2.111709-0.284819-4.275662-0.28819-6.446357 0.016853-4.44588 0.625254-8.8985 1.353314-13.288764 2.150471C470.228678 65.162978 489.043613 47.189018 511.985902 47.189018zM511.985902 976.810982c-51.02144 0-93.805026-35.829947-104.586031-83.640849l209.173748 0C605.790928 940.981035 563.007342 976.810982 511.985902 976.810982zM863.269377 845.981116 160.670406 845.981116c-2.765614 0-5.302023-1.419041-6.61826-3.695911-1.403873-2.43192-1.442636-5.394716-0.05393-7.818209l83.532988-147.014014c2.019016-3.550974 3.080769-7.568781 3.080769-11.655687L240.611973 393.281701c0-102.123776 79.029807-207.786728 183.907399-245.969384 3.448169-1.088718 30.570057-9.510272 57.92789-14.008397 1.628021 0.178644 3.288063 0.190441 4.956532 0.018539 3.682429-0.374141 7.105318-0.891535 10.41529-1.390391 5.020574-0.75671 9.356908-1.410615 13.432017-1.410615 4.08185 0 8.419869 0.653905 13.443814 1.4123 3.306602 0.498855 6.72612 1.014564 10.403493 1.388705 1.510049 0.153364 3.011671 0.160106 4.488013 0.02865 28.392621 4.755979 57.364992 13.819641 61.736718 15.213402 103.027108 39.055653 180.644616 144.159079 180.644616 244.71719l0 282.513908c0 4.088591 1.061753 8.106399 3.082454 11.659058l79.663489 140.151383c1.112313 1.958344 2.501018 3.749842 4.122298 5.31382 1.400503 1.353314 2.17238 3.266154 2.17238 5.391345C871.006691 842.612157 867.609081 845.981116 863.269377 845.981116z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)