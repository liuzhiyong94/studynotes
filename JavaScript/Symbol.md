```javascript
Symbol.for("bar") === Symbol.for("bar")
// true
Symbol("bar") === Symbol("bar")
// false
```

* symbol属性值对应的值是唯一的
* for/in for/of 遍历时不会遍历symbol属性