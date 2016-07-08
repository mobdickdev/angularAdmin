/**
 * angular-morris-chart provides morris.js directives for angular 1.x
 * 
 * Software licensed under MIT, maintained by @stewones. Feel free to open an issue or make a PR.
 * Check out documentation and full list of contributors in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";!function(){angular.module("angular.morris-chart",[]).factory("morrisChartService",["$injector",function(e){var a={keyToAttr:function(e,a){return e+a.substring(0,1).toUpperCase()+a.substring(1)},populateScopeDefinition:function(e,r,t,o){return angular.forEach(t,function(t){e[a.keyToAttr(r,t)]=t===o?"@":"="}),e},populateOptions:function(e,r,t,o){return angular.forEach(r,function(r){var n=a.keyToAttr(t,r);o.hasOwnProperty(n)&&"undefined"!=typeof o[n]&&(e[r]=o[n])}),e},processFilterOptions:function(a,r){angular.forEach(a,function(a){if("string"==typeof r[a]&&e.has(r[a]+"Filter")){var t=e.get(r[a]+"Filter");r[a]=function(e){return t.call(this,e)}}})}};return a}])}(),function(){angular.module("angular.morris-chart").directive("areaChart",["morrisChartService",function(e){var a=["data","xkey","ykeys","labels","lineColors","lineWidth","pointSize","pointFillColors","pointStrokeColors","ymax","ymin","smooth","hideHover","hoverCallback","parseTime","units","postUnits","preUnits","dateFormat","xLabels","xLabelFormat","xLabelAngle","yLabelFormat","goals","goalStrokeWidth","goalLineColors","events","eventStrokeWidth","eventLineColors","continuousLine","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","fillOpacity","resize","behaveLikeLine"];return{restrict:"A",scope:e.populateScopeDefinition({lineColors:"="},"area",a,"xkey"),link:function(r,t){r.$watch("areaData",function(){if(r.areaData)if("string"==typeof r.areaData&&(r.areaData=JSON.parse(r.areaData)),"string"==typeof r.areaYkeys&&(r.areaYkeys=JSON.parse(r.areaYkeys)),"string"==typeof r.areaLabels&&(r.areaLabels=JSON.parse(r.areaLabels)),"string"==typeof r.lineColors&&(r.lineColors=JSON.parse(r.lineColors)),r.areaInstance)r.areaInstance.setData(r.areaData);else{var o=e.populateOptions({element:t,lineColors:r.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]},a,"area",r);e.processFilterOptions(["dateFormat","xLabelFormat","yLabelFormat"],o),r.areaInstance=new Morris.Area(o)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("barChart",["morrisChartService",function(e){var a=["data","xkey","ykeys","labels","barColors","stacked","hideHover","hoverCallback","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","resize","ymax","ymin","goals","goalStrokeWidth","goalLineColors","yLabelAlign","parseTime","postUnits","preUnits","xLabelAngle","yLabelFormat","events","eventStrokeWidth","eventLineColors"];return{restrict:"A",scope:e.populateScopeDefinition({barColors:"=",barX:"@",barY:"="},"bar",a),link:function(r,t){r.$watch("barData",function(){if(r.barData)if("string"==typeof r.barY&&(r.barY=JSON.parse(r.barY)),"string"==typeof r.barLabels&&(r.barLabels=JSON.parse(r.barLabels)),"string"==typeof r.barData&&(r.barData=JSON.parse(r.barData)),"string"==typeof r.barColors&&(r.barColors=JSON.parse(r.barColors)),"string"==typeof r.barStacked&&(r.barStacked=JSON.parse(r.barStacked)),"string"==typeof r.barResize&&(r.barResize=JSON.parse(r.barResize)),r.barInstance)r.barInstance.setData(r.barData);else{var o=e.populateOptions({element:t,barColors:r.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],stacked:!1,resize:!1,xkey:r.barX,ykeys:r.barY,xLabelMargin:2},a,"bar",r);r.barInstance=new Morris.Bar(o)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("donutChart",["morrisChartService",function(e){var a=["data","colors","formatter","resize","backgroundColor","labelColor"];return{restrict:"A",scope:e.populateScopeDefinition({},"donut",a),link:function(r,t){r.$watch("donutData",function(){if(r.donutData)if("string"==typeof r.donutData&&(r.donutData=JSON.parse(r.donutData)),"string"==typeof r.donutColors&&(r.donutColors=JSON.parse(r.donutColors)),r.donutInstance)r.donutInstance.setData(r.donutData);else{var o=e.populateOptions({element:t,colors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]},a,"donut",r);e.processFilterOptions(["formatter"],o),r.donutInstance=new Morris.Donut(o)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("lineChart",["morrisChartService",function(e){var a=["data","xkey","ykeys","labels","lineColors","lineWidth","pointSize","pointFillColors","pointStrokeColors","ymax","ymin","smooth","hideHover","hoverCallback","parseTime","units","postUnits","preUnits","dateFormat","xLabels","xLabelFormat","xLabelAngle","yLabelFormat","goals","goalStrokeWidth","goalLineColors","events","eventStrokeWidth","eventLineColors","continuousLine","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","fillOpacity","resize"];return{restrict:"A",scope:e.populateScopeDefinition({lineColors:"=",parseTime:"="},"line",a,"xkey"),link:function(r,t){r.$watch("lineData",function(){if(r.lineData)if("string"==typeof r.lineData&&(r.lineData=JSON.parse(r.lineData)),"string"==typeof r.lineYkeys&&(r.lineYkeys=JSON.parse(r.lineYkeys)),"string"==typeof r.lineYkeys&&(r.lineYkeys=JSON.parse(r.lineYkeys)),"string"==typeof r.lineLabels&&(r.lineLabels=JSON.parse(r.lineLabels)),"string"==typeof r.lineColors&&(r.lineColors=JSON.parse(r.lineColors)),"boolean"==typeof r.parseTime&&(r.parseTime=JSON.parse(r.parseTime)),r.lineInstance)r.lineInstance.options.xkey=r.lineXkey,r.lineInstance.options.ykeys=r.lineYkeys,r.lineInstance.options.labels=r.lineLabels,r.lineInstance.options.parseTime=r.parseTime,r.lineInstance.options.lineColors=r.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],r.lineInstance.setData(r.lineData);else{var o=e.populateOptions({element:t,lineColors:r.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],parseTime:r.parseTime},a,"line",r);e.processFilterOptions(["dateFormat","xLabelFormat","yLabelFormat"],o),r.lineInstance=new Morris.Line(o)}})}}}])}();