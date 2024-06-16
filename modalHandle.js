// Xử lý phần đóng và mở modal
var btn_subnav_li_infor = document.querySelector('#subnav_li_infor')
function open_inforModal(){
    document.querySelector('.modal').setAttribute('style', 'display: flex');
}
btn_subnav_li_infor.addEventListener("click", open_inforModal);
// Mở giao diện thông tin cá nhân

var btn_modal_close = document.querySelector('.modal_close>i');
function close_inforModal(){
    document.querySelector('.modal').setAttribute('style', 'display: none');
}
btn_modal_close.addEventListener("click", close_inforModal);
// Đóng giao diện thông tin cá nhân


// Xử lý bên trong modal

// 1. Xử lý khi không nhập họ tên và địa chỉ
function checkTextIsNull(input){
    var getInput = input.value;
    if(getInput==''||getInput==undefined)
        return true;
    else
        return false;
}

// 4 groupInputs chứa titleIput + input + textError
var groupInput = document.querySelectorAll('.infor_container_content .group_input');

function setModalErrorText(){    
    var arrayResult = [checkTextIsNull(groupInput[0].querySelector('.modal_input_text')), //checkTextIsNull_name
                        checkTextIsNull(groupInput[1].querySelector('.modal_input_text')), //checkTextIsNull_birth
                         checkTextIsNull(groupInput[2].querySelector('.modal_input_text'))]//checkTextIsNull_address
    // var count=0;
    
    for(var i=0; i<3; i++){
        // Nếu có nhập vào input
        if(arrayResult[i]==false){
            groupInput[i].querySelector('.input_text_error').innerText = '';
            // Text erro = ""
            groupInput[i].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');
            // Border input về bình thường

            // count++;
        }
        // Nếu không nhập vào input
        else{
            groupInput[i].querySelector('.modal_input_text').setAttribute('style', 'border:solid 2px red');
            // BorderInput màu đỏ
            
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

var confirm_btn = document.querySelector('.infor_container_confirm_btn');
confirm_btn.addEventListener("click", setModalErrorText);
// SỰ kiện kiểm tra input null? được lắng nghe


// Khi click vào ô input thì ô đó sẽ về trạng thái bình thường(có tác dụng khi ô đó đang có hiện lỗi và sau đó nhập dữ liệu)
var modal_input_text = document.querySelectorAll('.modal_input_text');

// C1: khi chưa clean code
// var groupInput = document.querySelectorAll('.infor_container_content .group_input');
// modal_input_text[0].addEventListener("input", function(){

//     groupInput[0].querySelector('.input_text_error').innerText = '';
//     groupInput[0].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');
// });

// modal_input_text[1].addEventListener("input", function(){

//     groupInput[1].querySelector('.input_text_error').innerText = '';
//     groupInput[1].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');
// });

// modal_input_text[2].addEventListener("input", function(){

//     groupInput[2].querySelector('.input_text_error').innerText = '';
//     groupInput[2].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');
// });

// C2(chạy được): Tự nghĩ theo c1 nhưng đổi let thành var(var là sai)
// Link giải thích: https://chatgpt.com/c/ed4a92c7-7b62-4f09-b4ef-85e4c7b326fb

// var groupInput = document.querySelectorAll('.infor_container_content .group_input');
// for(let i=0; i<3; i++){
//     modal_input_text[i].addEventListener("input", function(){

//         groupInput[i].querySelector('.input_text_error').innerText = '';
//         groupInput[i].querySelector('.modal_input_text').setAttribute('style', 'border: solid 1px black');
//     });
// }

// C3: CLean code theo chatGPT
modal_input_text.forEach((input, index) => {
    input.addEventListener("input", function() {
        groupInput[index].querySelector('.input_text_error').innerText = '';
        groupInput[index].querySelector('.modal_input_text').style.border = 'solid 1px black';
    });
});
 

// Xử lý giá trị cho giới tính khi click chọn li - subnavGender
function isSelectedMale(){
    var selectedGender = document.querySelectorAll('.input_title_text_gender li');

    selectedGender[0].addEventListener("click", function(){
        document.querySelector('.input_title_text_gender .modal_input_text').value = 'Nam';
    });
    selectedGender[1].addEventListener("click", function(){
        document.querySelector('.input_title_text_gender .modal_input_text').value = 'Nữ';
    });
}
isSelectedMale();
// Sự kiện lắng nghe lựa chọn
