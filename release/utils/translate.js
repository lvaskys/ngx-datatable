"use strict";
var prefixes_1 = require('./prefixes');
var camel_case_1 = require('./camel-case');
// browser detection and prefixing tools
var transform = prefixes_1.getVendorPrefixedName('transform');
var backfaceVisibility = prefixes_1.getVendorPrefixedName('backfaceVisibility');
var hasCSSTransforms = !!prefixes_1.getVendorPrefixedName('transform');
var hasCSS3DTransforms = !!prefixes_1.getVendorPrefixedName('perspective');
var ua = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36";
var isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);
function translateXY(styles, x, y) {
    if (hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(" + x + "px, " + y + "px, 0)";
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camel_case_1.camelCase(transform)] = "translate(" + x + "px, " + y + "px)";
        }
    }
    else {
        styles.top = y + "px";
        styles.left = x + "px";
    }
}
exports.translateXY = translateXY;
//# sourceMappingURL=translate.js.map