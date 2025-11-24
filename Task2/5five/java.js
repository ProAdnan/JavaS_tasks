
function area(base, height) {


    let area = (base * height) / 2;

    return area;

}



let b = Number(prompt("enter base :"));
let h = Number(prompt("enter height:"));

let result=area(b, h);
document.getElementById("result").innerHTML = result;

