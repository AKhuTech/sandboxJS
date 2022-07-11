let classNames = [
	"header", "menu", "menu-item", "menu-item", "menu-item", "footer", "menu", "link", "link", "link", "link"];
  
function uniqueSortedClassNames(classNames){
  if (classNames.length){
    let result = {};

    classNames.forEach((item, index) => {
    	result[item] ? result[item] += 1 : result[item] = 1;
    });
    let resultArray = Object.entries(result);
    let  final = resultArray.sort((a, b) => {
        if (a[1] < b[1]){
            return 1   
        }
        if(a[1] > b[1]){
            return -1;
        }
        return 0;
    });
    let finalArray = [];
    final.forEach(item => (finalArray.push(item[0])));
    return finalArray;
  }
  
  return null;

}

console.log(uniqueSortedClassNames(classNames));

//result = ["link", "menu-item", "menu", "header", "footer"]
