const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delHTML = () => {
  return del(conf.paths.html.del);
}

exports.mod = delHTML;