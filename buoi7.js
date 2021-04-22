bài 1
for ( let i = 0; i <= 1000; i++){
if (i % 2 == 0){
console.log(i + ' là số chẵn')
}
else {
console.log(i + ' là số lẻ')
}
}

bài 2
let a = prompt('new number')
let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
array.push(a);
console.log(array)

bài 3
let a = prompt('nhập a')
let b = prompt('nhập b')
let c = prompt('nhập c')
let d = prompt('nhập d')
if ( a==b==c==d ){
console.log('hình vuông')
}
else if (a==c, b==d, a!=b){
console.log('hình chữ nhật')
}
else {
console.log('tứ giác')
}

bài 4
let a = prompt('nhập năm')
if (a % 4 == 0){
console.log('năm nhuận')
}
else {
console.log('năm không nhuận')
}

bài 5
let x = prompt('nhập x')
let y = prompt('Nhập y')
if (x>0 && y>0){
console.log('góc thứ 1')
}
else if (x<0 && y>0){
console.log('góc thứ 2')
}
else if (x,0 && y<0){
console.log('góc thứ 3')
}
else if (x==0 && y==0){
console.log('gốc tọa độ')
}
else if (x==0 && y!=0){
console.log('trục tung')
}
else if (x!=0 && y==0){
console.log('trục hoành')
}
else {
console.log('góc thứ 4')
} 

bài bonus
let a = prompt('nhập a')
let b = prompt('nhập b')
let c = prompt('nhập c')
let d = b*b - 4*a*c
if (a == 0){
alert('Nhập lại')
}
else if (d < 0){
console.log('vô nghiệm')
}
else if (d == 0){
console.log('x1 = x2 = ' + -b/2*a)
}
else {
console.log('x1 = ' +(-b + Math.sqrt(d))/2*a + ', x2 = ' + (-b - Math.sqrt(d))/2*a)
}