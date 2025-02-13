

function check() {
    let inputValue = document.getElementById("input").value;
    let selectedFunction = document.getElementById("functions").value;
    let output = document.getElementById("output");

    if (inputValue == '') {
        output.value = "Please enter a number";
        return;
    }

    if (selectedFunction === "Reverse") {
        output.value = inputValue.split('').reverse().join('');
    } 
    else if (selectedFunction === "Palindrom") {
        let reversedValue = inputValue.split('').reverse().join('');
        output.value = (inputValue === reversedValue) ? "Palindrome" : "Not a Palindrome";
    } 
    else {
        output.value = "Function not implemented";
    }

 if (selectedFunction === "Fibonacci") {
    let num = parseInt(inputValue);
   
    let fibSeries = [0, 1];
    for (let i = 2; i < num; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    output.value = fibSeries.slice(0, num).join(', ');
}
if (selectedFunction === "Armstrong") {
    let num = parseInt(inputValue);
    let sum = 0;
    let temp = num;
    let numberOfDigits = inputValue.length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numberOfDigits);
        temp = Math.floor(temp / 10);
    }

    output.value = (sum === num) ? "Armstrong Number" : "Not an Armstrong Number";
}

if (selectedFunction === "OddEven"){
    if(inputValue%2===0){
        output.value = "The number is Even  "
    }else{
        output.value = "The number is odd"
    }
}
if (selectedFunction === "Prime"){
    var count = 0
    for(i=1 ; i<=inputValue ; i++){
        if(inputValue%i==0){
            count++
        }

    }
    if (count===2){
        output.value = "The number is prime"
    }else{
        output.value= "The number is not Prime"
    }
}



}


