import { getVendorPrefixedName } from './prefixes';
import { camelCase } from './camel-case';

// browser detection and prefixing tools
const transform = getVendorPrefixedName('transform');
const backfaceVisibility = getVendorPrefixedName('backfaceVisibility');
const hasCSSTransforms = !!getVendorPrefixedName('transform');
const hasCSS3DTransforms = !!getVendorPrefixedName('perspective');
const ua = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36";
const isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);

export function translateXY(styles: any, x: number, y: number) {
  if (hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
    }
  } else {
    styles.top = `${y}px`;
    styles.left = `${x}px`;
  }
}
