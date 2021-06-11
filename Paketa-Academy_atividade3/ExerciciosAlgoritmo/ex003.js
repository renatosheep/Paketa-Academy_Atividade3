let lista = [0, 3, 99, 44, -1]
let listb = [4, 6, 9, 10, -349]
let listc = [1, 1, 1, 99, 37]
let listd = [...lista, ...listb, ...listc];

listd.sort (function(a,b) {
    return b - a;
})

console.log(listd)

