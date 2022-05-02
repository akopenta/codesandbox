// 配列のコピーや結合

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

/*mapやfilterを使った配列の処理 */

const nameArr = ["田中", "ヤマダ", "あきこ"];

/*for(let index=0; index<nameArr.length;index++){
  console.log(nameArr[index]);
}
*/
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
