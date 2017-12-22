
// var num1 = 55; //整数
// var num2 = 3.1415926; //浮点型
//
// var num3 = 070; //八进制的56
// var num4 = 079; //无效的八进制，解析为79
//
// var num5 = 0xA; //十六进制的10
// var num6 = 0x1f; //十六进制的31
//
// var name1 = "hello";
// var name2 = 'world';
// var name3 = 'hi" // 语法错误


// var result1 = 5+5; //两个数值相加
// alert(result1); // 10
//
// var result2 = 5 + "5"; //数值和字符串相加
// alert(result2); //"55"
//
// //忽视加法操作中的数据类型是常见的一个错误
// var num1 = 5;
// var num2 = 10;
// var message = "The sum of 5 and 10 is" + num1 + num2;
// alert(message);  // "The sum of 5 and 10 is 510"
//    var i = 10;
//      ++i; // 11  先加后运算
//      i++; // 10  先运算后加

// var result1 = 5-true; // 4, 因为true被转换成了 1
// var result2 = NaN-1; // NaN
// var result1 = 5-2; // 3
// var result1 = 5-"2"; //3, 因为"2"被转换成了2
// var result1 = 5-" "; // 5, 因为" "被转换成了0
// var result1 = 5-null; //5, 因为null被转换成了0

// var num1 = ("55" == 55 ); // true,因为转换后相等
// var num2 = ("55" === 55 ); // false,因为不同的数据类型不相等
//
// var num1 = ("55" != 55 ); // false,因为转换后相等
// var num2 = ("55" !== 55 ); // true,因为不同的数据类型不相等

  function number(num) {
      return num+100;
  }
  function number(num) {
      return num+200;
  }
  var result = number(100); //300，覆盖前面的函数

  var sum1 = sum;
  alert(sum1(10,10)); //20

  sum = null;
  alert(sum1(10,10)); //20




  var sum = function (num1,num2) {
      return num1+num2
  }; //定义了变量sum并将其初始化为一个函数。注意末尾的分号






