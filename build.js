var uglify = require("uglify-js");
var fs = require("fs");

["acorn", "acorn_loose", "walk"].forEach(function (filename) {
  var result = uglify.minify("dist/" + filename + ".js", {
    mangle: true
  });

  fs.writeFileSync("dist/" + filename + ".min.js", result.code);
});