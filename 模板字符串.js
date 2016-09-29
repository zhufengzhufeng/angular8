var name = '珠峰';
var age = 8;
console.log(`今年${name}${age}岁了`);
var str = '"<ul>"';
str+= '<li>'+name+'</li>';
str+= '<li>'+age+'</li>';
str+=  '</ul>';

var str =`
    <ul>
        <li>${name}</li>
        <li>${age}</li>
    </ul>
`
console.log(str);
