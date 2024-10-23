// Loan Prediction
// job _type (input)

//     government / business / private
//     if job_type government
//         take salary input and if salary is greater than 50k
//             print You can apply for loan
//         otherwise print you can not apply for loan

//     if job_type business than
//         yearly turnover input
//         if turnover greater than 20lakh than
//             print you can apply for loan
//         other wise
//             print you can not apply for loan

//     if job_type private
//         no loan available for you


// const prompt = require("prompt-sync")()
// let job_type = prompt("Enter your job_type(Government /business / private) :-");
// // let salary = parseInt(prompt("Enter your Salary :-"));


// /*government */
// if (job_type === "Government") {
//     let salary = parseInt(prompt("Enter your Salary :-"));
//     if (salary >= 50000) {
//         console.log("You can apply for loan")
//     } else {
//         console.log("You can not apply for loan")
//     }
// }
// /*bussiness */
// else if (job_type === "business") {
//     let salary = parseInt(prompt("Enter your Salary :-"));
//     if (salary >= 2000000) {
//         console.log("You can apply for loan")
//     } else {
//         console.log("You can not apply for loan")
//     }
// }
// /*private */
// else if (job_type === "private") {
//     console.log("You can not apply for loan")
// }
// else {
//     console.log("you can not apply for loan")
// }


const prompt = require ("prompt-sync")()
let root = prompt("enter your root (short / tall) is :-");

if(root === "short"){
    let short = prompt("Enter cannot squeak / can squeak :- ")
    if(short === "cannotsqueak"){
        console.log("Might be a squirrel")
    }
    else if (short === "cansqueak"){
        console.log("Might not be a rat")
    }
}
else if (root === "tall"){
    let short = prompt("Enter short neck / long neck :- ")
    if(short === "short_neck"){
        let short_neck = prompt("Enter short nose / long nose :- ")
        if(short_neck === "short nose"){
            let short_nose = prompt("Enter on land / in water")
            if(short_nose === "on land"){
                console.log("Might be a Rhino")
            }else if (short_neck === "in water"){
                console.log("Might be a Hippo")
            }
        }else if (short_neck === "long nose"){
            console.log("Might be a elephant")
        }
    }
    else if(short === "long neck"){
        console.log("Might be a giraffe")
    }
}
