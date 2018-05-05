function DOM(elements){
  this.element = document.querySelectorAll(elements);
 }

 DOM.prototype.on = function on(eventType, callback) {
   Array.prototype.forEach.call(this.element, function(element) {
     element.addEventListener(eventType, callback, false);
   })
 };

 DOM.prototype.off = function off(eventType, callback) {
   Array.prototype.forEach.call(this.element, function(element) {
     element.removeEventListener(eventType, callback, false);
   })
 };

 DOM.prototype.get = function get() {
   return this.element;
 };
 DOM.prototype.value = function value(){
   return this.get()[0].value;
 }
 DOM.prototype.clear = function value(){
  return this.get()[0].value = '';
}
DOM.prototype.focked = function focked(){
  return this.focus();
}


 DOM.prototype.isArray = function isArray(dom){
   return Object.prototype.toString.call(dom) === '[object Array]';
 };

 DOM.prototype.isObject = function isObject(dom){
   return Object.prototype.toString.call(dom) === '[object Object]'
 };

 DOM.prototype.isFunction = function isFunction(dom) {
   return Object.prototype.toString.call(dom) === '[object Functon]'
 };

 DOM.prototype.isString = function isString(dom) {
   return Object.prototype.toString.call(dom) === '[object String]'
 };

 DOM.prototype.isBoolean = function isBoolean(dom) {
   return Object.prototype.toString.call(dom) === '[object Boolean]'
 };

 DOM.prototype.isNull= function isNull(dom) {
   return Object.prototype.toString.call(dom) === '[object Null]'|| Object.prototype.toString.call(dom) === '[object Undefined]'
 };
 var dom = new DOM();



 // forEach, map, filter, reduce, reduceRight, every e some

 DOM.prototype.forEach = function forEach() {
   return Array.prototype.forEach.apply( this.element, arguments)
 }

 DOM.prototype.map = function map() {
   return Array.prototype.map.apply( this.element, arguments)
 }

 DOM.prototype.filter = function filter() {
   return Array.prototype.filter.apply( this.element, arguments)
 }

 DOM.prototype.reduce = function reduce() {
   return Array.prototype.reduce.apply( this.element, arguments)
 }

 DOM.prototype.reduceRight = function reduceRight() {
   return Array.prototype.reduceRight.apply( this.element, arguments)
 }

 DOM.prototype.every = function every() {
   return Array.prototype.every.apply( this.element, arguments)
 }

 DOM.prototype.some = function some() {
   return Array.prototype.some.apply( this.element, arguments)
 }

window.DOM = DOM;
