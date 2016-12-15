/*!
 * -----------
 * ITPDB®-Data
 * -----------
 * Data of ITPDB — A manually curated dedicated ion transport proteins database.
 * _____________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * _____________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * _____________________________________________________________________________
 *
 * @date      : 10-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : package.json
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * _____________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "ITPDB®-Data".
 * _____________________________________________________________________________
 */

// To load required Node module.
// -----------------------------
var fs    = require('fs');

///--------------------------
// A smart stripBOM function.
///----------- 01 -----------
function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

// To get asset(s) information.
///----------------------------
var pkg   = JSON.parse(stripBOM(fs.readFileSync('./package.json', {
  encoding: "utf8"
})));

// To get build system(s) information.
///-----------------------------------
var seed  = JSON.parse(stripBOM(fs.readFileSync('./seed.json', {
  encoding: "utf8"
})));

///-------------------
// An object literals.
///-------------------
var version = {
  "pkg"     : pkg.version,
  "seed"    : seed.version
};

// Exposing — Package and SEED™.
module.exports = version;
