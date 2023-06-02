/*
 * プロジェクトフォルダ直下で
 * 以下のいずれかのコマンドで実行可能
 * node strict-mode/strict_mode
 * node strict-mode/strict_mode.js
 * node ./strict-mode/strict_mode.js
*/

// jsファイルの先頭でstrictモードを宣言すると、ファイル全体でstrictモードが適用される。
'use strict';


// strictモードの場合は、変数宣言を行なっていない変数への値の代入はエラーになる。
let num;
let num2 = 1;

// ここがエラーになる。
// strictモードでない場合は新しいグローバル変数扱いになる。
num3 = 2;
// let num3 = 2;

console.log(num);
console.log(num2);
console.log(num3);


// strictモードの場合は、関数に同じ名前の引数を記述している場合はエラーとなる。
function test(a,a,b) {
    console.log('a='+a);
    console.log('b='+b);
}

test(num,num2,num3);

// strictモードは関数単位で設定することも可能
function test2() {
    'use strict'
    let str = 'test';
    str2 = 'test2';

    console.log(str);
    console.log(str2);
}

test2();