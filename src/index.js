
exports.min = function min (array) {
   return Math.min.apply(null, array);
  return 0;
}

exports.max = function max (array) {
    return Math.max.apply(null, array);
  return 0;
}

exports.avg = function avg (array) {
    return array.reduce((sum, current) => sum+current, 0) /array.length ;
  return 0;
}
