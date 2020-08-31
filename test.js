function check(){
    var count = 0;
    var allPrice = 0;
    for(var i = 0; i< document.getElementsByClassName('chk').length; i++){
        if(document.getElementsByClassName('chk')[i].checked == true){
            count++;
            allPrice += Number(document.getElementsByClassName('price')[i].innerHTML);
        }
    }

    document.getElementById('allNumber').innerHTML = count;
    document.getElementById('all').innerHTML = allPrice;
    if(count == document.getElementsByClassName('chk').length){
        document.getElementById('allCheck').checked = true;
    }
    else{
        document.getElementById('allCheck').checked = false;
    }
}

function allCheck(){
    var allPrice = 0;
    if(document.getElementById('allCheck').checked == true){
        for(var i = 0; i<document.getElementsByClassName('chk').length;i++){
            if(document.getElementsByClassName('chk')[i].checked !== true){
                document.getElementsByClassName('chk')[i].checked = true;
            }
            allPrice += Number(document.getElementsByClassName('price')[i].innerHTML);
        }
        document.getElementById('allNumber').innerHTML = document.getElementsByClassName('chk').length;
        document.getElementById('all').innerHTML = allPrice;
    }
    else{
        for(var i = 0; i<document.getElementsByClassName('chk').length;i++){
            if(document.getElementsByClassName('chk')[i].checked == true){
                document.getElementsByClassName('chk')[i].checked = false;
            }
        }
        document.getElementById('allNumber').innerHTML = 0;
        document.getElementById('all').innerHTML = 0;
    }
}
input = [];
input2 = [];
for(var i = 0; i<document.getElementsByClassName('chk').length; i++){
    input.push(document.getElementsByClassName('input')[i].value);
    input2.push(document.getElementsByClassName('bookname')[i].innerHTML);
}

function checkNumber(){
    var count = 0;
    var check = event.target.parentNode.parentNode.childNodes[1].childNodes[1];
    var allPrice = 0;

    for(var i = 0; i< document.getElementsByClassName('chk').length ; i++){
        if(document.getElementsByClassName('chk')[i].checked == true){
            count++;
            allPrice += Number(document.getElementsByClassName('price')[i].innerHTML);
        }
    }
    if(count == document.getElementsByClassName('chk').length){
        document.getElementById('allCheck').checked = true;
    }
    document.getElementById('allNumber').innerHTML = count;
    document.getElementById('all').innerHTML = allPrice;

    let previousValue = event.target.parentNode.childNodes[1].value;
    let previousName = event.target.parentNode.parentNode.childNodes[3].innerHTML;
    console.log(previousName)
    var findNumber = 0;
    for(var i = 0; i< document.getElementsByClassName('chk').length ; i++){
        if(input[i] == previousValue && previousName == input2[i]){
            findNumber = i;
            console.log(findNumber)
        }
    }
    if(check.checked == false && previousValue == input[findNumber] && previousName == input2[findNumber]){
        alert('수량을 변경하지 않았습니다.');
    }
    else{
        check.checked = true;
        for(var i = 0; i<document.getElementsByClassName('chk').length; i++){
            input[i] = document.getElementsByClassName('input')[i].value;
            input2[i] = document.getElementsByClassName('bookname')[i].innerHTML;
        }
        console.log(input);
        allPrice = 0;
        event.target.parentNode.parentNode.childNodes[11].innerHTML = previousValue * Number(event.target.parentNode.parentNode.childNodes[7].innerHTML);
        for(var i = 0; i< document.getElementsByClassName('chk').length ; i++){
            if(document.getElementsByClassName('chk')[i].checked == true){
                allPrice += Number(document.getElementsByClassName('price')[i].innerHTML);
            }
        }
        document.getElementById('all').innerHTML = allPrice;
    }
}

var tr = document.getElementsByTagName('tr');
document.getElementById('removeTable').addEventListener('click',function(){
    var chkbox = document.getElementsByClassName('chk');
    for(var i = 0; i<chkbox.length;i++){
        if(chkbox[i].checked == true){
            tr[i+1].remove();
            document.getElementById('allNumber').innerHTML = 0;
            i--;
            document.getElementById('all').innerHTML = 0;
        }
    }
});

function sub(){
    var pattern_eng = /[a-zA-Z]/;
    
    if(document.getElementById('name').value == "" && (allNumber.innerHTML =="" || allNumber.innerHTML=="0")){
      alert("아이디는 영문자로 입력해주시고,체크박스도 선택해주세요!");
      document.getElementById('order').setAttribute('onSubmit',"return false");
    }
    else if (document.getElementById('name').value == "" || !pattern_eng.test(document.getElementById('name').value)) {
        alert("아이디는 영문자로 입력해주세요!");
        document.getElementById('order').setAttribute('onSubmit',"return false");
      }
    else if(document.getElementById('name').value != "" && (allNumber.innerHTML =="" || allNumber.innerHTML=="0")){
      alert("상품을 하나라도 선택하세요!");
      document.getElementById('order').setAttribute('onSubmit',"return false");
    }
    else
    {
      document.getElementById('order').setAttribute('onSubmit',"return true");
    }
}