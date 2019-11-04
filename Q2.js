// 2.請建立一個 BMI 函式，裡頭有兩個參數(身高,體重)，
// 執行時會印出對應 BMI，並取小數點後一位。範例如下
// input: BMI(178,70)
// console.log：25.2

function BMI(height, weight){
    let mHeight = height/100;
    let myBMI = weight/(mHeight*mHeight);
    console.log(myBMI.toFixed(1));
}

BMI(180,65);