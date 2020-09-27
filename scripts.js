var div = document.getElementsByClassName('responds');
var i;
var divLen = div.length;
for(x of div){
      x.setAttribute('ontouchmove','touchMove(event)')
  }
var arr = [];
if(window.innerWidth < 1200){function touchMove(event) {
    var t = event.touches[0].clientX;
    arr.push(t);
    if(arr.length>2 && !(arr[0] == 0) && !(arr[1] == 0)){
        arr.length = 2;
        arr = [];
    }
console.log(arr);
var delta = arr[1]-arr[0];
  for(i=0; i<divLen; i++){
        if(div[i] === event.currentTarget){
            if(delta > 0){
                div[i].classList.add('responds_transitioned_right')
            }else if (delta < 0){
                div[i].classList.add('responds_transitioned_left')
                }
            }
        }
    if(event.currentTarget === div[4]){
        for(i = 0; i < 4; i++){
            div[4].style.zIndex = '6';
            div[i].classList.remove('responds_transitioned_right','responds_transitioned_left')
        }
    }
    else if(event.currentTarget === div[0]){
        div[4].classList.remove('responds_transitioned_right','responds_transitioned_left');
        div[4].style.zIndex = '1';
    }
event.preventDefault();
}
}
