/*
 * プロジェクトフォルダ直下で
 * 以下のいずれかのコマンドで実行可能
 * node wrapper-object/number
 * node wrapper-object/number.js
 * node ./wrapper-object/number.js
*/

// プリミティブ型（数値）の変数を定義
let num = 10;

// ラッパーオブジェクトのNumberオブジェクトを生成
let obj = new Number(num);

// 一旦中身を見てみる
console.log(num);
console.log(obj);
/*
* [実行結果]
* 10
* [Number: 10]
*/

// Numberオブジェクトがラップしているプリミティブ値を表示する
console.log(obj.valueOf());

// Numberオブジェクトがラップしている値を16進数に変換し、文字列で返す
// toStringメソッドの引数に、2を渡せば2進数、8を渡せば8進数に変換してくれる
console.log(obj.toString(16));

//ラッパーオブジェクトを生成せずに、プリミティブ値から直接ラッパーオブジェクトのファンクションを呼び出すこともできる
let num2 = 15;
console.log(num2.toString(16));