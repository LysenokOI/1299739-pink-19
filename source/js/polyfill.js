import { getPolyfillString } from 'polyfill-library';

const polyfillBundle = getPolyfillString({
  uaString: 'Mozilla/5.0 (Windows; U; MSIE 11.0; Windows NT 6.0; en-US)',
  minify: true,
  features: {
    'es6': { flags: ['gated'] }
  }
}).then(function (bundleString) {
  console.log(bundleString);
});
