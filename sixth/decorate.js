function coffee() {
    console.log('喝咖啡');
}
//甜咖啡
function sweetCoffee() {
    console.log('加糖');
    coffee();
}
function sweetMilkCoffee() {
    console.log('加牛奶');
    sweetCoffee();
}
sweetMilkCoffee();
//调用我们包装出来的函数，实际上还是执行以前的函数