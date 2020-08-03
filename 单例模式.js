

// var Person = function (name) {
//     this.name = name;
//     this.instance = null
// }
// Person.prototype.getName = function () {
//     console.log(this.name)
// }
// Person.getInstance = function (name) {
//     if (!this.instance) {
//         this.instance = new Person(name);
//     }
//     return this.instance
// }
// var a = Person.getInstance('小红');
// var b = Person.getInstance('小明');
// console.log(a === b); // true


// var Person = function(name) {
//     this.name = name
// }
// Person.prototype.getName = function() {
//     return this.name
// }
// Person.getInstance = (function() {
//     var instance = null
//     return function(name) {
//         if (!instance) {
//             instance = new Person(name)
//         }
//         return instance
//     }
// })()
// var a = Person.getInstance('小红');
// var b = Person.getInstance('小明');
// console.log(a === b); // true


var CreateDiv = (function () {
    var instance;
    var CreateDiv = function (html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };
    CreateDiv.prototype.init = function () {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();
var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');