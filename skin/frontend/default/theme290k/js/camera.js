!function(a){a.fn.camera=function(b){function e(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?!0:void 0}function H(){var b=a(s).width();a("li",s).removeClass("camera_visThumb"),a("li",s).each(function(){var c=a(this).position(),d=a("ul",s).outerWidth(),e=a("ul",s).offset().left,f=a("> div",s).offset().left,g=f-e;g>0?a(".camera_prevThumbs",V).removeClass("hideNav"):a(".camera_prevThumbs",V).addClass("hideNav"),d-g>b?a(".camera_nextThumbs",V).removeClass("hideNav"):a(".camera_nextThumbs",V).addClass("hideNav");var h=c.left,i=c.left+a(this).width();i-g<=b&&h-g>=0&&a(this).addClass("camera_visThumb")})}function K(){function d(){if(t=f.width(),-1!=b.height.indexOf("%")){var c=Math.round(t/(100/parseFloat(b.height)));u=""!=b.minHeight&&c<parseFloat(b.minHeight)?parseFloat(b.minHeight):c,f.css({height:u})}else"auto"==b.height?u=f.height():(u=parseFloat(b.height),f.css({height:u}));a(".camerarelative",k).css({width:t,height:u}),a(".imgLoaded",k).each(function(){var g,h,c=a(this),d=c.attr("width"),e=c.attr("height"),i=(c.index(),c.attr("data-alignment")),j=c.attr("data-portrait");if(("undefined"===typeof i||i===!1||""===i)&&(i=b.alignment),("undefined"===typeof j||j===!1||""===j)&&(j=b.portrait),0==j||"false"==j)if(d/e<t/u){var k=t/d,l=.5*Math.abs(u-e*k);switch(i){case"topLeft":g=0;break;case"topCenter":g=0;break;case"topRight":g=0;break;case"centerLeft":g="-"+l+"px";break;case"center":g="-"+l+"px";break;case"centerRight":g="-"+l+"px";break;case"bottomLeft":g="-"+2*l+"px";break;case"bottomCenter":g="-"+2*l+"px";break;case"bottomRight":g="-"+2*l+"px"}c.css({height:e*k,"margin-left":0,"margin-top":g,position:"absolute",visibility:"visible",width:t})}else{var k=u/e,l=.5*Math.abs(t-d*k);switch(i){case"topLeft":h=0;break;case"topCenter":h="-"+l+"px";break;case"topRight":h="-"+2*l+"px";break;case"centerLeft":h=0;break;case"center":h="-"+l+"px";break;case"centerRight":h="-"+2*l+"px";break;case"bottomLeft":h=0;break;case"bottomCenter":h="-"+l+"px";break;case"bottomRight":h="-"+2*l+"px"}c.css({height:u,"margin-left":h,"margin-top":0,position:"absolute",visibility:"visible",width:d*k})}else if(d/e<t/u){var k=u/e,l=.5*Math.abs(t-d*k);switch(i){case"topLeft":h=0;break;case"topCenter":h=l+"px";break;case"topRight":h=2*l+"px";break;case"centerLeft":h=0;break;case"center":h=l+"px";break;case"centerRight":h=2*l+"px";break;case"bottomLeft":h=0;break;case"bottomCenter":h=l+"px";break;case"bottomRight":h=2*l+"px"}c.css({height:u,"margin-left":h,"margin-top":0,position:"absolute",visibility:"visible",width:d*k})}else{var k=t/d,l=.5*Math.abs(u-e*k);switch(i){case"topLeft":g=0;break;case"topCenter":g=0;break;case"topRight":g=0;break;case"centerLeft":g=l+"px";break;case"center":g=l+"px";break;case"centerRight":g=l+"px";break;case"bottomLeft":g=2*l+"px";break;case"bottomCenter":g=2*l+"px";break;case"bottomRight":g=2*l+"px"}c.css({height:e*k,"margin-left":0,"margin-top":g,position:"absolute",visibility:"visible",width:t})}})}var c;1==I?(clearTimeout(c),c=setTimeout(d,200)):d(),I=!0}function W(){a("iframe",g).each(function(){a(".camera_caption",g).show();var c=a(this),d=c.attr("data-src");c.attr("src",d);var e=b.imagePath+"blank.gif",h=new Image;if(h.src=e,-1!=b.height.indexOf("%")){var i=Math.round(t/(100/parseFloat(b.height)));u=""!=b.minHeight&&i<parseFloat(b.minHeight)?parseFloat(b.minHeight):i}else u="auto"==b.height?f.height():parseFloat(b.height);c.after(a(h).attr({"class":"imgFake",width:t,height:u}));var j=c.clone();c.remove(),a(h).bind("click",function(){"absolute"==a(this).css("position")?(a(this).remove(),-1!=d.indexOf("vimeo")||-1!=d.indexOf("youtube")?autoplay=-1!=d.indexOf("?")?"&autoplay=1":"?autoplay=1":-1!=d.indexOf("dailymotion")&&(autoplay=-1!=d.indexOf("?")?"&autoPlay=1":"?autoPlay=1"),j.attr("src",d+autoplay),R=!0):(a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(j),j.css({position:"absolute",top:0,left:0,zIndex:9}))})})}function X(a){for(var b,c,d=a.length;d;b=parseInt(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}function gb(){if(a(s).length&&!a(r).length){var i,b=a(s).outerWidth(),d=(a("ul > li",s).outerWidth(),a("li.cameracurrent",s).length?a("li.cameracurrent",s).position():""),e=a("ul > li",s).length*a("ul > li",s).outerWidth(),g=a("ul",s).offset().left,h=a("> div",s).offset().left;i=g<0?"-"+(h-g):h-g,1==fb&&(a("ul",s).width(a("ul > li",s).length*a("ul > li",s).outerWidth()),a(s).length&&!a(r).lenght&&f.css({marginBottom:a(s).outerHeight()}),H(),a("ul",s).width(a("ul > li",s).length*a("ul > li",s).outerWidth()),a(s).length&&!a(r).lenght&&f.css({marginBottom:a(s).outerHeight()})),fb=!1;var j=a("li.cameracurrent",s).length?d.left:"",k=a("li.cameracurrent",s).length?d.left+a("li.cameracurrent",s).outerWidth():"";j<a("li.cameracurrent",s).outerWidth()&&(j=0),k-i>b?j+b<e?a("ul",s).animate({"margin-left":"-"+j+"px"},500,H):a("ul",s).animate({"margin-left":"-"+(a("ul",s).outerWidth()-b)+"px"},500,H):j-i<0?a("ul",s).animate({"margin-left":"-"+j+"px"},500,H):(a("ul",s).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(H,100))}}function hb(){ab=0;var c=a(".camera_bar_cont",V).width(),d=a(".camera_bar_cont",V).height();if("pie"!=h)switch(U){case"leftToRight":a("#"+i).css({right:c});break;case"rightToLeft":a("#"+i).css({left:c});break;case"topToBottom":a("#"+i).css({bottom:d});break;case"bottomToTop":a("#"+i).css({top:d})}else cb.clearRect(0,0,b.pieDiameter,b.pieDiameter)}function ib(c){j.addClass("camerasliding"),R=!1;var d=parseFloat(a("div.cameraSlide.cameracurrent",k).index());if(c>0)var l=c-1;else if(d==B-1)var l=0;else var l=d+1;var m=a(".cameraSlide:eq("+l+")",k),n=a(".cameraSlide:eq("+(l+1)+")",k).addClass("cameranext");if(d!=l+1&&n.hide(),a(".cameraContent",g).fadeOut(600),a(".camera_caption",g).show(),a(".camerarelative",m).append(a("> div ",j).eq(l).find("> div.camera_effected")),a(".camera_target_content .cameraContent:eq("+l+")",f).append(a("> div ",j).eq(l).find("> div")),a(".imgLoaded",m).length){if(v.length>l+1&&!a(".imgLoaded",n).length){var x=v[l+1],A=new Image;A.src=x+"?"+(new Date).getTime(),n.prepend(a(A).attr("class","imgLoaded").css("visibility","hidden")),A.onload=function(){q=A.naturalWidth,w=A.naturalHeight,a(A).attr("data-alignment",z[l+1]).attr("data-portrait",y[l+1]),a(A).attr("width",q),a(A).attr("height",w),K()}}b.onLoaded.call(this),a(".camera_loader",f).is(":visible")?a(".camera_loader",f).fadeOut(400):(a(".camera_loader",f).css({visibility:"hidden"}),a(".camera_loader",f).fadeOut(400,function(){a(".camera_loader",f).css({visibility:"visible"})}));var H,I,J,N,O,C=b.rows,D=b.cols,F=1,G=0,P=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0,opacityOnGrid=1==b.opacityOnGrid?0:1;var Q=a(" > div",j).eq(l).attr("data-fx");if(N=e()&&""!=b.mobileFx&&"default"!=b.mobileFx?b.mobileFx:"undefined"!==typeof Q&&Q!==!1&&"default"!==Q?Q:b.fx,"random"==N?(N=X(P),N=N[0]):(N=N,N.indexOf(",")>0&&(N=N.replace(/ /g,""),N=N.split(","),N=X(N),N=N[0])),dataEasing=a(" > div",j).eq(l).attr("data-easing"),mobileEasing=a(" > div",j).eq(l).attr("data-mobileEasing"),O=e()&&""!=b.mobileEasing&&"default"!=b.mobileEasing?"undefined"!==typeof mobileEasing&&mobileEasing!==!1&&"default"!==mobileEasing?mobileEasing:b.mobileEasing:"undefined"!==typeof dataEasing&&dataEasing!==!1&&"default"!==dataEasing?dataEasing:b.easing,H=a(" > div",j).eq(l).attr("data-slideOn"),"undefined"!==typeof H&&H!==!1)T=H;else if("random"==b.slideOn){var T=new Array("next","prev");T=X(T),T=T[0]}else T=b.slideOn;var Y=a(" > div",j).eq(l).attr("data-time");I="undefined"!==typeof Y&&Y!==!1&&""!==Y?parseFloat(Y):b.time;var Z=a(" > div",j).eq(l).attr("data-transPeriod");switch(J="undefined"!==typeof Z&&Z!==!1&&""!==Z?parseFloat(Z):b.transPeriod,a(j).hasClass("camerastarted")||(N="simpleFade",T="next",O="",J=400,a(j).addClass("camerastarted")),N){case"simpleFade":D=1,C=1;break;case"curtainTopLeft":D=0==b.slicedCols?b.cols:b.slicedCols,C=1;break;case"curtainTopRight":D=0==b.slicedCols?b.cols:b.slicedCols,C=1;break;case"curtainBottomLeft":D=0==b.slicedCols?b.cols:b.slicedCols,C=1;break;case"curtainBottomRight":D=0==b.slicedCols?b.cols:b.slicedCols,C=1;break;case"curtainSliceLeft":D=0==b.slicedCols?b.cols:b.slicedCols,C=1;break;case"curtainSliceRight":D=0==b.slicedCols?b.cols:b.slicedCols,C=1;break;case"blindCurtainTopLeft":C=0==b.slicedRows?b.rows:b.slicedRows,D=1;break;case"blindCurtainTopRight":C=0==b.slicedRows?b.rows:b.slicedRows,D=1;break;case"blindCurtainBottomLeft":C=0==b.slicedRows?b.rows:b.slicedRows,D=1;break;case"blindCurtainBottomRight":C=0==b.slicedRows?b.rows:b.slicedRows,D=1;break;case"blindCurtainSliceTop":C=0==b.slicedRows?b.rows:b.slicedRows,D=1;break;case"blindCurtainSliceBottom":C=0==b.slicedRows?b.rows:b.slicedRows,D=1;break;case"stampede":G="-"+J;break;case"mosaic":G=b.gridDifference;break;case"mosaicReverse":G=b.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":G=b.gridDifference,F=1.7;break;case"mosaicSpiralReverse":G=b.gridDifference,F=1.7;break;case"topLeftBottomRight":G=b.gridDifference,F=6;break;case"bottomRightTopLeft":G=b.gridDifference,F=6;break;case"bottomLeftTopRight":G=b.gridDifference,F=6;break;case"topRightBottomLeft":G=b.gridDifference,F=6;break;case"scrollLeft":D=1,C=1;break;case"scrollRight":D=1,C=1;break;case"scrollTop":D=1,C=1;break;case"scrollBottom":D=1,C=1;break;case"scrollHorz":D=1,C=1}for(var fb,jb,$=0,_=C*D,db=t-Math.floor(t/D)*D,eb=u-Math.floor(u/C)*C,kb=0,lb=0,mb=new Array,nb=new Array,ob=new Array;$<_;){mb.push($),nb.push($),E.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var pb=a(".cameraappended:eq("+$+")",k);"scrollLeft"==N||"scrollRight"==N||"scrollTop"==N||"scrollBottom"==N||"scrollHorz"==N?S.eq(l).clone().show().appendTo(pb):"next"==T?S.eq(l).clone().show().appendTo(pb):S.eq(d).clone().show().appendTo(pb),fb=$%D<db?1:0,$%D==0&&(kb=0),jb=Math.floor($/D)<eb?1:0,pb.css({height:Math.floor(u/C+jb+1),left:kb,top:lb,width:Math.floor(t/D+fb+1)}),a("> .cameraSlide",pb).css({height:u,"margin-left":"-"+kb+"px","margin-top":"-"+lb+"px",width:t}),kb=kb+pb.width()-1,$%D==D-1&&(lb=lb+pb.height()-1),$++}switch(N){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":mb=mb.reverse();break;case"curtainBottomRight":mb=mb.reverse();break;case"curtainSliceRight":mb=mb.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":mb=mb.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":mb=mb.reverse();break;case"blindCurtainSliceBottom":mb=mb.reverse();break;case"stampede":mb=X(mb);break;case"mosaic":break;case"mosaicReverse":mb=mb.reverse();break;case"mosaicRandom":mb=X(mb);break;case"mosaicSpiral":var rb,sb,tb,qb=C/2,ub=0;for(tb=0;tb<qb;tb++){for(sb=tb,rb=tb;rb<D-tb-1;rb++)ob[ub++]=sb*D+rb;for(rb=D-tb-1,sb=tb;sb<C-tb-1;sb++)ob[ub++]=sb*D+rb;for(sb=C-tb-1,rb=D-tb-1;rb>tb;rb--)ob[ub++]=sb*D+rb;for(rb=tb,sb=C-tb-1;sb>tb;sb--)ob[ub++]=sb*D+rb}mb=ob;break;case"mosaicSpiralReverse":var rb,sb,tb,qb=C/2,ub=_-1;for(tb=0;tb<qb;tb++){for(sb=tb,rb=tb;rb<D-tb-1;rb++)ob[ub--]=sb*D+rb;for(rb=D-tb-1,sb=tb;sb<C-tb-1;sb++)ob[ub--]=sb*D+rb;for(sb=C-tb-1,rb=D-tb-1;rb>tb;rb--)ob[ub--]=sb*D+rb;for(rb=tb,sb=C-tb-1;sb>tb;sb--)ob[ub--]=sb*D+rb}mb=ob;break;case"topLeftBottomRight":for(var sb=0;sb<C;sb++)for(var rb=0;rb<D;rb++)ob.push(rb+sb);nb=ob;break;case"bottomRightTopLeft":for(var sb=0;sb<C;sb++)for(var rb=0;rb<D;rb++)ob.push(rb+sb);nb=ob.reverse();break;case"bottomLeftTopRight":for(var sb=C;sb>0;sb--)for(var rb=0;rb<D;rb++)ob.push(rb+sb);nb=ob;break;case"topRightBottomLeft":for(var sb=0;sb<C;sb++)for(var rb=D;rb>0;rb--)ob.push(rb+sb);nb=ob}a.each(mb,function(c,e){function o(){if(a(this).addClass("cameraeased"),a(".cameraeased",k).length>=0&&a(s).css({visibility:"visible"}),a(".cameraeased",k).length==_){gb(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",g).each(function(){a(this).css("visibility","hidden")}),S.eq(l).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent"),S.eq(d).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",g).eq(l).addClass("cameracurrent"),d>=0&&a(".cameraContent",g).eq(d).removeClass("cameracurrent"),b.onEndTransition.call(this),"hide"!=a("> div",j).eq(l).attr("data-video")&&a(".cameraContent.cameracurrent .imgFake",g).length&&a(".cameraContent.cameracurrent .imgFake",g).click();var c=S.eq(l).find(".fadeIn").length,e=a(".cameraContent",g).eq(l).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;0!=c&&a(".cameraSlide.cameracurrent .fadeIn",g).each(function(){if(""!=a(this).attr("data-easing"))var b=a(this).attr("data-easing");else var b=O;var d=a(this);if("undefined"===typeof d.attr("data-outerWidth")||d.attr("data-outerWidth")===!1||""===d.attr("data-outerWidth")){var e=d.outerWidth();d.attr("data-outerWidth",e)}else var e=d.attr("data-outerWidth");if("undefined"===typeof d.attr("data-outerHeight")||d.attr("data-outerHeight")===!1||""===d.attr("data-outerHeight")){var f=d.outerHeight();d.attr("data-outerHeight",f)}else var f=d.attr("data-outerHeight");{var g=d.position(),j=(g.left,g.top,d.attr("class")),k=d.index();d.parents(".camerarelative").outerHeight(),d.parents(".camerarelative").outerWidth()}-1!=j.indexOf("fadeIn")?d.animate({opacity:0},0).css("visibility","visible").delay(I/c*.1*(k-1)).animate({opacity:1},I/c*.15,b):d.css("visibility","visible")}),a(".cameraContent.cameracurrent",g).show(),0!=e&&a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",g).each(function(){if(""!=a(this).attr("data-easing"))var b=a(this).attr("data-easing");else var b=O;var c=a(this),d=c.position(),h=(d.left,d.top,c.attr("class")),i=c.index(),j=c.outerHeight();-1!=h.indexOf("moveFromLeft")?(c.css({left:"-"+t+"px",right:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left},I/e*.15,b)):-1!=h.indexOf("moveFromRight")?(c.css({left:t+"px",right:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left},I/e*.15,b)):-1!=h.indexOf("moveFromTop")?(c.css({top:"-"+u+"px",bottom:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({top:d.top},I/e*.15,b,function(){c.css({top:"auto",bottom:0})})):-1!=h.indexOf("moveFromBottom")?(c.css({top:u+"px",bottom:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({top:d.top},I/e*.15,b)):-1!=h.indexOf("fadeFromLeft")?(c.animate({opacity:0},0).css({left:"-"+t+"px",right:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left,opacity:1},I/e*.15,b)):-1!=h.indexOf("fadeFromRight")?(c.animate({opacity:0},0).css({left:t+"px",right:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left,opacity:1},I/e*.15,b)):-1!=h.indexOf("fadeFromTop")?(c.animate({opacity:0},0).css({top:"-"+u+"px",bottom:"auto"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({top:d.top,opacity:1},I/e*.15,b,function(){c.css({top:"auto",bottom:0})})):-1!=h.indexOf("fadeFromBottom")?(c.animate({opacity:0},0).css({bottom:"-"+j+"px"}),c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({bottom:"0",opacity:1},I/e*.15,b)):-1!=h.indexOf("fadeIn")?c.animate({opacity:0},0).css("visibility","visible").delay(I/e*.1*(i-1)).animate({opacity:1},I/e*.15,b):c.css("visibility","visible")}),a(".cameraappended",k).remove(),j.removeClass("camerasliding"),S.eq(d).hide();var o,f=a(".camera_bar_cont",V).width(),m=a(".camera_bar_cont",V).height();o="pie"!=h?.05:.005,a("#"+i).animate({opacity:b.loaderOpacity},200),L=setInterval(function(){if(j.hasClass("stopped")&&clearInterval(L),"pie"!=h)switch(ab<=1.002&&!j.hasClass("stopped")&&!j.hasClass("paused")&&!j.hasClass("hovered")?ab+=o:ab<=1&&(j.hasClass("stopped")||j.hasClass("paused")||j.hasClass("stopped")||j.hasClass("hovered"))?ab=ab:j.hasClass("stopped")||j.hasClass("paused")||j.hasClass("hovered")||(clearInterval(L),W(),a("#"+i).animate({opacity:0},200,function(){clearTimeout(M),M=setTimeout(hb,n),ib(),b.onStartLoading.call(this)})),U){case"leftToRight":a("#"+i).animate({right:f-f*ab},I*o,"linear");break;case"rightToLeft":a("#"+i).animate({left:f-f*ab},I*o,"linear");break;case"topToBottom":a("#"+i).animate({bottom:m-m*ab},I*o,"linear");break;case"bottomToTop":a("#"+i).animate({bottom:m-m*ab},I*o,"linear")}else bb=ab,cb.clearRect(0,0,b.pieDiameter,b.pieDiameter),cb.globalCompositeOperation="destination-over",cb.beginPath(),cb.arc(b.pieDiameter/2,b.pieDiameter/2,b.pieDiameter/2-b.loaderStroke,0,2*Math.PI,!1),cb.lineWidth=b.loaderStroke,cb.strokeStyle=b.loaderBgColor,cb.stroke(),cb.closePath(),cb.globalCompositeOperation="source-over",cb.beginPath(),cb.arc(b.pieDiameter/2,b.pieDiameter/2,b.pieDiameter/2-b.loaderStroke,0,2*Math.PI*bb,!1),cb.lineWidth=b.loaderStroke-2*b.loaderPadding,cb.strokeStyle=b.loaderColor,cb.stroke(),cb.closePath(),ab<=1.002&&!j.hasClass("stopped")&&!j.hasClass("paused")&&!j.hasClass("hovered")?ab+=o:ab<=1&&(j.hasClass("stopped")||j.hasClass("paused")||j.hasClass("hovered"))?ab=ab:j.hasClass("stopped")||j.hasClass("paused")||j.hasClass("hovered")||(clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},200,function(){clearTimeout(M),M=setTimeout(hb,n),ib(),b.onStartLoading.call(this)}))},I*o)}}switch(fb=e%D<db?1:0,e%D==0&&(kb=0),jb=Math.floor(e/D)<eb?1:0,N){case"simpleFade":height=u,width=t,opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor(t/D+fb+1),marginTop="-"+Math.floor(u/C+jb+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor(t/D+fb+1),marginTop="-"+Math.floor(u/C+jb+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor(t/D+fb+1),marginTop=Math.floor(u/C+jb+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor(t/D+fb+1),marginTop=Math.floor(u/C+jb+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor(t/D+fb+1),marginTop=e%2==0?Math.floor(u/C+jb+1)+"px":"-"+Math.floor(u/C+jb+1)+"px";break;case"curtainSliceRight":height=0,width=Math.floor(t/D+fb+1),marginTop=e%2==0?Math.floor(u/C+jb+1)+"px":"-"+Math.floor(u/C+jb+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(u/C+jb+1),width=0,marginLeft="-"+Math.floor(t/D+fb+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(u/C+jb+1),width=0,marginLeft=Math.floor(t/D+fb+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(u/C+jb+1),width=0,marginLeft="-"+Math.floor(t/D+fb+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(u/C+jb+1),width=0,marginLeft=Math.floor(t/D+fb+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor(u/C+jb+1),width=0,marginLeft=e%2==0?"-"+Math.floor(t/D+fb+1)+"px":Math.floor(t/D+fb+1)+"px";break;case"blindCurtainSliceTop":height=Math.floor(u/C+jb+1),width=0,marginLeft=e%2==0?"-"+Math.floor(t/D+fb+1)+"px":Math.floor(t/D+fb+1)+"px";break;case"stampede":height=0,width=0,marginLeft=.2*t*(c%D-(D-Math.floor(D/2)))+"px",marginTop=.2*u*(Math.floor(c/D)+1-(C-Math.floor(C/2)))+"px";break;case"mosaic":height=0,width=0;break;case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(t/D+fb+1)+"px",marginTop=Math.floor(u/C+jb+1)+"px";break;case"mosaicRandom":height=0,width=0,marginLeft=.5*Math.floor(t/D+fb+1)+"px",marginTop=.5*Math.floor(u/C+jb+1)+"px";break;case"mosaicSpiral":height=0,width=0,marginLeft=.5*Math.floor(t/D+fb+1)+"px",marginTop=.5*Math.floor(u/C+jb+1)+"px";break;case"mosaicSpiralReverse":height=0,width=0,marginLeft=.5*Math.floor(t/D+fb+1)+"px",marginTop=.5*Math.floor(u/C+jb+1)+"px";break;case"topLeftBottomRight":height=0,width=0;break;case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(t/D+fb+1)+"px",marginTop=Math.floor(u/C+jb+1)+"px";break;case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(u/C+jb+1)+"px";break;case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(t/D+fb+1)+"px",marginTop=0;break;case"scrollRight":height=u,width=t,marginLeft=-t;break;case"scrollLeft":height=u,width=t,marginLeft=t;break;case"scrollTop":height=u,width=t,marginTop=u;break;case"scrollBottom":height=u,width=t,marginTop=-u;break;case"scrollHorz":height=u,width=t,marginLeft=0==d&&l==B-1?-t:d<l||d==B-1&&0==l?t:-t}var m=a(".cameraappended:eq("+e+")",k);"undefined"!==typeof L&&(clearInterval(L),clearTimeout(M),M=setTimeout(hb,J+G)),a(r).length&&(a(".camera_pag li",f).removeClass("cameracurrent"),a(".camera_pag li",f).eq(l).addClass("cameracurrent")),a(s).length&&(a("li",s).removeClass("cameracurrent"),a("li",s).eq(l).addClass("cameracurrent"),a("li",s).not(".cameracurrent").find("img").animate({opacity:.5},0),a("li.cameracurrent img",s).animate({opacity:1},0),a("li",s).hover(function(){a("img",this).stop(!0,!1).animate({opacity:1},150)},function(){a(this).hasClass("cameracurrent")||a("img",this).stop(!0,!1).animate({opacity:.5},150)}));var n=parseFloat(J)+parseFloat(G);"scrollLeft"==N||"scrollRight"==N||"scrollTop"==N||"scrollBottom"==N||"scrollHorz"==N?(b.onStartTransition.call(this),n=0,m.delay((J+G)/_*nb[c]*F*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(u/C+jb+1),"margin-top":0,"margin-left":0,width:Math.floor(t/D+fb+1)},J-G,O,o),S.eq(d).delay((J+G)/_*nb[c]*F*.5).animate({"margin-left":-1*marginLeft,"margin-top":-1*marginTop},J-G,O,function(){a(this).css({"margin-top":0,"margin-left":0})})):(b.onStartTransition.call(this),n=parseFloat(J)+parseFloat(G),"next"==T?m.delay((J+G)/_*nb[c]*F*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(u/C+jb+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(t/D+fb+1)},J-G,O,o):(S.eq(l).show().css("z-index","999").addClass("cameracurrent"),S.eq(d).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",g).eq(l).addClass("cameracurrent"),a(".cameraContent",g).eq(d).removeClass("cameracurrent"),m.delay((J+G)/_*nb[c]*F*.5).css({display:"block",height:Math.floor(u/C+jb+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(t/D+fb+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},J-G,O,o)))})}else{var o=v[l],p=new Image;p.src=o+"?"+(new Date).getTime(),m.css("visibility","hidden"),m.prepend(a(p).attr("class","imgLoaded").css("visibility","hidden"));var q,w;a(p).get(0).complete&&"0"!=q&&"0"!=w&&"undefined"!==typeof q&&q!==!1&&"undefined"!==typeof w&&w!==!1||(a(".camera_loader",f).delay(500).fadeIn(400),p.onload=function(){q=p.naturalWidth,w=p.naturalHeight,a(p).attr("data-alignment",z[l]).attr("data-portrait",y[l]),a(p).attr("width",q),a(p).attr("height",w),k.find(".cameraSlide_"+l).hide().css("visibility","visible"),K(),ib(l+1)})}}var d={alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},b=a.extend({},d,b),f=a(this).addClass("camera_wrap");f.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var g=a(".camera_fakehover",f);g.append('<div class="camera_target"></div>'),1==b.overlayer&&g.append('<div class="camera_overlayer"></div>'),g.append('<div class="camera_target_content"></div>');var h;h="pie"==b.loader&&a.browser.msie&&a.browser.version<9?"bar":b.loader,g.append("pie"==h?'<div class="camera_pie"></div>':"bar"==h?'<div class="camera_bar"></div>':'<div class="camera_bar" style="display:none"></div>'),1==b.playPause&&g.append('<div class="camera_commands"></div>'),1==b.navigation&&g.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),1==b.thumbnails&&f.append('<div class="camera_thumbs_cont" />'),1==b.thumbnails&&1!=b.pagination&&a(".camera_thumbs_cont",f).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),1==b.pagination&&f.append('<div class="camera_pag"></div>'),f.append('<div class="camera_loader"></div>'),a(".camera_caption",f).each(function(){a(this).wrapInner("<div />")});var t,u,i="pie_"+f.index(),j=a(".camera_src",f),k=a(".camera_target",f),l=a(".camera_target_content",f),m=a(".camera_pie",f),n=a(".camera_bar",f),o=a(".camera_prev",f),p=a(".camera_next",f),q=a(".camera_commands",f),r=a(".camera_pag",f),s=a(".camera_thumbs_cont",f),v=new Array;a("> div",j).each(function(){v.push(a(this).attr("data-src"))});var w=new Array;a("> div",j).each(function(){w.push(a(this).attr("data-link")?a(this).attr("data-link"):"")});var x=new Array;a("> div",j).each(function(){x.push(a(this).attr("data-target")?a(this).attr("data-target"):"")});var y=new Array;a("> div",j).each(function(){y.push(a(this).attr("data-portrait")?a(this).attr("data-portrait"):"")});var z=new Array;a("> div",j).each(function(){z.push(a(this).attr("data-alignment")?a(this).attr("data-alignment"):"")});var A=new Array;a("> div",j).each(function(){A.push(a(this).attr("data-thumb")?a(this).attr("data-thumb"):"")});var B=v.length;a(l).append('<div class="cameraContents" />');var C;for(C=0;C<B;C++)if(a(".cameraContents",l).append('<div class="cameraContent" />'),""!=w[C]){var D=a("> div ",j).eq(C).attr("data-box");D="undefined"!==typeof D&&D!==!1&&""!=D?'data-box="'+a("> div ",j).eq(C).attr("data-box")+'"':"",a(".camera_target_content .cameraContent:eq("+C+")",f).append('<a class="camera_link" href="'+w[C]+'" '+D+' target="'+x[C]+'"></a>')}a(".camera_caption",f).each(function(){var b=a(this).parent().index(),c=f.find(".cameraContent").eq(b);a(this).appendTo(c)}),k.append('<div class="cameraCont" />');var F,E=a(".cameraCont",f);for(F=0;F<B;F++){E.append('<div class="cameraSlide cameraSlide_'+F+'" />');var G=a("> div:eq("+F+")",j);k.find(".cameraSlide_"+F).clone(G)}a(window).bind("load resize pageshow",function(){gb(),H()}),E.append('<div class="cameraSlide cameraSlide_'+F+'" />');var I;f.show();var J,t=k.width(),u=k.height();a(window).bind("resize pageshow",function(){1==I&&K(),a("ul",s).animate({"margin-top":0},0,gb),j.hasClass("paused")||(j.addClass("paused"),a(".camera_stop",V).length?(a(".camera_stop",V).hide(),a(".camera_play",V).show(),"none"!=h&&a("#"+i).hide()):"none"!=h&&a("#"+i).hide(),clearTimeout(J),J=setTimeout(function(){j.removeClass("paused"),a(".camera_play",V).length?(a(".camera_play",V).hide(),a(".camera_stop",V).show(),"none"!=h&&a("#"+i).fadeIn()):"none"!=h&&a("#"+i).fadeIn()},1500))});var L,M,O,P,q,r,Q,R;if(O=e()&&""!=b.mobileAutoAdvance?b.mobileAutoAdvance:b.autoAdvance,0==O&&j.addClass("paused"),P=e()&&""!=b.mobileNavHover?b.mobileNavHover:b.navigationHover,0!=j.length){var S=a(".cameraSlide",k);S.wrapInner('<div class="camerarelative" />');var U=b.barDirection,V=f;a("iframe",g).each(function(){var b=a(this),c=b.attr("src");b.attr("data-src",c);var d=b.parent().index(".camera_src > div");a(".camera_target_content .cameraContent:eq("+d+")",f).append(b)}),W(),1==b.hover&&(e()||g.hover(function(){j.addClass("hovered")},function(){j.removeClass("hovered")})),1==P&&(a(o,f).animate({opacity:0},0),a(p,f).animate({opacity:0},0),a(q,f).animate({opacity:0},0),e()?(g.live("vmouseover",function(){a(o,f).animate({opacity:1},200),a(p,f).animate({opacity:1},200),a(q,f).animate({opacity:1},200)}),g.live("vmouseout",function(){a(o,f).delay(500).animate({opacity:0},200),a(p,f).delay(500).animate({opacity:0},200),a(q,f).delay(500).animate({opacity:0},200)})):g.hover(function(){a(o,f).animate({opacity:1},200),a(p,f).animate({opacity:1},200),a(q,f).animate({opacity:1},200)},function(){a(o,f).animate({opacity:0},200),a(p,f).animate({opacity:0},200),a(q,f).animate({opacity:0},200)})),a(".camera_stop",V).live("click",function(){O=!1,j.addClass("paused"),a(".camera_stop",V).length?(a(".camera_stop",V).hide(),a(".camera_play",V).show(),"none"!=h&&a("#"+i).hide()):"none"!=h&&a("#"+i).hide()}),a(".camera_play",V).live("click",function(){O=!0,j.removeClass("paused"),a(".camera_play",V).length?(a(".camera_play",V).hide(),a(".camera_stop",V).show(),"none"!=h&&a("#"+i).show()):"none"!=h&&a("#"+i).show()}),1==b.pauseOnClick&&a(".camera_target_content",g).mouseup(function(){O=!1,j.addClass("paused"),a(".camera_stop",V).hide(),a(".camera_play",V).show(),a("#"+i).hide()}),a(".cameraContent, .imgFake",g).hover(function(){Q=!0},function(){Q=!1}),a(".cameraContent, .imgFake",g).bind("click",function(){1==R&&1==Q&&(O=!1,a(".camera_caption",g).hide(),j.addClass("paused"),a(".camera_stop",V).hide(),a(".camera_play",V).show(),a("#"+i).hide())})}if("pie"!=h){n.append('<span class="camera_bar_cont" />'),a(".camera_bar_cont",n).animate({opacity:b.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":b.loaderBgColor}).append('<span id="'+i+'" />'),a("#"+i).animate({opacity:0},0);var Z=a("#"+i);switch(Z.css({position:"absolute","background-color":b.loaderColor}),b.barPosition){case"left":n.css({right:"auto",width:b.loaderStroke});break;case"right":n.css({left:"auto",width:b.loaderStroke});break;case"top":n.css({bottom:"auto",height:b.loaderStroke});break;case"bottom":n.css({top:"auto",height:b.loaderStroke})}switch(U){case"leftToRight":Z.css({left:0,right:0,top:b.loaderPadding,bottom:b.loaderPadding});break;case"rightToLeft":Z.css({left:0,right:0,top:b.loaderPadding,bottom:b.loaderPadding});break;case"topToBottom":Z.css({left:b.loaderPadding,right:b.loaderPadding,top:0,bottom:0});break;case"bottomToTop":Z.css({left:b.loaderPadding,right:b.loaderPadding,top:0,bottom:0})}}else{m.append('<canvas id="'+i+'"></canvas>');var Z=document.getElementById(i);Z.setAttribute("width",b.pieDiameter),Z.setAttribute("height",b.pieDiameter);var _;switch(b.piePosition){case"leftTop":_="left:0; top:0;";break;case"rightTop":_="right:0; top:0;";break;case"leftBottom":_="left:0; bottom:0;";break;case"rightBottom":_="right:0; bottom:0;"}Z.setAttribute("style","position:absolute; z-index:1002; "+_);var ab,bb;if(Z&&Z.getContext){var cb=Z.getContext("2d");cb.rotate(1.5*Math.PI),cb.translate(-b.pieDiameter,0)}}if(("none"==h||0==O)&&(a("#"+i).hide(),a(".camera_canvas_wrap",V).hide()),a(r).length){a(r).append('<ul class="camera_pag_ul" />');var db;for(db=0;db<B;db++)a(".camera_pag_ul",f).append('<li class="pag_nav_'+db+'" style="position:relative; z-index:1002"><span><span>'+db+"</span></span></li>");a(".camera_pag_ul li",f).hover(function(){if(a(this).addClass("camera_hover"),a(".camera_thumb",this).length){var b=a(".camera_thumb",this).outerWidth(),c=a(".camera_thumb",this).outerHeight(),d=a(this).outerWidth();
a(".camera_thumb",this).show().css({top:"-"+c+"px",left:"-"+(b-d)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover"),a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()}),a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(s).length){a(r).length?(a.each(A,function(b){if(""!=a("> div",j).eq(b).attr("data-thumb")){var d=a("> div",j).eq(b).attr("data-thumb"),e=new Image;e.src=d,a("li.pag_nav_"+b,r).append(a(e).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),a("li.pag_nav_"+b+" > img",r).after('<div class="thumb_arrow" />'),a("li.pag_nav_"+b+" > .thumb_arrow",r).animate({opacity:0},0)}}),f.css({marginBottom:a(r).outerHeight()})):(a(s).append("<div />"),a(s).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),a("> div",s).append("<ul />"),a.each(A,function(b){if(""!=a("> div",j).eq(b).attr("data-thumb")){var d=a("> div",j).eq(b).attr("data-thumb"),e=new Image;e.src=d,a("ul",s).append('<li class="pix_thumb pix_thumb_'+b+'" />'),a("li.pix_thumb_"+b,s).append(a(e).attr("class","camera_thumb"))}}))}else!a(s).length&&a(r).length&&f.css({marginBottom:a(r).outerHeight()});var fb=!0;a(q).length&&(a(q).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'),1==O?(a(".camera_play",V).hide(),a(".camera_stop",V).show()):(a(".camera_stop",V).hide(),a(".camera_play",V).show())),hb(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",g).each(function(){a(this).css("visibility","hidden")}),b.onStartLoading.call(this),ib(),a(o).length&&a(o).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",f).animate({opacity:0},0),hb(),ib(0!=c?c:B),b.onStartLoading.call(this)}}),a(p).length&&a(p).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0),hb(),ib(c==B-1?1:c+2),b.onStartLoading.call(this)}}),e()&&(g.bind("swipeleft",function(){if(!j.hasClass("camerasliding")){var d=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0),hb(),ib(d==B-1?1:d+2),b.onStartLoading.call(this)}}),g.bind("swiperight",function(){if(!j.hasClass("camerasliding")){var d=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0),hb(),ib(0!=d?d:B),b.onStartLoading.call(this)}})),a(r).length&&a(".camera_pag li",f).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(this).index()),d=parseFloat(a(".cameraSlide.cameracurrent",k).index());c!=d&&(clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0),hb(),ib(c+1),b.onStartLoading.call(this))}}),a(s).length&&(a(".pix_thumb img",s).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(this).parents("li").index()),d=parseFloat(a(".cameracurrent",k).index());c!=d&&(clearInterval(L),W(),a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0),a(".pix_thumb",s).removeClass("cameracurrent"),a(this).parents("li").addClass("cameracurrent"),hb(),ib(c+1),gb(),b.onStartLoading.call(this))}}),a(".camera_thumbs_cont .camera_prevThumbs",V).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_prevThumbs",V).click(function(){var b=0,d=(a(s).outerWidth(),a("ul",s).offset().left),e=a("> div",s).offset().left,f=e-d;a(".camera_visThumb",s).each(function(){var c=a(this).outerWidth();b+=c}),f-b>0?a("ul",s).animate({"margin-left":"-"+(f-b)+"px"},500,H):a("ul",s).animate({"margin-left":0},500,H)}),a(".camera_thumbs_cont .camera_nextThumbs",V).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_nextThumbs",V).click(function(){var b=0,c=a(s).outerWidth(),d=a("ul",s).outerWidth(),e=a("ul",s).offset().left,f=a("> div",s).offset().left,g=f-e;a(".camera_visThumb",s).each(function(){var c=a(this).outerWidth();b+=c}),g+b+b<d?a("ul",s).animate({"margin-left":"-"+(g+b)+"px"},500,H):a("ul",s).animate({"margin-left":"-"+(d-c)+"px"},500,H)}))}}(jQuery),function(a){a.fn.cameraStop=function(){{var b=a(this),c=a(".camera_src",b);"pie_"+b.index()}if(c.addClass("stopped"),a(".camera_showcommands").length){a(".camera_thumbs_wrap",b)}else;}}(jQuery),function(a){a.fn.cameraPause=function(){var b=a(this),c=a(".camera_src",b);c.addClass("paused")}}(jQuery),function(a){a.fn.cameraResume=function(){var b=a(this),c=a(".camera_src",b);("undefined"===typeof autoAdv||autoAdv!==!0)&&c.removeClass("paused")}}(jQuery);