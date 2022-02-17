* Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组（二维数组）

```javascript
const obj = { foo: 'bar', baz: 'abc' }; 
console.log(Object.entries(obj));  // [['foo', 'bar'], ['baz', 'abc']]
```

* 将 Object 转化为 Map

```javascript
const obj2 = { foo: 'bar', baz: 'abc' }; 
console.log(Object.entries(obj2));  // [['foo', 'bar'], ['baz', 'abc']]
const map = new Map(Object.entries(obj2)); 
console.log(map); // Map {'foo' => 'bar', 'baz' => 'abc'}
```