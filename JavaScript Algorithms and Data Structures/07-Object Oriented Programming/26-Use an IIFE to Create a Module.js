// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

/* BEFORE
let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};
let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};
*/

// AFTER
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        },
    }
})();