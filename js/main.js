$(function(){  //sliders and popups
  $('.content__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true
  })
  $('.modal__slider-main').slick({
    arrows: false,
    fade: true,
    asNavFor: '.modal__slider-small',
    draggable: false
  })
  $('.modal__slider-small').slick({
    asNavFor: '.modal__slider-main',
    focusOnSelect: true,
    slidesToShow: 3,
    draggable: false
  })
  // $('.slider-main__img-link').magnificPopup({
  //   type: 'image',
	// 	closeOnContentClick: true,
	// 	closeBtnInside: false,
	// 	fixedContentPos: true,
	// 	mainClass: 'mfp-no-margins mfp-with-zoom', 
	// 	image: {
	// 		verticalFit: true
	// 	},
	// 	zoom: {
	// 		enabled: true,
	// 		duration: 300
	// 	}
  // })
});

//цикл для того чтобы повесить на все кнопки функцию отображения формы
const btns = document.getElementsByClassName('catalog__btn');
for (let i = 0; i < btns.length;i++){
  btns[i].onclick = showModalForm;
}
//id1 - айдишник всего модального окна id2- айдишник контена которы должен выехать
function showModal1(id,id2) {
  //показать окно
  document.getElementById(id).style.opacity = '1';
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id2).style.transform = 'translateY(0)';
}
function closeModal1(id,id2) {
  //скрыть окно
  document.getElementById(id).style.opacity = '0';
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id2).style.transform = 'translateY(-100%)';
}

//показать окно с формой
function showModalForm() {
  document.getElementById('modal-form').style.opacity = '1';
  document.getElementById('modal-form').style.visibility = 'visible';
  document.querySelector('.modal__form-inner').style.transform = 'translateY(0)';
}

//закрыть окно с формой
function closeModalForm() {
  document.getElementById('modal-form').style.opacity = '0';
  document.getElementById('modal-form').style.visibility = 'hidden';
  document.querySelector('.modal__form-inner').style.transform = 'translateY(-100%)';
}

//id текст который должен вылазить, id2 - картинка которая должна флипануться 
function showAccordion(id,id2){
  let acText = document.getElementById(id);
  if (acText.style.display == 'none'){
    acText.style.display = 'block';
    document.getElementById(id2).style.transform = 'rotate(180deg)';
  }
  else {
    acText.style.display = 'none';
    document.getElementById(id2).style.transform = 'rotate(0deg)';
  }
}

//вешаю функцию на все кнопки внутри модального окна
const zakaz = document.getElementsByClassName("modal__btn");
for (let k of zakaz){
  k.onclick = showModalForm;
}

function showAccordion1 (id, id2) {
  let content = document.getElementById(id);
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    content.style.marginTop = '0'
    document.getElementById(id2).style.transform = 'rotate(0deg)';
  }else {
    content.style.maxHeight =  content.scrollHeight + 'px'
    content.style.marginTop = '15px';
    document.getElementById(id2).style.transform = 'rotate(180deg)';
  }
}

let x = false
function showMenu(){
  let contentMenu = document.querySelector('.nav-adaptive')
  if (x == false){
    contentMenu.style.maxHeight = contentMenu.scrollHeight + 'px';
    x = true;
  }
  else{
    contentMenu.style.maxHeight = '0';
    x = false
  }
}