* 使用 html-pdf 将页面转成pdf格式，弹性布局的css样式不支持。可以将弹性布局改为浮动。

```css
div {
    display: flex;
}
.child {
    flex: 1;
}
```

* 使用方法

```javascript
const fs = require("fs")
const htmlpdf = require('html-pdf');

var htmlstr = "<p>Test</p>"
fs.writeFile(filepath, htmlstr, (err) => {
    console.log('err:', err);
    var options = { 
        format: 'Letter'
    };
    var htmlBuffer = fs.readFileSync(filepath, 'utf-8')
    htmlpdf.create(htmlBuffer, options).toFile('out.pdf'), function (err, res) {
        console.log(err);
        console.log(res);
    });
})
```