var number = parseInt(prompt("Nhap so can kiem tra : "), '');

var mod = (number % 2);

switch(mod)
{
    case 0: {
        console.log(number + " la so chan");
        break;
    }
    case 1: {
        console.log(number + " la so le");
        break;
    }
    default: {
        console.log("ky tu ban nhap khong hop le");
    }
}