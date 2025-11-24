


function show() {


    let thing = prompt("What Do You Want? (banana, apple, melon,orange) ");


    let result = "The price of a ";

    let b_price = 20;
    let a_price = 15;
    let m_price = 25;
    let o_price = 8;



    switch (thing) {


        case 'banana':
            result += "banana is " + b_price + "$";
            break;
        case 'apple':
            result += "apple is " + a_price + "$";
            break;

        case 'melon':
            result += "melon is " + m_price + "$";
            break;

        case 'orange':
            result += "orange is " + o_price + "$";
            break;

        default:
            result = "Pls choose only from the list";
            break;

    }

    document.getElementById("result").innerHTML = result;





}