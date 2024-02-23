// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love Pakistan"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.displayShirtInfo = function () {
        console.log("Size: ".concat(this.size, ", Message: ").concat(this.message));
    };
    return Shirt;
}());
function make_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I love Karachi"; }
    return new Shirt(size, message);
}
// Large shirt with  message
var largeShirt = make_shirt();
largeShirt.displayShirtInfo();
// Medium shirt with  message
var mediumShirt = make_shirt("medium");
mediumShirt.displayShirtInfo();
// Custom shirt with message
var customShirt = make_shirt("small", "Paksitan Zindabad");
customShirt.displayShirtInfo();
