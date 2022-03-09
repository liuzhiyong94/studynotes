* map 遍历会出现多余的逗号，数组中的逗号被一起转换了。
* 循环中需要返回值时使用 map。

```javascript
arr.map(function(item){
    return '<div></div>'
}).join('')

```