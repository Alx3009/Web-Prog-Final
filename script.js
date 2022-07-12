function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h<10){
        h= "0"+h;
    }
    if(m<10){
        m= "0"+m;
    }
    if(s<10){
        s= "0"+s;
    }

    var time = h + ":" + m + ":" + s
    document.getElementById("ClockDisplay").innerText = time;

    setTimeout(showTime, 1000);
}
showTime();

var index = 0;

show_slides(index);

function show_slides(i)
{
    index += i

    var slides = document.getElementsByClassName("my_slides");

    for (i = 0; i < slides.length; i++){
        slides [i].style.display = "none"
    }

    if (index > slides.length - 1){
        index = 0;
    }
    if (index < 0){
        index = slides.length - 1;
    }

    slides [index].style.display ="block";

}

//object
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

//function
btn.addEventListener('click', () =>{
    let txt = input.value;
    if (txt === ""){
        alert('you must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = ''
    }
})

//function will mark the done subject
list.addEventListener('click', e =>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})