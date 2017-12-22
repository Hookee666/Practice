/*
矩阵乘法简单算法
 */
var array1 = [[1,2,3],[4,5,6]];
var array2 = [[1,2,3,4],[5,6,7,8],[1,3,5,7]];

if(array1[0].length == array2.length){
    let sum = 0;
    let c = [];
    let d = [];

    for(let row_1 = 0; row_1 < array1.length; row_1++){
        for(let col_2 = 0; col_2 < array2[0].length; col_2++){
            for(let row_2 = 0; row_2 < array2.length; row_2++){
                sum += array1[row_1][row_2] * array2[row_2][col_2];
            }
            c.push(sum);
            sum = 0;
        }
    }
    for(let k = 0, len = array2[0].length; k < c.length; k += len){
        d.push(c.slice(k,k+len));
    }
    console.log(d);
}
else{
    console.log("该两个矩阵不能相乘");
}