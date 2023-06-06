function check_number(number){
    if(number % 2 == 0){
        console.log(number + " la so chan")
    }
    else 
        console.log(number + " la so le");
}

console.log(check_number(parseInt(prompt("Nhap so can kiem tra : ", ''))));
