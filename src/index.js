
exports.min = function min (array) {
if( Array.isArray(array) && array.length !== 0){
   return Math.min.apply(null, array);
}
  return 0;
   
}

exports.max = function max (array) {
    if( Array.isArray(array) && array.length !== 0){
    return Math.max.apply(null, array);
    }
  return 0;
}

exports.avg = function avg (array) {
    if( Array.isArray(array) && array.length !== 0){
    return array.reduce((sum, current) => sum+current, 0) /array.length ;
    }
  return 0;
}
