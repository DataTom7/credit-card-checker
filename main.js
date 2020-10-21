// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below!

const validateCred = (array) => {       /// returns true or false
    let newArray=[];
    for (i=array.length-1;i>=0;i--) {
        let value = array[i]
        if ((array.length - 1 - i) % 2 === 1) {
            let double = value * 2
            newArray.push(double > 9 ? double - 9 : double);   
        }
        else newArray.push(array[i])
    }
    const sum = newArray.reduce((ac,el) => ac + el)
    return sum %10 === 0
}

const findInvalidCards = (array) => {
    let invalidCardArray = [];
    for (const card of array) {
        if (!validateCred(card)) {invalidCardArray.push(card)}
    }
    return invalidCardArray;

}

const idInvalidCardCompanies = (array) => {
    companiesArray = [];
    array = findInvalidCards(array)
    for (const card of array)  {
        console.log(card[0])
        switch(card[0]) {
            case 3:
                if (!companiesArray.includes("Amex (American Express)")) companiesArray.push("Amex (American Express)")
                break;
            case 4:
                if (!companiesArray.includes("Visa")) companiesArray.push("Visa")
                break;
            case 5:
                if (!companiesArray.includes("Mastercard")) companiesArray.push("Mastercard")
                break;
            case 6:
                if (!companiesArray.includes("Discover")) companiesArray.push("Discover")
                break;
            default:
                companiesArray.push("Company not found");
        }
    }
}

idInvalidCardCompanies(arr1)