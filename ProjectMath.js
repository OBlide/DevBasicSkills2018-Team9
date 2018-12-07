//Number system conversions

//Number system outputs

//Combinatorics

//Truth tables

//Random values

function numberRandom(min, max) {

    return Math.floor(Math.random() * (min + max));
}

const myArray = [0,1,2,3,4,5, ,]
let countOfClicks = 1
// An array where we will store objects with the form {number, count}

function addNumber() {
    const randomNumber=numberRandom(0,6)
    myArray.push(randomNumber)
    document.getElementById("randomNumber").textContent=randomNumber;
    countOfClicks++
    myArray.sort();
    
    const countArray = []
    console.log("original array: " + myArray);
    console.log("count array: " + countArray);
    
    
    
    for (let i = 0; i < myArray.length; i++) {
      const currentIndex = countArray.push({ number: myArray[i], count: 1 }) - 1
    
      for (let j = i; j < myArray.length; j++) {
        if (myArray[i] === myArray[j]) {
          countArray[currentIndex].count++
        } else {
          i = j -1
    
          break
        }
      }
    }
    
    console.log(countArray)
    const results= document.getElementById("results");
    results.textContent=""
    for (let i= 0; i < countArray.length; i++){
      if (countArray[i].number){
      results.innerHTML+=`${countArray[i].number} - ${countArray[i].count} <br>`
   
      }
    }
}


// First, we sort the array so we can work with it using this algorithm




//Our own functionality