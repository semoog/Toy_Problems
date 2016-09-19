// write fn that takes two arrays and returns
// array with their intersection

function arrIntersect (arr1, arr2) {
	var resultArr = arr1.filter(function(elem, index, arr){
		return arr2.indexOf(elem) >= 0 ? elem : 0;
	});
	return resultArr;
}

arrIntersect([1, 4, 2, 0, 5, 6], [3, 2, 4, 5]);
