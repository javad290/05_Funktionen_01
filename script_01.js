"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// function test()
// {
//     console.log("Hallo Thilo!");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Aufruf (call)
// ausgabeNamen();

// Funktion
// function ausgabeNamen() {
//     let firstName = "Anna"; // what happens in Vegas, ...
//     console.log("Hallo " + firstName + "!");
// }

// console.log(firstName);  // .. stays in Vegas!
// function javad () {

//     let call = "Javad"
//     console.log("Hello " + call );

// }

// javad()


// **************2b funktion*********

// function ausgabeNamenParam(firstName,) {

//     console.log("Hallo " + firstName +  "!");
// }

// ausgabeNamenParam("Javad")
// ausgabeNamenParam("Javad2")
// ausgabeNamenParam()
// ausgabeNamenParam(prompt("Vorname"))

// *************************'

// function ausgabeNamenParam(firstName,) {

//    firstName="noBody"
//     console.log("Hallo " + firstName +  "!");
// }

// ausgabeNamenParam()

// **********************
// function ausgabeNamenParam(firstName) {
//     // console.log("Hallo " + firstName + "!");
//     if (firstName === "") {
//         console.log("Keine Eingabe");
//     } else {
//         console.log("Hallo " + firstName + "!");
//     }

// }
// ausgabeNamenParam(prompt("vorname"))


// **********************************

// function ausgabeNamenParam(firstName) {

//     const cond1 = (firstName == "");
//     const cond2 = (firstName == undefined);

//     if (cond1 || cond2) {

//         firstName = "NoBody"
//     }


//     console.log("Hallo " + firstName + "!");

// }
// ausgabeNamenParam(prompt("Vorname?"))

// ***************2c*************

function ausgabeNamenParams(firstName, familyName) {

    console.log("Hallo " + firstName + " " + familyName + "!");

}

// ausgabeNamenParams("Javad","Hajian")
// ausgabeNamenParams(prompt("Vorname") , prompt("Nachname"))

// **********3a***********
// one function one job 



// function ausgabeNamenParams2(firstName, familyName) {

//     const gap = " ";
// const outputStr = "Hallo" + gap + firstName + gap + familyName + "!"
// console.log(outputStr);
// }


// ausgabeNamenParams2("Javad", "Hajian")


// ****************3b*************

// output(getString("Javad", "Hajian"))


// function getString(firstName, familyName) {
//     const gap = " ";
//     const outputStr = "Hallo" + gap + firstName + gap + familyName + "!"
//     return outputStr
    

// }

// function output(outputData) {
//     console.log(outputData);

// }
// output(getString("Javad", "Hajian"))

// ***************************



function getString(firstName, familyName) {
    const gap = " ";
    const outputStr = "Hallo" + gap + firstName + gap + familyName + "!"
    return outputStr
    
}
console.log(getString("Javad", "Hajian")) 