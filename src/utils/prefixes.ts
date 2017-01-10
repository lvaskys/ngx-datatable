import { camelCase } from './camel-case';

let cache = {};

// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (function () {


  return {  dom:"WebKit",
			lowercase:"webkit",
			css:"-webkit-",
			js:"Webkit" };

})();

export function getVendorPrefixedName(property: string) {
  const name = camelCase(property);

  return cache[name];
}
