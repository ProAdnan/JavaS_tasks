
let name = "Adnan Basem AbuOthman";

let a = "   Adnan   Abu     Othman       ";
document.getElementById("trim").innerHTML = a.trim();





let b = "   Adnan Abu Othman";
document.getElementById("trimStart").innerHTML = b.trimStart();





let c = "Adnan Abu Othman        ";
document.getElementById("trimEnd").innerHTML = c.trimEnd();



let cc = "9"
document.getElementById("padStart").innerHTML = cc.padStart(3, "0");




let ccc = "9";
document.getElementById("padEnd").innerHTML = ccc.padEnd(3, "0");




document.getElementById("charAt").innerHTML = name.charAt(1);




document.getElementById("charCodeAt").innerHTML = name.charCodeAt(0);





let h = "Adnan , Basem , AbuOthman";
document.getElementById("split").innerHTML = h.split(",");





document.getElementById("length").innerHTML = name.length;





document.getElementById("slice").innerHTML = name.slice(4, 10) + " | " + name.slice(-6);





document.getElementById("substring").innerHTML = name.substring(4, 10);






document.getElementById("substr").innerHTML = name.substr(4, 6);





document.getElementById("replace").innerHTML = name.replace("Adnan", "Lena");





let n = "Adnan Adnan Adnan ";
document.getElementById("replaceAll").innerHTML = n.replaceAll("Adnan", "Lena");





document.getElementById("toUpperCase").innerHTML = name.toUpperCase();





document.getElementById("toLowerCase").innerHTML = name.toLowerCase();





let o = "Adnan";
let p = "Basem";
document.getElementById("concat").innerHTML = o.concat(" ", p);






document.getElementById("indexOf").innerHTML = name.indexOf("n");





document.getElementById("lastIndexOf").innerHTML = name.lastIndexOf("d");




document.getElementById("search").innerHTML = name.search(/Basem/);





document.getElementById("match").innerHTML = name.match(/Abu/g);



name2="Adnan Basem Adnan sa Adnan rr";
let matchResults = "";
for (let m of name2.matchAll(/Adnan/g)) {
    matchResults += m[0] + " ";
}

document.getElementById("matchAll").innerHTML = matchResults.trim();





document.getElementById("includes").innerHTML = name.includes("Abu");





document.getElementById("startsWith").innerHTML = name.startsWith("Adnan");


document.getElementById("endsWith").innerHTML = name.endsWith("Othman");
