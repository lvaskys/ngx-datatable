"use strict";
var camel_case_1 = require('./camel-case');
var cache = {};
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var prefix = (function () {
    return { dom: "WebKit",
        lowercase: "webkit",
        css: "-webkit-",
        js: "Webkit" };
})();
function getVendorPrefixedName(property) {
    var name = camel_case_1.camelCase(property);
    return cache[name];
}
exports.getVendorPrefixedName = getVendorPrefixedName;
//# sourceMappingURL=prefixes.js.map