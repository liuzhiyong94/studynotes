


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

let num = 0;
outermost:
for (let i = 0; i < 10; i++) {
    inners:
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if (k == 5) {
                break outermost
            }
            num++;
        }
    }
}
console.log(num)    //55