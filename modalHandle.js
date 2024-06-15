// Xử lý phần đóng và mở modal
var btn_subnav_li_infor = document.querySelector('#subnav_li_infor')
function open_inforModal(){
    document.querySelector('.modal').setAttribute('style', 'display: flex');
}
btn_subnav_li_infor.addEventListener("click", open_inforModal);

var btn_modal_close = document.querySelector('.modal_close');
function close_inforModal(){
    document.querySelector('.modal').setAttribute('style', 'display: none');
}
btn_modal_close.addEventListener("click", close_inforModal);

// Xử lý bên trong modal
// 1. Xử lý ngoại lệ khi nhập họ tên và địa chỉ

function checkTextIsNull(input){
    var getInput = input.value;
    if(getInput==''||getInput==undefined)
        return true;
    else
        return false;
}

// Chưa làm được
//Xử lý khi click vào 1 modal_input_text thì text_error ='' và border vẻ bình thường
// var groupInput = document.querySelectorAll('.infor_container_content .group_input');

// for(var i=0; i<3; i++){
//     groupInput[i].addEventListener("click", function(){

//     var checkIsNull = checkTextIsNull(groupInput[i].querySelector('.modal_input_text'));
//     console.log(groupInput[i].querySelector('.modal_input_text'))
//         if(checkIsNull==true){
//             groupInput[i].querySelector('.input_text_error').innerText = '';
//             groupInput[i].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');

//         }  
//     })
// }
function setModalErrorText(){
    var groupInput = document.querySelectorAll('.infor_container_content .group_input');
    
    var checkTextIsNull_name = checkTextIsNull(groupInput[0].querySelector('.modal_input_text'));
    var checkTextIsNull_birth = checkTextIsNull(groupInput[1].querySelector('.modal_input_text'));
    var checkTextIsNull_address = checkTextIsNull(groupInput[2].querySelector('.modal_input_text'));
    
    var arrayResult = [checkTextIsNull_name, checkTextIsNull_birth, checkTextIsNull_address];
    
    var count=0;
    
    for(var i=0; i<3; i++){
        if(arrayResult[i]==false){
            groupInput[i].querySelector('.input_text_error').innerText = '';
            groupInput[i].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');

            count++;
        }
        else{
            groupInput[i].querySelector('.modal_input_text').setAttribute('style', 'border:solid 2px red');

            if(i==0){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng nhập họ tên';
            }
            else if(i==1){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng chọn ngày sinh';
            }
            else if(i==2){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng nhập địa chỉ';
            }
        }
    }
    
    
}

var confirm_btn = document.querySelector('.confirm_btn');
confirm_btn.addEventListener("click", setModalErrorText);

// // Xử lý giá trị cho giới tính
function isSelectedMale(){
    var selectedGender = document.querySelectorAll('.input_title_text_gender li');

    selectedGender[0].addEventListener("click", function(){
        document.querySelector('.input_title_text_gender .modal_input_text').value = 'Nam';
    });
    selectedGender[1].addEventListener("click", function(){
        document.querySelector('.input_title_text_gender .modal_input_text').value = 'Nữ';
    });
}

var input_text_gender = document.querySelector('.input_title_text_gender .subnav');
input_text_gender.addEventListener("mouseover", isSelectedMale);
