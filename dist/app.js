webpackJsonp([0],[,,,,function(t,i,e){e(15),t.exports=window.xPopUp=function(t,i,e){function n(){d.remove(),s.remove(),$("body").css({overflow:"auto"})}function o(){return i={p_width:600,p_height:150,title:"提示",content:"",btn:"",isClose:!0,confirmfn:function(){},closefn:function(){}},$("body").css({overflow:"hidden"}),s=$('<div class="x-pop-layer"></div>'),s.appendTo("body"),d=$('<div class="x-pop-main"></div>'),d.appendTo("body"),r=$('<div class="x-pop-close"><i class="iconfont icon-cuowu"></i></div>'),r.appendTo(d),s.click(function(){n()}),r.click(function(){n()}),d}function a(t){var i=$(window).width(),e=$(window).height(),n=t.width()+30,o=t.height()+30,s=(i-n)/2,d=$(document).scrollTop()-o/2+e/2;t.css({left:s,top:d}),window.onresize=function(){a(t)}}var s,d,r,c;"prompt"===t?function(t,i){if(d=o(),d.css({width:t.p_width,height:t.p_height}),t.btn){var e="";$.each(t.btn,function(t,i){e+='<button class="x-button '+i.classStr+'">'+i.name+"</button>"})}c=$('<div><div class="x-pop-title">提示</div><div class="x-pop-content"></div><div class="x-pop-button"></div></div>'),c.appendTo(d);var s=c.find(".x-pop-content"),r=c.find(".x-pop-button");s.html(t.content),r.html(e),a(d),r.find("button").click(function(){n()}),i&&setTimeout(n,i)}(i,e):"confirm"===t?function(t){d=o(),d.css({width:t.p_width,height:t.p_height}),c=$('<div><div class="x-pop-title">提示</div><div class="x-pop-content"></div><div class="x-pop-button"><button class="x-button x-confirm">确定</button><button class="x-button cancel">取消</button></div></div>'),c.appendTo(d);var i=c.find(".x-pop-content"),e=c.find(".x-pop-button");i.html(t.content),a(d),e.find(".x-confirm").click(function(){t.isClose?n():"function"==typeof t.confirmfn?(t.confirmfn(),n()):n()}),e.find(".cancel").click(function(){t.isClose?n():"function"==typeof t.closefn?(t.closefn(),n()):n()})}(i):function(t){if(d=o(),d.css({width:t.p_width,height:t.p_height}),t.btn){var i="";$.each(t.btn,function(t,e){i+='<button class="x-button '+e.classStr+'">'+e.name+"</button>"})}c=$('<div><div class="x-pop-title"></div><div class="x-pop-content"></div><div class="x-pop-button" style="text-align:right;"></div></div>'),c.appendTo(d);var e=c.find(".x-pop-title"),s=c.find(".x-pop-content"),r=c.find(".x-pop-button");e.html(t.title),s.html(t.content),r.html(i);var l=c.find(".x-pop-button button");a(d),$.each(t.btn,function(t,i){l.eq(t).click(function(){i.isClose?i.opra?(i.opra(),n()):n():i.opra&&i.opra()})})}(i)}},function(t,i,e){e(7),e(9),e(8),e(20),e(13),e(14),e(11),e(30),e(28),e(24),e(33),e(31),e(27),e(4),e(29),e(34),e(36),e(23),e(25),e(26),e(32),e(35)},,function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i){},,function(t,i){!function(){window.getDomId=function(t){var i=$(t).prop("id");return i||(i=(new Date).valueOf(),i+="_"+$(t).index(),$(t).prop("id",i)),i},window.xCommon={getDomId:getDomId}}()},function(t,i,e){e(4),function(){$("body").on("click",".x-ajax-del",function(){$(".x-ajax-del").attr("disabled","disabled");var t=$(this).data("url");$.ajax({url:t,dataType:"json",success:function(t){if($(".x-ajax-del").removeAttr("disabled"),t.ok){var i;i=$(this).data("refresh")?$(this).data("refresh"):".x-table";var e=location.href;$.get(e,function(t){$(i).html($(t).find(i).html())})}},error:function(t){$(".x-ajax-del").removeAttr("disabled")}})}),$("body").on("click",".x-ajax-op",function(){$(".x-ajax-del").attr("disabled","disabled");var t=$(this).data("url");$.ajax({url:t,dataType:"json",success:function(t){$(".x-ajax-del").removeAttr("disabled"),"ok"===t.ok||$(".x-ajax-del").removeAttr("disabled")},error:function(){$(".x-ajax-del").removeAttr("disabled"),xPopUp("prompt",{content:"操作失败"},2e3)}})})}()},function(t,i,e){e(10),$("body").on("click",".x-form-radio",function(){$(this).addClass("x-checked").siblings().removeClass("x-checked")}),$("body").on("click",".x-form-checkbox",function(){console.log($(this).find("input").is(":checked")),$(this).find("input").is(":checked")?$(this).addClass("x-checked"):$(this).removeClass("x-checked")}),$("body").on("click",".x-form-switch",function(){$(this).find("input").is(":checked")?($(this).addClass("x-form-onswitch"),$(this).find("span").text("开启")):($(this).removeClass("x-form-onswitch"),$(this).find("span").text("关闭"))}),window.xFormSubmit=function(t){var i=t.form,e=t.success,n=t.dataType?t.dataType:"json",o=t.url?t.url:i.attr("action"),a=i.serializeArray();$.ajax({url:o,data:a,dataType:n,type:"POST",success:function(t){e(t)},error:function(t,i){xFormError(i,t)}})},window.xFormError=function(t){t?($(".x-form-item-error").show(),$(".x-form-item-error p").html(t)):$(".x-form-item-error").hide()}},function(t,e){window.xFormat={str2time:function(t){var i=t.replace(/-/g,"/");if(-1==i.indexOf("/"))if(-1==i.indexOf(":"))if(8==i.length)i=i.substr(0,4)+"/"+i.substr(4,2)+"/"+i.substr(6,2);else{var e=i.substr(0,2);e<100&&e>30&&(e="19"+e),e<30&&e>0&&(e="20"+e),i=e+"/"+i.substr(2,2)+"/"+i.substr(4,2)}else i="2016/06/06 "+i;else{var e=i.split("/");e[0]<100&&e[0]>30&&(e[0]="19"+e[0]),e[0]<30&&e[0]>0&&(e[0]="20"+e[0]),i=e[0]+"/"+e[1]+"/"+e[2]}return i=new Date(Date.parse(i)),!!i.getTime()&&i.getTime()/1e3},time2str:function(t){var i=new Date(1e3*t),e=i.getFullYear(),n=i.getMonth()+1,o=i.getDate(),a=i.getHours(),s=i.getMinutes(),d=i.getSeconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),e+"-"+n+"-"+o+" "+a+":"+s+":"+d},number2money:function(t,e){e=e>0&&e<=20?e:2,t=parseFloat((t+"").replace(/[^\d\.-]/g,"")).toFixed(e)+"";var n=t.split(".")[0].split("").reverse(),o=t.split(".")[1],a="";for(i=0;i<n.length;i++)a+=n[i]+((i+1)%3==0&&i+1!=n.length?",":"");return a.split("").reverse().join("")+"."+o},number2word:function(t){}}},function(t,i){!function(){function t(t){var s=t||new Date,d=s.getTime(),r=s.getMilliseconds(),c=s.getSeconds(),l=s.getMinutes(),h=s.getHours(),p=s.getDay(),u=(s.getDate(),s.getMonth()),f=s.getFullYear(),m=h*n+l*e+c*i+r,g=d-m,v=g+o,x=g-o,_=d-o,b=p*o+m,w=d-b,k=w+a,y=w-a,$=d-a,T=new Date(f,u,1).getTime(),I=new Date(f,u+1,1).getTime(),C=new Date(f,u-1,1).getTime(),F=d-T+C,M=new Date(f,0,1).getTime();return{time:d,day:{start:g,end:v},yesterday:{start:x,end:g},pastDay:{start:_,end:d},week:{start:w,end:k},lastWeek:{start:y,end:w},pastWeek:{start:$,end:d},month:{start:T,end:I},lastMonth:{start:C,end:T},pastMonth:{start:F,end:d},year:{start:M,end:new Date(f+1,0,1).getTime()},lastYear:{start:new Date(f-1,0,1).getTime(),end:M},pastYear:{start:new Date(d).setFullYear(f-1),end:d}}}var i=1e3,e=60*i,n=60*e,o=24*n,a=7*o;window.xGetTime=t}()},function(t,i,e){var n,o,a;!function(s){o=[e(0)],n=s,void 0!==(a="function"==typeof n?n.apply(i,o):n)&&(t.exports=a)}(function(t){function i(){return(u.height()-$.height())/2}function e(){I=$.height(),T=$.width()}function n(t){var i=A-t.pageY,e=D-t.pageX;$.css("margin-top",-i),$.css("margin-left",-e)}function o(){S.onload=function(){$.show(),y.hide(),$.prop("src",S.src),$.css({"margin-top":i()}),F=S.width/$.width()*1.5,e()},h.click(function(i){U&&this===i.target&&(t(this).hide(),S.src="")}),v.click(function(t){U&&this===t.target&&(h.hide(),S.src="")}),$.bind("mousedown",function(i){i.preventDefault(),D=i.pageX-parseInt($.css("margin-left")),A=i.pageY-parseInt($.css("margin-top")),t(document).bind("mousemove",function(i){i.preventDefault(),t("body").css("cursor","move"),U=!1,n(i)}),t(document).bind("mouseup",function(i){t(document).unbind("mousemove"),t("body").css("cursor","initial"),clearTimeout(M),M=setTimeout(function(){U=!0},100)})}),$.click(function(t){U&&(c(++P)||P--)}),m.click(function(t){c(++P)||P--,t.stopPropagation()}),g.click(function(t){c(--P)||P++,t.stopPropagation()}),$.bind("mousewheel",function(t){t.preventDefault();var i=t.originalEvent.wheelDelta;120==i?N<F&&(N+=.1):-120==i&&N>.5&&(N-=.1),a()}),k.click(function(){d()}),_.click(function(){N<F&&(N+=.1),a()}),b.click(function(){N>.5&&(N-=.1),a()}),w.click(function(){l($[0],B+=90)})}function a(){$.css("width",T*N),$.css("height",I*N),$.css("max-width","none"),$.css("max-height","none"),$.css("margin-top",i())}function s(){h=t("<div>").appendTo("body"),h.css({background:"rgba(0,0,0,0.5)",position:"fixed",top:"0",bottom:"0",left:"0",right:"0","z-index":"9999",display:"none"}),p=t("<div>").appendTo(h),p.css({width:"70%",position:"relative","min-width":"500px",margin:"0% auto",padding:"10px 0",height:"100%"}),x=t("<div>").appendTo(p),x.css({width:"30%",background:"#ddd",display:"none",height:"100%",float:"left","box-sizing":"border-box",padding:"1%"}),u=t("<div>").appendTo(p),u.css({background:"#000",width:"100%",padding:"1% 1% 50px 1%","box-sizing":"border-box",overflow:"hidden",height:"100%","user-select":"none","text-align":"center",position:"relative","line-height":"100%"}),$=t("<img>").appendTo(u),$.css({transition:"transform 0.5s",cursor:"pointer"}),f=t("<div>").appendTo(u),f.css({position:"absolute",bottom:"5px",background:"#000",width:"98%"}),k=t('<span class="iconfont icon-tupian2222">').appendTo(f),k.css({display:"inline-block",width:"20px",height:"20px","font-size":"20px",color:"#FFF",margin:"10px",cursor:"pointer"}),_=t('<span class="iconfont icon-fangda1">').appendTo(f),_.css({display:"inline-block",width:"20px",height:"20px","font-size":"20px",color:"#FFF",margin:"10px",cursor:"pointer"}),b=t('<span class="iconfont icon-suoxiao1">').appendTo(f),b.css({display:"inline-block",width:"20px",height:"20px","font-size":"20px",color:"#FFF",margin:"10px",cursor:"pointer"}),w=t('<span class="iconfont icon-shuaxin">').appendTo(f),w.css({display:"inline-block",width:"20px",height:"20px","font-size":"20px",color:"#FFF",margin:"10px",cursor:"pointer"}),g=t('<span class="iconfont icon-xiangzuo1">').appendTo(u),g.css({display:"inline-block",position:"absolute",width:"40px",height:"40px","font-size":"40px",color:"#FFF",left:"1%",top:"48%",cursor:"pointer"}),m=t('<span class="iconfont icon-xiangyou1">').appendTo(u),m.css({display:"inline-block",position:"absolute",width:"40px",height:"40px","font-size":"40px",color:"#FFF",cursor:"pointer",right:"1%",top:"48%"}),v=t('<span class="iconfont icon-cuowu">').appendTo(p),v.css({display:"inline-block",position:"absolute",width:"30px",height:"30px","font-size":"30px",color:"#FFF",cursor:"pointer",right:"-14px",top:"0"}),y=t('<span class="x-imgView-loading">').appendTo(u),y.css({position:"absolute",top:"48%",left:"50%",width:"40px",height:"40px","margin-left":"-30px",display:"none"})}function d(){$.css({"max-height":"100%","max-width":"100%","margin-left":"0",width:"initial",height:"initial"}),$.css({"margin-top":i()}),N=1,l($[0],B=0)}function r(){O||(s(),o(),O=!0)}function c(t){return!!z[t]&&(d(),0==z.length?(m.hide(),g.hide()):1==z.length?(m.hide(),g.hide()):0==t?(g.hide(),m.show()):t==z.length-1?(m.hide(),g.show()):(g.show(),m.show()),h.show(),z.length&&y.show(),$.hide(),L(t),S.src=z[t],!0)}function l(t,i,e){if(t&&1===t.nodeType&&(i=parseFloat(i)||0,e=parseFloat(e)||1,"number"==typeof i)){var n=i*(Math.PI/180),o=Math.cos(n)*e,a=-1*Math.sin(n)*e,s=Math.sin(n)*e;t.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+o+",M12="+a+",M21="+s+",M22="+o+",SizingMethod='auto expand')",t.style.MozTransform="rotate("+i+"deg) scale("+e+")",t.style.WebkitTransform="rotate("+i+"deg) scale("+e+")",t.style.OTransform="rotate("+i+"deg) scale("+e+")",t.style.Transform="rotate("+i+"deg) scale("+e+")"}}var h,p,u,f,m,g,v,x,_,b,w,k,y,$,T,I,C,F,M,D,A,j,z=[],S=new Image,P=1,N=1,B=0,U=!0,L=function(){},O=!1;window.xImgView=function(i){r(),z=i.imgs,j=i.zIndex||2e3,C=i.infoDom,C&&(x.show(),x.html(C),t(C).show(),u.css("width","70%")),L=i.onSwitch||function(){},c(P=0)},t(document).ready(function(){t("body").on("click",".x-imgView .x-imgView-item",function(){r(),z=[],t.each(t(this).parent().children(),function(i){t(this).attr("x-imgView-src")?z[i]=t(this).attr("x-imgView-src"):z[i]=t(this).attr("src")}),c(P=t(this).index())})})})},function(t,i,e){e(12),$("body").on("click",".x-nav-sidebar  .x-nav-head",function(){$(this).next("ul").slideToggle(300).parent().siblings("li").find("ul").slideUp(),$(this).toggleClass("x-active").parent().siblings("li").find("a.x-nav-head").removeClass("x-active"),$(this).hasClass("x-active")?($(this).find("i").removeClass("icon-xiangxia1").addClass("icon-xiangshang2"),$(this).parent().siblings("li").find("i").addClass("icon-xiangxia1").removeClass("icon-xiangshang2")):$(this).find("i").addClass("icon-xiangxia1").removeClass("icon-xiangshang2")}),$("body").on("click",".x-nav-sidebar  .x-nav-child",function(){$(this).parents(".x-nav-sidebar").find(".x-nav-child").removeClass("x-active"),$(this).addClass("x-active")}),$("body").on("click",".x-nav-cross .x-nav-item",function(){$(this).siblings().removeClass("x-active"),$(this).addClass("x-active")})},function(t,i,e){e(16),function(t,i){t.xProgress2=function(t){return new e(t)};var e=function(t){return this._init(t),this};e.prototype={defaultOpt:{wrap:".x-progress-wrap",pclass:"x-progress-bar",tclass:"x-progress-only",percentage:"0%",onchange:function(){console.log("onchange")}},_init:function(t){this.option=i.extend(!0,{},this.defaultOpt,t),"string"==typeof this.option.wrap?this.wrap=i(this.option.wrap):this.wrap=this.option.wrap,"string"==typeof this.option.percentage&&this._makeprogress()},_makeprogress:function(){this.p=i('<div class="'+this.option.pclass+'" ></div>'),this.t=i('<span class="'+this.option.tclass+'" ></span>'),this.p.append(this.t),this.percentage=this.option.percentage,this.wrap.append(this.p),this._observer(this,"percentage"),this._progress(this.percentage)},_observer:function(t,i){var e=this,n=t[i];Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:function(){return n},set:function(t){t!==n&&e._progress(t,n),n=t,this.option.onchange()}})},_progress:function(t,i){this.p.stop(!0,!0),"0%"===t?this.p.css({width:t}):this.p.animate({width:t},1e3),this.t.text(t)},_p:function(){},_pp:function(t,i,e){if("string"==typeof t.option.percentage)t._p(t,i,e);else if("object"==typeof t.option.percentage)for(var n=0,o=this.option.percentage;n<o;n++)t._p(this.option,i,e)}}}(window,jQuery)},function(t,i,e){e(17),$("body").on("click",".x-tab-nav li",function(){var t=$(this).index();$(this).addClass("x-active").siblings().removeClass("x-active"),$(this).parents(".x-tab").find(".x-tab-content").eq(t).addClass("x-active").siblings().removeClass("x-active")})},function(t,i,e){e(18);var n=0;$(".x-table th").click(function(){var t=$(this).find("i");n%3==0?t.removeClass("x-table-arrow").addClass("x-table-arrowUp"):n%3==1?t.removeClass("x-table-arrowUp").addClass("x-table-arrowDown"):t.removeClass("x-table-arrowDown").addClass("x-table-arrow"),n++})},function(t,i,e){e(22),$("body").on("click",".x-time",function(){var t=$(this).attr("x-time-format")?$(this).attr("x-time-format"):"yyyy-MM-dd HH:mm:ss",i=$(this).attr("x-time-max")?$(this).attr("x-time-max"):"",e=$(this).attr("x-time-min")?$(this).attr("x-time-min"):"",n=$(this).attr("x-time-input")?$(this).attr("x-time-input"):"",o=$(this).attr("x-time-value")?$(this).attr("x-time-value"):"";WdatePicker({el:xCommon.getDomId(this),vel:$(n).get(0),dateFmt:t,maxDate:i,minDate:e,startDate:o})}),window.xTime=function(t,i){i.el=xCommon.getDomId(t),WdatePicker(i)}},function(t,i,e){e(19),$("body").on("mouseover",".x-tip",function(){var t=$(this),i=t.attr("data-tip"),e=$("<div class='x-tip-content'>"+i+"</div>");$(this).after(e),e.css({top:$(this).position().top-e.outerHeight(),left:$(this).position().left+($(this).outerWidth()-e.outerWidth())/2})}),$("body").on("mouseout",".x-tip",function(){$(".x-tip-content").remove()})},function(t,i){!function(t){function i(){return t("<div></div>").css({"margin-left":"13px"})}function e(){return t('<i class="iconfont icon-jia1"></i>').css({"font-size":"12px","vertical-align":"base-line","padding-right":"0px",cursor:"pointer"})[0].outerHTML}function n(t){t.removeClass("icon-jia1"),t.addClass("icon-jian1")}function o(t){t.removeClass("icon-jian1"),t.addClass("icon-jia1")}function a(t){for(var i in t)return"object"==typeof t[i];return!1}function s(i){for(var e=t.extend(!0,[],i),n=e.length,o=0;o<n;o++)e[o].has_children=!1;for(var a=0;a<n;a++)for(var s=a;s<n;s++)e[a].is_node&&e[a].id===e[s].nodeId&&(e[a].has_children=!0),e[a].nodeId===e[s].id&&e[s].is_node&&(e[s].has_children=!0);return e}function d(t,i){for(var e=i.split(","),n=0;n<e.length;n++)for(var o=0;o<t.length;o++)t[o].id===e[n]&&(t[o].is_check=!0,r(t,t[o].nodeId),t[o].is_node&&t[n].has_children&&c(t,t[o].id));return t}function r(t,i){if(!i)return!1;for(var e=!0,n={},o=0;o<t.length;o++)if(t[o].id==i&&(n=t[o]),t[o].nodeId==i&&!t[o].is_check)return e=!1,!1;e&&(n.is_check=!0,n.nodeId&&r(t,n.nodeId))}function c(t,i){if(!i)return!1;for(var e=0;e<t.length;e++)t[e].nodeId===i&&(t[e].is_check=!0,t[e].is_node&&t[e].has_children&&c(t,t[e].id))}function l(i){for(var e=[],n=t.extend(!0,[],i),o=0,a=i.length;o<a;o++)for(var s=o;s<a;s++)i[o].id===i[s].nodeId&&(n[s]=null),i[o].nodeId===i[s].id&&(n[o]=null);return t.each(n,function(t,i){i&&e.push(i.nodeId)}),e[0]}window.xTree=function(t){return new p(t)};var h={dom:"",is_trigger:!1,has_search:!1,only_child:!0,node_merge:!0,zIndex:1,choose:!1,is_multi:!0,expand:!1,width:null,maxHeight:300,data:[],sel_ids:"",onInit:function(){},onBeforeOpen:function(){},onOpen:function(){},onCheck:function(){},onCancel:function(){},onChange:function(){},onClose:function(){}},p=function(t){return this._init(t),this};p.prototype={_is_open:!1,_originId:{nodeId:[],id:[]},_searchTimer:"",_is_first:!0,_init:function(i){if(!a(i.data))return!1;this.opt=t.extend(!0,{},h,i),this.data=s(this.opt.data),this.rootId=l(this.data),this.opt.sel_ids&&d(this.data,this.opt.sel_ids),this._originId=this.getId(),this.dom=this.opt.dom,this.dom.css({position:"relative"}),this.html=this._makePanel(),this.opt.onInit.apply(this);var e=this;this.opt.is_trigger?(this.dom.off("click.xTree"),this.dom.on("click.xTree",function(i){t(".xTreePanel").hide(),e.start(),i.stopPropagation()}),t(document).on("click.xTree",function(){e.end()})):this.start()},start:function(){return this.opt.onBeforeOpen.apply(this),this._showPanel(),this._showData(),this._expand(),this._is_open=!0,this.html.find(".x-tree-search").focus(),this.opt.onOpen.apply(this),this},end:function(){this._is_open&&(this.html.hide(),this.opt.onClose.apply(this),this._originId=this.getId(),this._is_open=!1)},getName:function(){var i=[],e=this.data;if(this.opt.only_child)t.each(e,function(t,e){e.is_check&&!e.is_node&&i.push(e.name)});else if(this.opt.node_merge){var n=[];t.each(e,function(t,i){i.is_check&&i.is_node&&n.push(i.id)});var o=t.extend(!0,[],e);t.each(o,function(i,e){(e.is_check&&-1!=t.inArray(e.nodeId,n)||!e.is_check)&&(o[i]=null)}),t.each(o,function(t,e){e&&i.push(e.name)})}else t.each(e,function(t,e){e.is_check&&i.push(e.name)});return i.join()},getId:function(){var i=[],e=[],n=this.data;if(this.opt.only_child)t.each(n,function(t,e){e.is_check&&!e.is_node&&i.push(e.id)});else{if(this.opt.node_merge){var o=[];t.each(n,function(t,i){i.is_check&&i.is_node&&o.push(i.id)});var a=t.extend(!0,[],n);t.each(a,function(i,e){(e.is_check&&-1!=t.inArray(e.nodeId,o)||!e.is_check)&&(a[i]=null)}),t.each(a,function(t,n){n&&(n.is_node?e.push(n.id):i.push(n.id))})}else t.each(n,function(t,n){n.is_check&&(n.is_node?e.push(n.id):i.push(n.id))});i={id:i,nodeId:e}}return i},cancelItem:function(i,e){var n={},o=this.html.find('input[data-isNode="'+parseInt(e)+'"][data-id="'+i+'"]').prop("checked",!1);t.each(this.data,function(t,o){o.id==i&&o.is_node==e&&(n=o,n.is_check=!1)}),this._chgItem(n,o)},cancelAll:function(){t.each(this.data,function(t,i){i.is_check=!1}),this.html.find("input").prop("checked",!1),this.opt.onCancel.apply(this)},checkItem:function(i,e){var n={},o=this.html.find('input[data-isNode="'+parseInt(e)+'"][data-i="'+i+'"]').prop("checked",!0);t.each(this.data,function(t,o){o.id==i&&o.is_node==e&&(n=o,n.is_check=!0)}),this._chgItem(n,o)},checkAll:function(){this.opt.is_multi&&(t.each(this.data,function(t,i){i.is_check=!0}),this.html.find("input").prop("checked",!0),this.opt.onCheck.apply(this))},getItem:function(){var i=[],e=this.data;if(this.opt.only_child)t.each(e,function(t,e){e.is_check&&!e.is_node&&i.push(e)});else if(this.opt.node_merge){var n=[];t.each(e,function(t,i){i.is_check&&i.is_node&&n.push(i.id)});var o=t.extend(!0,[],e);t.each(o,function(i,e){(e.is_check&&-1!=t.inArray(e.nodeId,n)||!e.is_check)&&(o[i]=null)}),t.each(o,function(t,e){e&&i.push(e)})}else t.each(e,function(t,e){e.is_check&&i.push(e)});return i},search:function(t){if(this._removeLayer(this.rootId),""===t)this.html.find('div[node-id="'+this.rootId+'"]').remove(),this._showLayer(this.rootId);else for(var i in this.data)this.data[i].is_node||-1==this.data[i].name.indexOf(t)||this.html.find('div[node-id="'+this.rootId+'"]').append(this._makeItem(this.data[i]))},_getLayerData:function(t){var i=[];for(var e in this.data)this.data[e].nodeId==t&&i.push(this.data[e]);return i},_chgItem:function(t,i){this.opt.is_multi&&(t.is_node&&(i.parent().parent().find("label > input").prop("checked",t.is_check),this._chgAllChildren(t.id,t.is_check)),t.is_check?this._checkParentNode(t.nodeId):this._cancelParentNode(t.nodeId));var e=[];this._getChild(t,e),t.is_check?this.opt.onCheck.apply(this):this.opt.onCancel.apply(this),this.opt.onChange.apply(this)},_getChild:function(i,e){if(i.is_node&&i.has_children){var n=this;t.each(n.data,function(t,o){o.nodeId==i.id&&(e.push(o),o.is_node&&i.has_children&&n._getChild(o,e))})}},_cancelParentNode:function(i){var e=this;t.each(e.data,function(t,n){n.id==i&&n.is_node&&n.is_check&&(n.is_check=!1,e.html.find('input[data-isNode="1"][data-id="'+i+'"]').prop("checked",!1),e._cancelParentNode(n.nodeId))})},_checkParentNode:function(i){var e=this,n=!0;t.each(e.data,function(t,e){e.nodeId!=i||e.is_check||(n=!1)}),t.each(e.data,function(t,o){o.id==i&&o.is_node&&!o.is_check&&n&&(o.is_check=!0,e.html.find('input[data-isNode="1"][data-id="'+i+'"]').prop("checked",!0),e._checkParentNode(o.nodeId))})},_chgAllChildren:function(i,e){var n=this;t.each(t.extend(!0,[],this.data),function(t,o){o.nodeId==i&&(n.data[t].is_check=e,o.is_node&&o.has_children&&n._chgAllChildren(o.id,e))})},_makePanel:function(){var i="<div></div>";this.opt.has_search&&(i=this._makeSearch(i));var e;return e=this.opt.is_trigger?{"font-family":"Microsoft YaHei","z-index":this.opt.zIndex,border:"1px solid #5d5d5d",background:"#fff",position:"absolute",maxHeight:this.opt.maxHeight,padding:"0 1%","white-space":"nowrap",overflow:"auto"}:{"font-family":"Microsoft YaHei",background:"#fff",maxHeight:this.opt.maxHeight,padding:"0 1%","white-space":"nowrap",overflow:"auto"},t(i).css(e)},_makeSearch:function(i){var e='<input class="x-tree-search" type="text" placeholder="搜索"/></div>';e=t(e).css({border:"none",padding:"4px 0",margin:"5px auto 0 auto",width:"98%",display:"block"});var n=this;return t(e).on("keyup paste",function(){var t=this;clearTimeout(n._searchTimer),n._searchTimer=setTimeout(function(){n.search(t.value)},100)}),t(i).append(e)},_makeNode:function(i){var n;n=t(this.opt.is_multi?'<div node-id="'+i.id+'">'+e()+'<label><input type="checkbox" data-isNode="1" data-id="'+i.id+'" '+(i.is_check?"checked":"")+' data-name="'+i.name+'"/><span>'+i.name+"</span></label></div>":this.opt.only_child?'<div node-id="'+i.id+'">'+e()+"<span>"+i.name+"</span></div>":'<div node-id="'+i.id+'">'+e()+'<label><input type="radio" name="'+this.dom.selector+'" data-isNode="1" data-id="'+i.id+'" '+(i.is_check?"checked":"")+' data-name="'+i.name+'"/><span>'+i.name+"</span></label></div>"),n.find("span").css({cursor:"pointer","user-select":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none"}),n.find("input").css({"vertical-align":"middle"});var o=this;return n.find("i").on("click",function(e){t(this).hasClass("icon-jia1")?o._showLayer(i.id):o._removeLayer(i.id)}),n},_makeChild:function(i){var e;return e=t(this.opt.is_multi?'<div><span></span><label><input type="checkbox" data-id="'+i.id+'" data-isNode="0" data-name="'+i.name+'" '+(i.is_check?"checked":"")+"/>"+i.name+"</label></div>":"<div>"+(this.opt.only_child?"":"<span></span>")+'<label><input type="radio" name="'+this.dom.selector+'" data-id="'+i.id+'" data-isNode="0" data-name="'+i.name+'" />'+i.name+"</label></div>"),e.find("span").css({width:"16px","user-select":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none",display:"inline-block"}),e.find("input").css({"vertical-align":"middle"}),e},_makeItem:function(i){var e;e=i.is_node&&i.has_children?this._makeNode(i):this._makeChild(i);var n=this;return e.find("input").on("click",function(){n.opt.is_multi?i.is_check=!i.is_check:(t.each(n.data,function(t,i){i.is_check=!1}),i.is_check=!0),n._chgItem(i,t(this))}),e},_showPanel:function(){this.opt.is_trigger&&(this.html.css({top:this.dom.outerHeight(),left:0,minWidth:200}),this.html.addClass("xTreePanel"),this.html.on("click",function(t){t.stopPropagation()})),this.dom.append(this.html)},_showData:function(){this._is_first?(this._showLayer(this.rootId),this._is_first=!1):this.html.show()},_expand:function(){var i=this;if(!0===i.opt.expand)t.each(i.data,function(t,e){e.is_node&&e.has_children&&i.html.find("i").filter(".icon-jia1").click()});else if(i.opt.expand){var e=[];e.push(i.rootId);for(var n=0;n<i.opt.expand;n++)e=i._expandLevel(e)}},_expandLevel:function(i){var e=this,n=[];return t.each(i,function(i,o){t.each(e.data,function(t,i){i.nodeId===o&&(n.push(i.id),e.html.find('div[node-id="'+i.nodeId+'"] > i').filter(".icon-jia1").click())})}),n},_showLayer:function(e){var o=this._getLayerData(e),a=i();e===this.rootId?(a=t(a).attr("node-id",this.rootId),this.html.append(a)):(n(this.html.find('div[node-id="'+e+'"] i')),this.html.find('div[node-id="'+e+'"]').append(a));for(var s in o)a.append(this._makeItem(o[s]))},_removeLayer:function(t){this.html.find('div[node-id="'+t+'"]>div').remove(),o(this.html.find('div[node-id="'+t+'"] i'))}}}(jQuery)},function(t,i,e){var n=e(2);!function(t){var i,e=t(".x-uploader"),o=t('<ul class="x-filelist"></ul>').appendTo(e.find(".x-queueList")),a=e.find(".x-statusBar"),s=a.find(".x-info"),d=e.find(".x-uploadBtn"),r=e.find(".x-placeholder"),c=a.find(".progress").hide(),l=0,h=0,p=window.devicePixelRatio||1,u=110*p,f=110*p,m="pedding",g={},v={dom:"",fileButton:{id:".x-filePicker",label:"批量上传"},addButton:{id:".x-filePicker-add",label:"继续添加"},dnd:".x-dndArea",paste:".x-uploader",swf:"../../dist/Uploader.swf",chunked:!1,chunkSize:524288,server:"?m=Admin&c=Upload&a=upload",compress:!1,disableGlobalDnd:!0,fileNumLimit:300,fileSizeLimit:209715200,fileSingleSizeLimit:52428800};window.xUpload=function(t){return new _(t)};var x=v,_=function(i,e){return this.opt=t.extend(!0,{},x,i),this.isFlash&&this.init(this.opt),this};_.prototype={isSupportBase64:function(){var t=new Image,i=!0;return t.onload=t.onerror=function(){1==this.width&&1==this.height||(i=!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i}(),flashVersion:function(){var t;try{t=navigator.plugins["Shockwave Flash"],t=t.description}catch(i){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){t="0.0"}}return t=t.match(/\d+/g),parseFloat(t[0]+"."+t[1],10)}(),supportTransition:function(){var t=document.createElement("p").style,i="transition"in t||"WebkitTransition"in t||"MozTransition"in t||"msTransition"in t||"OTransition"in t;return t=null,i}(),isFlash:function(){return!n.Uploader.support("flash")&&n.browser.ie?void(this.flashVersion?function(t){window.expressinstallcallback=function(t){switch(t){case"Download.Cancelled":alert("您取消了更新！");break;case"Download.Failed":alert("安装失败");break;default:alert("安装已成功，请刷新！")}delete window.expressinstallcallback};var i="./expressInstall.swf",e='<object type="application/x-shockwave-flash" data="'+i+'" ';n.browser.ie&&(e+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),e+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+i+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',t.html(e)}(e):e.html('<a href="http://www.adobe.com/go/getflashplayer" target="_blank" border="0"><img alt="get flash player" src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" /></a>')):n.Uploader.support()?void 0:void alert("Web Uploader 不支持您的浏览器！")},init:function(p){function v(e){var n=t('<li id="'+e.id+'"><p class="title">'+e.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),a=t('<div class="file-panel"><span class="cancel">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div>').appendTo(n),s=n.find("p.progress span"),d=n.find("p.imgWrap"),r=t('<p class="error"></p>'),c="",l=function(t){switch(t){case"exceed_size":c="文件大小超出";break;case"interrupt":c="上传暂停";break;default:c="上传失败，请重试"}console.log(c),r.text(c).appendTo(n)};"invalid"===e.getStatus()?(l(e.statusText),console.log(e.getStatus())):(d.text("预览中"),i.makeThumb(e,function(i,e){var n;if(i)return void d.text("不能预览");I.isSupportBase64?(n=t('<img src="'+e+'">'),d.empty().append(n)):console.log("预览出错")},u,f),g[e.id]=[e.size,0],e.rotation=0),e.on("statuschange",function(t,i){"progress"===i?s.hide().width(0):"queued"===i&&(n.off("mouseenter mouseleave"),a.remove()),"error"===t||"invalid"===t?(console.log(e.statusText),l(e.statusText),g[e.id][1]=1):"interrupt"===t?l("interrupt"):"queued"===t?(r.remove(),s.css("display","block"),g[e.id][1]=0):"progress"===t?(r.remove(),s.css("display","block")):"complete"===t&&(s.hide().width(0),n.append('<span class="success"></span>')),n.removeClass("state-"+i).addClass("state-"+t)}),n.on("mouseenter",function(){a.stop().animate({height:30})}),n.on("mouseleave",function(){a.stop().animate({height:0})}),a.on("click","span",function(){var n,o=t(this).index();switch(o){case 0:return void i.removeFile(e);case 1:e.rotation+=90;break;case 2:e.rotation-=90}supportTransition?(n="rotate("+e.rotation+"deg)",d.css({"-webkit-transform":n,"-mos-transform":n,"-o-transform":n,transform:n})):d.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(e.rotation/90%4+4)%4+")")}),n.appendTo(o)}function x(i){var e=t("#"+i.id);delete g[i.id],_(),e.off().find(".file-panel").off().end().remove()}function _(){var i,e=0,n=0,o=c.children();t.each(g,function(t,i){n+=i[0],e+=i[0]*i[1]}),i=n?e/n:0,p.progress(Math.round(100*i)+"%"),o.eq(0).text(Math.round(100*i)+"%"),o.eq(1).css("width",Math.round(100*i)+"%"),2==$&&b()}function b(){var t,e="";"ready"===m?e="选中"+l+"个文件，共"+n.formatSize(h)+"。":"confirm"===m?(t=i.getStats(),t.uploadFailNum&&(e="已成功上传"+t.successNum+"个文件，"+t.uploadFailNum+'个文件上传失败，<a class="retry" href="#">重新上传</a>失败文件')):(t=i.getStats(),e="共"+l+"张（"+n.formatSize(h)+"），已上传"+t.successNum+"张",t.uploadFailNum&&(e+="，失败"+t.uploadFailNum+"张")),s.html(e)}function w(e){var n;if(e!==m){switch(d.removeClass("state-"+m),d.addClass("state-"+e),m=e){case"pedding":r.removeClass("element-invisible"),o.hide(),a.addClass("element-invisible"),i.refresh();break;case"ready":r.addClass("element-invisible"),t(T.id).removeClass("element-invisible"),o.show(),a.removeClass("element-invisible"),i.refresh();break;case"uploading":t(T.id).addClass("element-invisible"),c.show(),d.text("暂停上传");break;case"paused":c.show(),d.text("继续上传");break;case"confirm":if(c.hide(),t(T.id).removeClass("element-invisible"),d.text("开始上传"),n=i.getStats(),n.successNum&&!n.uploadFailNum)return void w("finish");break;case"finish":n=i.getStats(),n.successNum?console.log("上传成功"):(m="done",location.reload())}2==$&&b()}}function k(t){var i;return t/1024>1&&(t/=1024,i="KB"),t/1024>1&&(t/=1024,i="MB"),t/1024>1&&(t/=1024,i="GB"),t=t.toFixed(2),i=t+i}function y(n){var o,a=t('<p class="error"></p>'),s="",d=function(t){switch(t){case"exceed_size":s="文件大小超出";break;case"interrupt":s="上传暂停";break;default:s='上传失败，请重试 <a class="retry" href="#">重新上传</a>'}a.html(s).appendTo(e)};"invalid"===n.getStatus()?d(n.statusText):i.makeThumb(n,function(i,a){I.isSupportBase64?(o=t('<img src="'+a+'"><span class="x-fileName">'+n.name+"</span>"),e.find(".x-imgFile").append(o)):console.log("预览出错")},u,f),n.on("statuschange",function(t,i){"error"===t||"invalid"===t?(console.log(n.statusText),d(n.statusText)):"interrupt"===t?d("interrupt"):"queued"===t?a.remove():"progress"===t&&a.remove()}),w("ready"),t(".x-statusBar .x-upload-btns").remove()}var $=p.fileType,T=p.addButton;p.pick=p.fileButton;var I=this;1==$&&(p.accept={title:"Images",extensions:"gif,jpg,jpeg,bmp,png",mimeTypes:"image/gif,image/jpg,image/jpeg,image/bmp,image/png"},p.fileButton.multiple=!1),i=n.create(p),i.addButton(T),i.on("ready",function(){window.uploader=i}),i.onUploadProgress=function(i,e){if(2==$){t("#"+i.id).find(".progress span").css("width",100*e+"%"),g[i.id][1]=e,_()}else 1==$&&(a.show(),this.options.progress(Math.round(100*e)+"%"))},i.onUploadSuccess=function(t){1==$&&e.find(".x-info").text("头像上传成功，总大小："+k(t.size))},i.onUploadAccept=function(t,i){this.options.success(t,i)},i.onFileQueued=function(t){2==$?(l++,h+=t.size,1===l&&(r.addClass("element-invisible"),a.show()),v(t),w("ready"),_()):1==$&&(y(t),"ready"===m?i.upload(t):"paused"===m?i.upload(t):"uploading"===m&&i.stop(t))},i.onUploadError=function(t,i){"http"==i&&console.log("服务器错误")},i.onFileDequeued=function(t){2==$&&(l--,h-=t.size,l||w("pedding"),x(t),_())},i.onUploadFinished=function(){2==$&&w("confirm")},i.onStartUpload=function(t){w("uploading")},i.onStopUpload=function(){console.log("暂停"),w("paused")},i.onError=function(t){switch(t){case"Q_TYPE_DENIED":alert("不符合的文件类型");break;case"Q_EXCEED_SIZE_LIMIT":alert("文件总大小超出，请重新设置");break;case"Q_EXCEED_NUM_LIMIT":alert("文件数量过多，请分批上传")}},d.on("click",function(){if(console.log("开始上传"),t(this).hasClass("disabled"))return!1;"ready"===m?i.upload():"paused"===m?i.upload():"uploading"===m&&i.stop()}),e.on("click",".retry",function(){i.retry()}),d.addClass("state-"+m),_()}}}($)},function(t,i,e){e(1),$.validator.setDefaults({debug:!0,submitHandler:function(){alert("验证通过，提交成功!")}}),$.extend($.validator.messages,{required:"这里不能为空",remote:"请修正此字段",email:"请提供有效的邮箱, 格式name@domain.com",url:"请输入有效的网址",date:"请输入有效的日期",dateISO:"请输入有效的日期 (YYYY-MM-DD)",number:"请输入有效的数字",digits:"只能输入整数数字",creditcard:"请输入有效的信用卡号码",equalTo:"你的输入不相同",extension:"请检查后缀",maxlength:$.validator.format("最多可以输入 {0} 个字符"),minlength:$.validator.format("最少要输入 {0} 个字符"),rangelength:$.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),range:$.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),max:$.validator.format("请输入不大于 {0} 的数值"),min:$.validator.format("请输入不小于 {0} 的数值")}),$.validator.addMethod("xlower",function(t,i){return/[a-z]/.test(t)},"请包含小写字母"),$.validator.addMethod("xcapital",function(t,i){return/[A-Z]/.test(t)},"请包含大写字母"),$.validator.addMethod("xdigit",function(t,i){return/\d/.test(t)},"请包含数字"),$.validator.addMethod("xspecial",function(t,i){return/\W/.test(t)},"请包含特殊字符"),$.validator.addMethod("xchars2",function(t,i){var e=0;return/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/\d/.test(t)&&e++,/\W/.test(t)&&e++,e>=2},"请至少包含2种字符"),$.validator.addMethod("xname",function(t,i){return/^(\w+|[\u4e00-\u9fa5]+)$/.test(t)},"姓名可以包含字母、数字、下划线或汉字"),$.validator.addMethod("xuser",function(t,i){return/^(?![\d_])[\w\u4e00-\u9fa5]+$/.test(t)},"用户名可以包含字母、数字、'_'和汉字，不允许以数字或'_'开头"),$.validator.addMethod("xpwd",function(t,i){return/^\S+$/.test(t)},"密码最少6位，可以包含任何非空白字符"),$.validator.addMethod("xphone",function(t,i){return/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(t)},"请输入正确的11位手机号码, 支持13[0-9], 14[5,7], 15[0, 1, 2, 3, 5, 6, 7, 8, 9], 17[0, 1, 6, 7, 8], 18[0-9]"),$.validator.addMethod("xemail",function(t,i){return/^[\w.]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/.test(t)},"请输入正确的Email地址，格式: name@domain"),$.validator.addMethod("xurl",function(t,i){return/^((http|ftp|https):\/\/)?[\w_.]+(\/[\w_]+)*\/?$/.test(t)},"请输入正确的url地址"),$.validator.addMethod("xip",function(t,i){return/^([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])$/.test(t)},"请输入正确的ip地址"),$.validator.addMethod("xpostid",function(t,i){return/^[1-9]\d{5}(?!\d)$/.test(t)},"请输入正确的邮政编码"),$.validator.addMethod("xtel",function(t,i){return/^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(t)},"请输入正确的固定电话"),$.validator.addMethod("xidcn",function(t,i){return/^\d{17}([0-9]|X|x)$/.test(t)},"请输入正确的身份证")},function(t,i,e){t.exports=e(5)}],[37]);