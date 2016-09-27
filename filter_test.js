var arr = [{id:1},{id:2},{id:3},{id:2}];
var newArr = arr.filter(function (item) {
    return item.id !=2; //将id不等于的返回，组成一个新的数组
});
console.log(newArr);
//map  find  forEach
var obj = arr.find(function (item) {
    return item.id == 2; //如果为true则返回这一项，找到则返回
});
console.log(obj);
//map用来修改
var newArr = arr.map(function (item) {
    if(item.id ==1){
        return {id:100}
    }else{
        return item
    }
});
console.log(newArr);




