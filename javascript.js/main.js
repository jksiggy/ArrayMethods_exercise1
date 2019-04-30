console.log("array array");

const businessOutput = document.querySelector("#output");
console.log("businessOutput", businessOutput);

// businesses.forEach(business => {
//     console.log("what is my businesses", business);
//     businessOutput.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <h4>${business.addressStateCode}</h4>
//     <hr>`
// });

//////Filter///////
businesses.filter(business => {
    console.log("what is my businesses", business);
    let inNewYork = false;

    if (business.addressStateCode === "NY") {
        inNewYork = true;
    } 
    return inNewYork;
});

businesses.filter(biz => biz.addressStateCode ==="NY")
.forEach(business => {
businessOutput.innerHTML += `
<h2>${business.companyName}</h2>
<h4>${business.addressStateCode}</h4>
<hr>`
});
////////////////////
/////map////
function showBusiness(business){
    return `<div>${business.companyName}</div>`
}
let newStuff = businesses.map(showBusiness);
businessOutput.innerHTML += newStuff.join("");
/////////////

////finde/////
const candies = [
    {
        name: "Lollipop",
        price: 2.99
    },
    {
        name: "Tootsie Roll",
        price: 1.49
    },
    {
        name: "Sugar Daddy",
        price: 2.49
    }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)
> { name: "Tootsie Roll", price: 1.49 }

/////////
///////Reduce///////
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce()

console.log(totalRainfall)
///////////////////