
function multiplication2(num1, num2) {



    let result=0;
    for (let index = 0; index < num1; index++) {

            result+=+num2;
    }

    return result;

}

let num1 = Number(prompt("enter num 1:"));
let num2 = Number(prompt("enter num 2:"));


document.getElementById("result").innerHTML = multiplication2(num1, num2);

