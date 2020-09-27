var div = document.getElementsByClassName('responds');
var i;
var divLen = div.length;
for(x of div){
      x.setAttribute('ontouchmove','touchMove(event)')
  }
var arr = [];
function touchMove(event) {
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

var respond_cards, respond_navigation,
      cards_len, dots_len,
      slideIndex,
      i,
      arrRight;
        
      if(window.innerWidth > 1200){
        respond_cards = document.getElementsByClassName("responds");
        respond_navigation = document.getElementsByClassName("dots");

        cards_len = respond_cards.length;
        dots_len = respond_navigation.length;

        slideIndex = 1;

        arrRight = document.querySelector("#respond_navigation > img:nth-child(7)");

        setInterval(function(){arrRight.click()},5000);

        function plusSlides(n) {showSlides(slideIndex += n);}


        function showSlides(n) {
          if (n > cards_len) {slideIndex = 1}
          if (n < 1) {slideIndex = cards_len}
          for (i = 0; i < cards_len; i++) {respond_cards[i].style.display = 'none';}
          for (i = 0; i < dots_len; i++) {respond_navigation[i].className = respond_navigation[i].className.replace("active_dot","");}
          respond_cards[slideIndex - 1].classList.add('responds_transitioned_right');
          respond_navigation[slideIndex - 1].classList.add('active_dot');
        }
      }

      function openInstagram(){
        location.assign("https://www.instagram.com/dr_uliana_chernienko/");
      }
