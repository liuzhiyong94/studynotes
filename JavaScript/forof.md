* 能够被 forof 正常遍历的，都需要实现一个遍历器 Iterator。数组，字符串，Set，Map结构内置 Iterator ，它们的原型中都有一个 Symbol.iterator 方法，所以可以实现 forof 遍历，而对象没有实现这个接口，所以不能被 forof 遍历。

* forof 每循环一次都会调用可迭代对象的 next() 方法。

* 迭代器：一种特殊对象，具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个 next() 方法，每次调用返回一个结果对象。结果对象有两个属性：value 表示下一个将要返回的值，done 没有更多可返回数据时为 true 。

* 可迭代对象：具有symbol.iterator属性的对象就是可迭代的对象。

```javascript
function caeateIterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = (i >= items.length)
            var value = !done ? items[i++] : undefined
            return {
                value: value,
                done: done
            }
        }
    }
}
```

* 生成器：一种返回迭代器的函数。

```javascript
let state = function *(){
    while(1){
        yield 'A';
        yield 'B';
        yield 'C';
    }
}
let status = state();
console.log(status.next().value);//'A'
console.log(status.next().value);//'B'
console.log(status.next().value);//'C'
console.log(status.next().value);//'A'
console.log(status.next().value);//'B'
```

* 如何遍历一个对象？

```javascript
var o = {}
for(let [k , v] of Object.entries(o)){
    console.log(k)
    console.log(v)
}
// Object.keys(),Object.values(),Object.entries()返回的是可迭代的数组
```