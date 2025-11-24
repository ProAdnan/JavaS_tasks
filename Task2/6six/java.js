
function is_num_p(number) {

    let numbers = String(number);

    if (numbers.length !== 10) {

        return false;
    }





    for (let index = 0; index <= 9; index++) {


        if (!numbers.includes(index)) {
            return false;
        }

    }




    return true;

}



let p_num = 1023456789;

document.write(is_num_p(p_num));
