/**
 * tien to va hau to
 * prefix & postfix
 */

var a = 6;

/**
 * Tiền tố
 * Việc 1 : +1 cho a , a = 6 --> a = 7
 * Việc 2 : trả về giá trị cho a sau khi + 1
 */
var output = ++a;

console.log('output : ', output); // in ra output = 7 va gia tri a = 7
console.log('a : ',a);
/**
 * Hậu tố
 * Việc 1 : gán giá trị a cho output : output = 7
 * Việc 2 : trừ 1 cho a : a = 7 - 1 = 6
 * Việc 3 : trả về giá trị cho a (chứ không phải trả về giá trị cho output)
 */

output = a--;
console.log('output : ', output);
console.log('a : ',a);

var number = 5;

output = number++ + --number;
/**
 * Việc 1 : gán ouput = 5, lúc này giá trị của number vẫn đang là 5
 * Việc 2 : cộng 1 cho number : number = 6 phép tính sẽ trở thành : 5 + --6
 * Việc 3 thực hiện phép cộng 5 + --6 = 10
 * Việc 4 : trả về giá trị cho output = 10
 */

console.log('output : ',output);
