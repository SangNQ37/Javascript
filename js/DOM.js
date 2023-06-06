document.getElementById("test") // truy xuất đến thẻ HTML có ID là test để lấy value
                                // Nếu có thẻ ID bị trùng khớp thì lấy ID đầu tiên

document.getElementsByTagName('div') // lấy hết tất cả các thẻ html cụ thể trong ví dụ này là thẻ div

document.getElementsByClassName('wrapper') // lấy tất cả thẻ html có tên class trùng với tên tham số truyền vào. 
                                            // ví dụ dưới đây là thẻ có class là wrapper

DocumentFragment.apply().map.DocumentFragment.apply();
function dom(){
    var getName = document.getElementsByTagName('div');
    var sum = 0;
    for(var i=0;i<getName.length;++i){
        var test = parseInt(getElementsByClassName('wrapper'));
        sum += test;
    }
    switch(sum){
        case 0:{
            console.log("test khong ton tai");
            break;
        }
        case 1: {
            console.log("test co 1 nghiem");
            break;
        }
        case 2: {
            console.log("test co 2 nghiem");
            break;
        }
        case 3: {
            console.log("test co 3 nghiem");
            break;
        }
        case 4: {
            console.log("test co 4 nghiem");
            break;
        }
        default:{
            console.log("vo nghiem");
        }
    }
}