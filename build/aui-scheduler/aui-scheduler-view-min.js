AUI.add("aui-scheduler-view",function(b9){var cm=b9.Lang,cz=cm.isObject,b0=cm.isString,aZ=cm.isBoolean,aG=cm.isNumber,bP=function(A){return parseFloat(A)||0;},bR=function(cE,A){return Math.round(cE/A)*A;},ar=b9.DataType.DateMath,b5=b9.WidgetStdMod,aM=ar.WEEK_LENGTH,bT="scheduler-view",aF="scheduler-view-day",cd="scheduler-view-week",ct="scheduler-view-month",bc="activeColumn",bO="activeView",aS="boundingBox",cC="cancel",ah="col",ay="colDaysNode",cb="colHeaderDaysNode",H="colblank",w="coldata",aI="colday",a="colgrid",W="colspan",m="coltime",bq="columnData",aY="columnDayHeader",aK="columnShims",aQ="columnTableGrid",bi="columnTime",aP="container",aN="content",bb="creationEndDate",Z="creationStartDate",bg="currentDate",bD="data",cj="day",T="days",B="delegateConfig",bM="disabled",X="div",bp="division",ab="down",E="draggingEvent",bZ="duration",aB="endDate",a7="event",cu="eventClass",bL="eventPlaceholder",cB="eventRecorder",q="eventWidth",aH="first",ce="firstDayOfWeek",be="grid",bA="gridContainer",cA="hd",b7="header",bf="headerDateFormat",cy="headerTableNode",aR="host",aE="hourHeight",s="icon",al="isoTime",aX="lasso",aT="left",az="locale",ac="marker",a9="markercell",a2="markercellsNode",J="markers",bG="markersNode",bI="month",bd="monthContainerNode",e="monthRows",C="mousedown",L="mousemove",aW="mouseup",aO="next",cD="node",ak="nomonth",at="noscroll",b6="offsetHeight",b8="offsetWidth",ca="pad",aJ="paddingNode",co="parentEvent",Q="parentNode",bx="proxy",ai="px",ad="region",aU="rendered",b4="repeated",a3="right",bv="row",bS="save",p="scheduler",aD="scheduler-event",Y="scrollable",S="shim",cc="startDate",V="startXY",aV="table",z="tableGridNode",bB="tableNode",by="tbody",f="td",bs="time",aj="timesNode",h="title",am="today",bw="top",ax="visible",cp="week",bE="width",t="data-colnumber",k="a",bo=",",bQ="-",bU=".",bN="",bF="%",U=" ",D=b9.getClassName,br=D(bT,at),ae=D(bT,Y);var a1=b9.Component.create({NAME:bT,AUGMENTS:[b9.WidgetStdMod],ATTRS:{bodyContent:{value:bN},eventClass:{valueFn:function(){return b9.SchedulerEvent;}},height:{value:600},isoTime:{value:false,validator:aZ},name:{value:bN,validator:b0},navigationDateFormat:{value:"%A - %d %B, %Y",validator:b0},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:aZ},triggerNode:{setter:b9.one},visible:{value:false}},BIND_UI_ATTRS:[Y],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);cF.set(bg,cE);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return ar.clearTime(new Date());},limitDate:function(cE,cF){var A=this;if(ar.after(cE,cF)){cE=ar.clone(cF);}return cE;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(cE){var A=this;A.adjustCurrentDate();A._uiSetScrollable(A.get(Y));},_setScheduler:function(cF){var A=this;var cE=A.get(p);if(cE){A.removeTarget(cE);}if(cF){A.addTarget(cF);cF.after("eventsChange",b9.bind(A.flushViewCache,A));}return cF;},_uiSetScrollable:function(cF){var A=this;var cE=A.bodyNode;if(cE){cE.toggleClass(ae,cF);cE.toggleClass(br,!cF);}},_uiSetVisible:function(cE){var A=this;a1.superclass._uiSetVisible.apply(this,arguments);if(cE&&A.get(aU)){A.adjustCurrentDate();}}}});b9.SchedulerView=a1;var bK=cm.sub;var N=function(A,cE){return function(cG){var cF=cG.all(A);return(cF.size()>=cE)?cF:null;};},aL=D(aD),bl=D(aD,bM),bW=D(aD,bx),P=D(p,am),aq=D(p,am,cA),x=D(bT,w),c=D(bT,a),cf=D(bT,be),cg=D(bT,be,aP),bn=D(bT,ac,bp),ci=D(bT,a9),K=D(bT,J),bC=D(bT,aV),cl=D(bT,cj,b7,aV),r=D(bT,cj,b7,cj),bm=D(bT,cj,b7,cj,ca,a3),bY=D(bT,cj,b7,cj,aH),a6=D(bT,cj,b7,ah),cw=D(bT,aV,ah),aC=D(bT,aV,ah,S),O=D(bT,aV,H),G=D(bT,aV,aI),cq=D(bT,aV,m),bu=D(bT,aV,bs),af='<div class="'+ci+'">'+'<div class="'+bn+'"></div>'+"</div>",av='<table cellspacing="0" cellpadding="0" class="'+bC+'">'+"<tbody>"+'<tr class="'+c+'" height="1">'+'<td height="0" class="'+[cw,O].join(U)+'"></td>'+'<td class="'+cg+'" colspan="1">'+'<div class="'+cf+'">'+'<div class="'+K+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+x+'">'+'<td class="'+[cw,cq].join(U)+'"></td>'+"</tr>"+"</tbody>"+"</table>",bj='<td class="'+[cw,G].join(U)+'" data-colnumber="{colNumber}">'+'<div class="'+aC+'"></div>'+"</td>",j='<div class="'+bu+'">{hour}</div>',aw='<table cellspacing="0" cellpadding="0" class="'+cl+'">'+"<tbody>"+'<tr class="'+a6+'"></tr>'+"</tbody>"+"</table>",bk='<th class="'+r+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',au='<td class="'+[r,bY].join(U)+'"></td>',u='<th class="'+[r,bm].join(U)+'">&nbsp;</th>';var cx=b9.Component.create({NAME:aF,ATTRS:{bodyContent:{value:bN},days:{value:1,validator:aG},delegateConfig:{value:{},setter:function(cE){var A=this;return b9.merge({dragConfig:{useShim:false},bubbleTargets:A,container:A.get(aS),nodes:bU+aL,invalid:"input, select, button, a, textarea, "+bU+bl},cE||{});},validator:cz},headerDateFormat:{value:"%d %A",validator:b0},name:{value:cj},hourHeight:{value:52,validator:aG},eventWidth:{value:95,validator:aG},headerTableNode:{valueFn:function(){return b9.Node.create(aw);}},tableNode:{valueFn:function(){return b9.Node.create(av);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:N(bU+G,1),colHeaderDaysNode:N(bU+r,2),headerTableNode:bU+cl,markercellsNode:N(bU+ci,24),tableNode:bU+bC,timesNode:N(bU+bu,24)},EXTENDS:b9.SchedulerView,prototype:{initializer:function(){var A=this;A[ay]=A.get(ay);A[cb]=A.get(cb);A[cy]=A.get(cy);A[a2]=A.get(a2);A[bB]=A.get(bB);A[aj]=A.get(aj);A[bc]=null;A[bq]=A[bB].one(bU+x);A[aY]=A.headerTableNode.one(bU+a6);A[aK]=A[ay].all(bU+aC);A[bi]=A[bB].one(bU+cq);A[bA]=A[bB].one(bU+cg);
A[bG]=A[bB].one(bU+K);},renderUI:function(){var A=this;A[bi].setContent(A[aj]);A[bG].setContent(A[a2]);A[ay].appendTo(A[bq]);A[cb].appendTo(A[aY]);},bindUI:function(){var A=this;A.headerTableNode.delegate("click",b9.bind(A._onClickDaysHeader,A),bU+r);A[bq].delegate("mousedown",b9.bind(A._onMouseDownTableCol,A),bU+cw);A[bq].delegate("mouseup",b9.bind(A._onMouseUpTableCol,A),bU+cw);A[bq].delegate("mousemove",b9.bind(A._onMouseMoveTableCol,A),bU+G);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:tickAlignY",A._dragTickAlignY);A.after("drag:align",A._afterDragAlign);},syncUI:function(){var A=this;cx.superclass.syncUI.apply(this,arguments);A[bA].attr(W,A.get(T));A._setupDragDrop();},syncStdContent:function(){var A=this;A.setStdModContent(b5.BODY,A[bB].getDOM());A.setStdModContent(b5.HEADER,A[cy].getDOM());},calculateEventHeight:function(cF){var cE=this;var A=cE.get(aE);return Math.max(cF*(A/60),A/2);},calculateTop:function(cE){var A=this;return((cE.getHours()*60)+cE.getMinutes()+(cE.getSeconds()/60))*(A.get(aE)/60);},getNextDate:function(){var A=this;var cE=A.get(p).get(bg);return ar.add(cE,ar.DAY,1);},getPrevDate:function(){var A=this;var cE=A.get(p).get(bg);return ar.subtract(cE,ar.DAY,1);},getColumnByDate:function(cE){var A=this;return A[ay].item(A.getDateDaysOffset(cE));},getColumnShimByDate:function(cE){var A=this;return A[aK].item(A.getDateDaysOffset(cE));},getDateByColumn:function(cF){var A=this;var cE=ar.safeClearTime(A.get(p).get(bg));return ar.add(cE,ar.DAY,cF);},getDateDaysOffset:function(cF){var A=this;var cE=ar.safeClearTime(A.get(p).get(bg));return ar.getDayOffset(ar.safeClearTime(cF),cE);},getYCoordTime:function(cH){var cE=this;var A=cE.get(aE);var cI=bP((cH/A).toFixed(2));var cG=Math.floor((cI*100)%100*0.6);var cF=Math.floor(cI);return[cF,cG,0];},plotEvent:function(cF){var A=this;var cG=cF.get(cD);if(cG.size()<2){cF.addPaddingNode();}var cI=cF.get(cD).item(0);var cE=cF.get(cD).item(1);var cH=A.getColumnShimByDate(cF.get(aB));var cJ=A.getColumnShimByDate(cF.get(cc));if(cJ){cJ.append(cI);if(cF.get(ax)){cI.show();}}else{cI.hide();}if(cH){if(cH.compareTo(cJ)||cF.isDayBoundaryEvent()){cE.hide();}else{cH.append(cE);if(cF.get(ax)){cE.show();}}}else{cE.hide();}A.syncEventTopUI(cF);A.syncEventHeightUI(cF);},plotEvents:function(){var A=this;var cE=A.get(p);A[aK].each(function(cH,cG){var cF=cE.getEventsByDay(A.getDateByColumn(cG),true);cH.empty();b9.Array.each(cF,function(cI){if(cI.getHoursDuration()<=24){A.plotEvent(cI);}});A.syncEventsIntersectionUI(cF);});},syncColumnsUI:function(){var A=this;A[ay].each(function(cG,cF){var cE=A.getDateByColumn(cF);cG.toggleClass(P,ar.isToday(cE));});},syncDaysHeaderUI:function(){var cF=this;var cG=cF.get(p).get(bg);var cE=cF.get(bf);var A=cF.get(az);cF[cb].all(k).each(function(cJ,cI){var cH=ar.add(cG,ar.DAY,cI);var cK=b9.DataType.Date.format(cH,{format:cE,locale:A});cJ.toggleClass(aq,ar.isToday(cH));cJ.html(cK);});},syncEventsIntersectionUI:function(cE){var A=this;var cF=A.get(q);A.get(p).flushEvents();b9.Array.each(cE,function(cH){var cJ=A.findEventIntersections(cH,cE);var cI=cJ.length;var cG=(cF/cI);b9.Array.each(cJ,function(cL,cM){var cK=cL.get(cD).item(0);var cO=cG*cM;var cN=cG*1.7;if(cM===(cI-1)){cN=cF-cO;}cK.setStyle(bE,cN+bF);cK.setStyle(aT,cO+bF);var cP=cK.get(Q);if(cP){cP.insert(cK,cM);}cL._filtered=true;});});},syncEventHeightUI:function(cG){var cE=this;var cK=cG.get(aB);var A=cG.get(cc);var cH=ar.clone(A);cH.setHours(24,0,0);var cI=ar.getMinutesOffset(cE.limitDate(cK,cH),A);cG.get(cD).item(0).set(b6,cE.calculateEventHeight(cI));var cF=cG.get(cD).item(1);if(cF.inDoc()){var cJ=ar.getMinutesOffset(cK,ar.toMidnight(cG.getClearEndDate()));cF.set(b6,cE.calculateEventHeight(cJ));}},syncEventTopUI:function(cE){var A=this;cE.get(cD).item(0).setStyle(bw,A.calculateTop(cE.get(cc))+ai);cE.get(cD).item(1).setStyle(bw,0);},calculateYDelta:function(cF,cE){var A=this;return(cE[1]-cF[1])/(A.get(aE)/2)*30;},findEventIntersections:function(cE,cF){var A=this;var cG=[];b9.Array.each(cF,function(cH){if(!cE._filtered&&cE.intersectHours(cH)&&(!cH.isDayOverlapEvent()||cH.isDayBoundaryEvent())){cG.push(cH);}});return cG;},getXYDelta:function(cE){var A=this;var cF=cE.currentTarget.getXY(),cG=[cE.pageX,cE.pageY];return b9.Array.map(cF,function(cI,cH){return(cG[cH]-cI);});},getTickY:function(){var A=this;return bR(Math.ceil(A.get(aE)/2),10);},roundToNearestHour:function(cE,cF){var A=this;cE.setHours(cF[0],bR(cF[1],A.getTickY()),cF[2]);},_afterDragAlign:function(cF){var cE=this;var A=cF.target;if(!cE[V]){cE[V]=A.actXY;}A.actXY[0]=null;},_dragTickAlignX:function(cF){var cE=this;var cI=cE[E];if(cI){var cG=cE[bL];var cH=bP(cF.attr(t))-cE.startColNumber;cE.activeColumnDate=ar.add(cI.get(cc),ar.DAY,cH);var A=ar.clone(cE.activeColumnDate);ar.copyHours(A,cG.get(cc));cG.move(A);cE.plotEvent(cG);}},_dragTickAlignY:function(cF){var cE=this;var cI=cE[E];if(cI){var A=cF.target.get(aR);var cG=cE[bL];var cH=cE.calculateYDelta(cE[V],A.actXY);cG.move(ar.add(cE.activeColumnDate,ar.MINUTES,cH));cE.plotEvent(cG);}},_setupDragDrop:function(){var cE=this;if(!cE[bL]){var cF=cE.get(p);cE[bL]=new (cE.get(cu))({scheduler:cF});cE[bL].removeTarget(cF);cE[bL].get(cD).addClass(bW).hide();}if(!cE.delegate){cE.delegate=new b9.DD.Delegate(cE.get(B));}var A=cE.delegate.dd;A.unplug(b9.Plugin.DDConstrained);A.unplug(b9.Plugin.DDNodeScroll);var cG=cE.bodyNode.get(ad);cG.bottom=Infinity;cG.top=-Infinity;A.plug(b9.Plugin.DDConstrained,{bubbleTargets:cE,constrain:cG,stickY:true,tickY:cE.get(aE)/2});A.plug(b9.Plugin.DDNodeScroll,{node:cE.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(cE){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(cG){var A=this;var cF=A.get(p);if(cG.target.test(k)){var cH=cF.getViewByName(cj);if(cH){var cE=bP(cG.currentTarget.attr(t));cF.set(bg,A.getDateByColumn(cE));cF.set(bO,cH);}}cG.preventDefault();},_onEventDragEnd:function(cE){var A=this;var cG=A[E];if(cG){var cF=A[bL];cF.set(ax,false);cG.set(ax,true);cG.copyDates(cF);
A.get(p).syncEventsUI();}A[V]=null;A[E]=null;},_onEventDragStart:function(cF){var A=this;var cH=A[E]=A.delegate.dd.get(cD).getData(aD);if(cH){var cG=A[bL];cG.copyPropagateAttrValues(cH);A.plotEvent(cG);cH.set(ax,false);A.activeColumnDate=ar.clone(cH.get(cc));var cE=A.getColumnByDate(cH.get(cc));A.startColNumber=cE?bP(cE.attr(t)):0;}},_onMouseDownTableCol:function(cI){var cE=this;var cH=cE.get(p);var cG=cH.get(cB);if(cG&&!cH.get(bM)){cG.hideOverlay();if(cI.target.test(bU+aC)){cE[V]=[cI.pageX,cI.pageY];var cF=bP(cI.currentTarget.attr(t));var A=cE.getDateByColumn(cF);var cJ=cE.getXYDelta(cI);cE.roundToNearestHour(A,cE.getYCoordTime(cJ[1]));var cK=ar.add(A,ar.MINUTES,cG.get(bZ));cG.move(A);cG.set(aB,cK);cE[Z]=A;cE[bb]=cK;cI.halt();}}cE.get(aS).unselectable();},_onMouseMoveTableCol:function(cH){var A=this;var cG=cH.currentTarget;var cE=A.get(p).get(cB);if(A[bc]!==cG){A[bc]=cG;A._dragTickAlignX(A[bc]);}var cF=A[bb];var cI=A[Z];if(cI){var cJ=bR(A.calculateYDelta(A[V],[cH.pageX,cH.pageY]),A.getTickY());if(A._delta!==cJ){if(cJ>0){cE.set(aB,ar.add(cF,ar.MINUTES,cJ));}else{cE.set(cc,ar.add(cI,ar.MINUTES,cJ));}A.plotEvent(cE);A._delta=cJ;}}},_onMouseUpTableCol:function(cG){var A=this;var cF=A.get(p);var cE=cF.get(cB);if(cE&&!cF.get(bM)){if(A[Z]){A.plotEvent(cE);cE.showOverlay();}}A[Z]=null;A[bb]=null;A[V]=null;A.get(aS).selectable();},_valueColDaysNode:function(){var A=this;var cG=A.get(T);var cE=[],cF=0;while(cG--){cE.push(b9.Lang.sub(bj,{colNumber:cF++}));}return b9.NodeList.create(cE.join(bN));},_valueColHeaderDaysNode:function(){var A=this;var cG=A.get(T);var cE=[],cF=0;cE.push(au);while(cG--){cE.push(b9.Lang.sub(bk,{colNumber:cF++}));}cE.push(u);return b9.NodeList.create(cE.join(bN));},_valueMarkercellsNode:function(){var A=this;var cE=[],cF;for(cF=0;cF<=23;cF++){cE.push(af);}return b9.NodeList.create(cE.join(bN));},_valueTimesNode:function(){var A=this;var cG=A.get(al);var cF=[],cE;for(cE=0;cE<=23;cE++){cF.push(bK(j,{hour:cG?ar.toIsoTimeString(cE):ar.toUsTimeString(cE,false,true)}));}return b9.NodeList.create(cF.join(bN));}}});b9.SchedulerDayView=cx;var an=b9.Component.create({NAME:cd,ATTRS:{bodyContent:{value:bN},days:{value:7},name:{value:cp}},EXTENDS:b9.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var cG=A.get(p);var cE=cG.get(bg);var cF=cG.get(ce);cG.set(bg,ar.getFirstDayOfWeek(cE,cF));},getNextDate:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);var cG=A._firstDayOfWeek(cE);return ar.add(cG,ar.WEEK,1);},getPrevDate:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);var cG=A._firstDayOfWeek(cE);return ar.subtract(cG,ar.WEEK,1);},getToday:function(){var A=this;var cE=an.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(cE);},_firstDayOfWeek:function(cF){var A=this;var cG=A.get(p);var cE=cG.get(ce);return ar.getFirstDayOfWeek(cF,cE);}}});b9.SchedulerWeekView=an;var g=D(s),l=D(s,"arrowstop-1-l"),cr=D(s,"arrowstop-1-r"),b3=D(bT,bI,a),n=D(bT,bI,a,aH),b=D(bT,bI,a,am),i=D(bT,bI,aP),a8=D(bT,bI,b7,ah),v=D(bT,bI,b7,cj),cs=D(bT,bI,b7,aV),ao=D(bT,bI,aX),b2=D(bT,bI,bv),ap=D(bT,bI,bv,aP),bH=D(bT,bI,aV,bD),b1=D(bT,bI,aV,bD,ah),a5=D(bT,bI,aV,bD,ah,ak),a0=D(bT,bI,aV,bD,ah,h),cv=D(bT,bI,aV,bD,ah,h,ab),ag=D(bT,bI,aV,bD,ah,h,aH),y=D(bT,bI,aV,bD,ah,h,aO),R=D(bT,bI,aV,bD,ah,h,am),bt=D(bT,bI,aV,bD,a7),d=D(bT,bI,aV,bD,a7,aT),o=D(bT,bI,aV,bD,a7,b4),bV=D(bT,bI,aV,bD,a7,a3),a4=D(bT,bI,aV,bD,aH),bh=D(bT,bI,aV,be),cn=D(bT,bI,aV,be,aH),F='<table cellspacing="0" cellpadding="0" class="'+cs+'">'+"<tbody>"+'<tr class="'+a8+'"></tr>'+"</tbody>"+"</table>",M='<th class="'+v+'"><div>&nbsp;</div></th>',bJ='<div class="'+ao+'"></div>',ck='<div class="'+i+'">'+'<div class="'+ap+'">'+'<div class="'+b2+'" style="top: 0; height: 16.6667%;"></div>'+'<div class="'+b2+'" style="top: 16.6667%; height: 16.6667%;"></div>'+'<div class="'+b2+'" style="top: 33.3333%; height: 16.6667%;"></div>'+'<div class="'+b2+'" style="top: 50%; height: 16.6667%;"></div>'+'<div class="'+b2+'" style="top: 66.6667%; height: 16.6667%;"></div>'+'<div class="'+b2+'" style="top: 83.3333%; height: 16.6667%;"></div>'+"</div>"+"</div>",bz='<table cellspacing="0" cellpadding="0" class="'+bh+'">'+"<tbody>"+"<tr>"+'<td class="'+[b3,n].join(U)+'">&nbsp;</td>'+'<td class="'+b3+'">&nbsp;</td>'+'<td class="'+b3+'">&nbsp;</td>'+'<td class="'+b3+'">&nbsp;</td>'+'<td class="'+b3+'">&nbsp;</td>'+'<td class="'+b3+'">&nbsp;</td>'+'<td class="'+b3+'">&nbsp;</td>'+"</tr>"+"</tbody>"+"</table>",bX='<table cellspacing="0" cellpadding="0" class="'+bH+'">'+"<tbody></tbody>"+"</table>",ch="<tr></tr>",ba='<td class="'+b1+'"><div></div></td>',aa='<span class="'+[g,l].join(U)+'"></span>',I='<span class="'+[g,cr].join(U)+'"></span>';var aA=b9.Component.create({NAME:ct,ATTRS:{bodyContent:{value:bN},name:{value:bI},headerDateFormat:{value:"%a"},navigationDateFormat:{value:"%b %Y"},scrollable:{value:false},monthContainerNode:{valueFn:function(){return b9.Node.create(ck);}},headerTableNode:{valueFn:function(){return b9.Node.create(F);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{tableGridNode:N(bU+bh,7),colHeaderDaysNode:N(bU+v,7),monthContainerNode:bU+i,headerTableNode:bU+cs},EXTENDS:b9.SchedulerView,prototype:{evtDateStack:null,evtDataTableStack:null,initializer:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};A[cb]=A.get(cb);A[cy]=A.get(cy);A[bd]=A.get(bd);A[z]=A.get(z);A[aY]=A.headerTableNode.one(bU+a8);A[aQ]=A[z].all(f);A[e]=A[bd].all(bU+b2);},bindUI:function(){var A=this;var cE=A.get(p).get(cB);cE.on({cancel:b9.bind(A.removeLasso,A),save:b9.bind(A.removeLasso,A)});A[bd].on({mousedown:b9.bind(A._onMouseDownGrid,A),mousemove:b9.bind(A._onMouseMoveGrid,A),mouseup:b9.bind(A._onMouseUpGrid,A)});},renderUI:function(){var A=this;A.colHeaderDaysNode.appendTo(A[aY]);A[e].each(function(cG,cF){var cE=A[z].item(cF);cG.append(cE.toggleClass(cn,(cF===0)));});},adjustCurrentDate:function(){var A=this;var cE=A.get(p);cE.set(bg,A._findCurrentMonthStart());},buildEventsTable:function(cE,cJ){var cP=this;
var cM=4;var cG=ar.clearTime(cP._findCurrentMonthEnd());var cO=ar.clearTime(cP._findCurrentMonthStart());var cL=String(cO.getTime()).concat(cE.getTime()).concat(cJ.getTime());var cK=cP.evtDataTableStack[cL];if(!cK){cK=b9.Node.create(bX);var cN=cK.one(by);var cH=b9.Node.create(ch);cP.loopDates(cE,cJ,function(cR,cQ){var cS=b9.Node.create(ba);cS.addClass(a0).toggleClass(ag,(cQ===0)).toggleClass(R,ar.isToday(cR)).toggleClass(y,ar.isToday(ar.subtract(cR,ar.DAY,1))).toggleClass(cv,ar.isToday(ar.subtract(cR,ar.WEEK,1)));if(ar.before(cR,cO)||ar.after(cR,cG)){cS.addClass(a5);}cH.append(cS.setContent(cR.getDate()));});cN.append(cH);var A;for(A=0;A<cM;A++){var cI=0;var cF=b9.Node.create(ch);cP.loopDates(cE,cJ,function(cY,cV){if(cI<=cV){var cZ=cP.getIntersectEvents(cY),cW=cZ[A];var cS=b9.Node.create(ba);if(cW){var cR=cW.get(cc);if(!(ar.before(cR,cE)&&ar.getDayOffset(cY,cE)>0)){var cT=cW.get(cD);var cX=Math.floor(ar.getDayOffset(cY,ar.getFirstDayOfWeek(cR))/aM);if(cT.size()<cX+1){cW.addPaddingNode();}var cU=cT.item(cX);cU.setStyles({height:"auto",left:0,top:0,width:"auto"});var cQ=cS.one(X);cU.appendTo(cQ);var c0=cP._getEvtSplitInfo(cW,cY,cE,cJ);cS.attr(W,c0.colspan);cQ.addClass(bt);if(c0.left){cQ.addClass(d).prepend(aa);}if(c0.right){cQ.addClass(bV).append(I);}if(cW.get(co)){cQ.addClass(o);}cI+=c0.colspan;}}else{cI++;}cF.append(cS);}});cN.append(cF);}cP.evtDataTableStack[cL]=cK;}return cK;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};},getIntersectEvents:function(cE){var A=this;var cG=A.get(p);var cF=String(cE.getTime());if(!A.evtDateStack[cF]){A.evtDateStack[cF]=cG.getIntersectEvents(cE);}return A.evtDateStack[cF];},getNextDate:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);return ar.add(cE,ar.MONTH,1);},getPrevDate:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);return ar.subtract(cE,ar.MONTH,1);},loopDates:function(A,cG,cJ,cK,cI){var cL=this;var cE=ar.clone(A);var cF=cG.getTime(),cH;for(cH=0;cE.getTime()<=cF;cH++){cJ.apply(cL,[cE,cH]);cE=ar.add(cE,(cK||ar.DAY),(cI||1));}},plotEvents:function(){var cE=this;var cF=cE._findCurrentMonthStart();var A=ar.safeClearTime(cE._findFirstDayOfWeek(cF));cE.flushViewCache();cE.bodyNode.all(bU+bH).remove();cE[e].each(function(cJ,cH){var cG=ar.add(A,ar.WEEK,cH);var cK=ar.add(cG,ar.DAY,aM-1);var cI=cE.buildEventsTable(cG,cK);if(cH===0){cI.addClass(a4);}cJ.append(cI);});},removeLasso:function(){var A=this;if(A.lasso){A.lasso.remove();}},renderLasso:function(cK,cE){var cQ=this;var cH=cK;var cJ=cE;if(cK[1]>cE[1]){cH=cE;cJ=cK;}var cR=cH[0],cM=cH[1],cF=cJ[0],A=cJ[1];cQ.removeLasso();cQ.lasso=b9.NodeList.create();for(var cG=cM;cG<=A;cG++){var cI=cQ.gridCellHeight,cP=cQ.gridCellWidth,cN=0,cL=(cI*cG);if(cG===cM){if(cM===A){cN+=Math.min(cR,cF)*cP;cP*=Math.abs(cF-cR)+1;}else{cN+=cR*cP;cP*=aM-cR;}}else{if(cG===A){cP*=cF+1;}else{cP*=aM;}}var cO=b9.Node.create(bJ);cQ.lasso.push(cO);cQ[bd].append(cO);cO.sizeTo(cP,cI);cO.setXY(cQ._offsetXY([cN,cL],1));}},syncDaysHeaderUI:function(){var cF=this;var cI=cF.get(p);var cG=cI.get(bg);var cE=cF.get(bf);var A=cF.get(az);var cH=cF._findFirstDayOfWeek(cG);cF.colHeaderDaysNode.all(X).each(function(cL,cK){var cJ=ar.add(cH,ar.DAY,cK);var cM=b9.DataType.Date.format(cJ,{format:cE,locale:A});cL.html(cM);});},syncGridUI:function(){var cL=this;var cF=cL.getToday();var cE=cL.get(p);cL[aQ].removeClass(b);if(ar.isSameMonth(cF,cE.get(bg))){var A=cE.get(ce);var cH=cL._findCurrentMonthStart();var cJ=cL._findFirstDayOfWeek(cF);var cG=ar.getWeekNumber(cF,A)-ar.getWeekNumber(cH,A);var cK=(cF.getDate()-cJ.getDate());var cI=cL[z].item(cG).all(f).item(cK);if(cI){cI.addClass(b);}}},syncStdContent:function(){var A=this;A.setStdModContent(b5.BODY,A[bd].getDOM());A.setStdModContent(b5.HEADER,A[cy].getDOM());},_findCurrentMonthEnd:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);return ar.findMonthEnd(cE);},_findCurrentMonthStart:function(){var A=this;var cF=A.get(p);var cE=cF.get(bg);return ar.findMonthStart(cE);},_findFirstDayOfWeek:function(cF){var A=this;var cG=A.get(p);var cE=cG.get(ce);return ar.getFirstDayOfWeek(cF,cE);},_getEvtLabel:function(cF){var cE=this;var cG=cF.get(aB);var A=cF.get(cc);return[A.getHours(),bQ,cG.getHours(),U,cF.get(aN)].join(bN);},_getEvtSplitInfo:function(cJ,cM,A,cG){var cK=this;var cE=cJ.getClearStartDate();var cH=cJ.getClearEndDate();var cI=ar.getFirstDayOfWeek(cM);var cL=cG.getDate()-cM.getDate();var cF={colspan:Math.min(ar.getDayOffset(cH,cM),cL)+1,left:ar.before(cE,A),right:ar.after(cH,cG)};return cF;},_getPositionDate:function(cF){var cE=this;var cG=cE._findCurrentMonthStart();var A=ar.safeClearTime(cE._findFirstDayOfWeek(cG));return ar.add(A,ar.DAY,cE._getCellIndex(cF));},_getCellIndex:function(cE){var A=this;return cE[1]*aM+cE[0];},_offsetXY:function(cG,cF){var A=this;var cE=A[bd].getXY();return[cG[0]+cE[0]*cF,cG[1]+cE[1]*cF];},_onMouseDownGrid:function(cG){var cE=this;var cH=cG.target;if(cH.test([bU+b3,bU+b1].join(bo))){cE._recording=true;var A=cE[z].item(0).all(f).item(0);cE.gridCellHeight=cE[bd].get(b6)/6;cE.gridCellWidth=cE[bd].get(b8)/aM;var cF=cE._offsetXY([cG.pageX,cG.pageY],-1);cE.lassoStartPosition=cE.lassoLastPosition=cE._findPosition(cF);cE.renderLasso(cE.lassoStartPosition,cE.lassoLastPosition);cE[bd].unselectable();}},_onMouseMoveGrid:function(cH){var cE=this;var cI=cH.currentTarget;var cF=cE._offsetXY([cH.pageX,cH.pageY],-1);var cG=cE.lassoLastPosition||cE.lassoStartPosition;var A=cE._findPosition(cF);var cJ=cG&&((A[0]!==cG[0])||(A[1]!==cG[1]));if(cJ&&cE._recording){cE.lassoLastPosition=A;cE.renderLasso(cE.lassoStartPosition,A);}},_onMouseUpGrid:function(cH){var cE=this;var cG=cE.get(p);var cF=cG.get(cB);if(cF&&cE._recording&&!cG.get(bM)){var A=cE._getPositionDate(cE.lassoStartPosition);var cI=cE._getPositionDate(cE.lassoLastPosition);cF.set(cc,Math.min(A,cI));cF.set(aB,Math.max(A,cI));cF.showOverlay([cH.pageX,cH.pageY]);cE._recording=false;}},_findPosition:function(cG){var A=this;var cF=Math.floor(cG[0]/A.gridCellWidth);var cE=Math.floor(cG[1]/A.gridCellHeight);
return[cF,cE];},_uiSetCurrentDate:function(cE){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;return A._valueNodeList(aM,M);},_valueTableGridNode:function(){var A=this;return A._valueNodeList(aM,bz);},_valueNodeList:function(cG,cF){var A=this;var cE=[];while(cG--){cE.push(cF);}return b9.NodeList.create(cE.join(bN));}}});b9.SchedulerMonthView=aA;},"@VERSION@",{skinnable:true,requires:["aui-scheduler-event","aui-calendar","aui-button-item","dd-drag","dd-delegate","dd-drop","dd-constrain"]});