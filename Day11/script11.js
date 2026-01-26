console.log("Welcome to Day 11");

function outer(){
    let x=10;

    return function inner(){
        console.log(x);
    }
    inner();
}
const func=outer();
console.log(func());
//o/p: 10

function outerFunction(){
    let count=0;

    return function innerCount(){
        count++;
        console.log(count);
    }
}
const retValue=outerFunction();

retValue(); //1
retValue(); //2
retValue(); //3



//Real World Example

function createBankAccount(initialBalance){
    let balance=initialBalance;

    return {
        deposit : (amount) => {
        balance = balance + amount;
        console.log("Deposited", amount, " Current Balance ", balance);
        },

        withDraw : (amount) => {
            if(amount > balance){
                console.warn("Insufficient Funds");
            }
            else{
                balance = balance - amount;
            console.log("Withdrawn", amount, " Current Balance ", balance);
            }
        },

        checkBalance : () => console.log("Current Balance ", balance)
    };
}

const tapaScriptAccount = createBankAccount(100);

console.log(tapaScriptAccount);

console.log(tapaScriptAccount.deposit(300)); //400

console.log(tapaScriptAccount.withDraw(50)); //350

console.log(tapaScriptAccount.withDraw(20)); //330

console.log(tapaScriptAccount.withDraw(50)); //200

console.log(tapaScriptAccount.withDraw(150)); //130

console.log(tapaScriptAccount.checkBalance()); //130



//Example

function dealingWithData(){
    let bigData=new Array(10000000).fill("*")

    return function(){
        console.log(bigData[3]);
    }
}

const variable12 = dealingWithData();
console.log(variable12());

//Example

function timer(){
    let sec=0;
    return function(){
        sec++;
        console.log("Elaspes Seconds: ", sec);
    }
}
const timerInstance = timer();
timerInstance(); //1
timerInstance(); //2
timerInstance(); //3

//Closure in Event Handler

function setUpButton(){
    let clickCount = 0;
    document.getElementById("myButton").addEventListener("click", function(){
        clickCount++;
        console.log(`Button Clicked ${clickCount} times`)
    })
}
setUpButton();