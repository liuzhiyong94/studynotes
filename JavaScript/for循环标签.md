* 通过标签可以在for循环中退出指定的循环

```javascript
let num = 0;
outermost: 
for (let i = 0; i < 10; i++) {
    inners:
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break inners;
        }
        num++;
    }
}
console.log(num)    //55
```