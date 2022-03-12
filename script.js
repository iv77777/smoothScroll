// после загрузки html странице
document.addEventListener("DOMContentLoaded", function(){ 
  // собираем все сылки с классом '.smooth-scroll'
  const links = document.querySelectorAll('.smooth-scroll');

  for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
      // отменяем стандартное поведения
      e.preventDefault();
      // получаем атрибут 'href' и обрезаем у него решотку
      const blockId = e.target.getAttribute('href').substring(1);

      // делает плавною прокрутку к елементу с id "blockId"
      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: "start",
      });
    });
  }
});

// polyfill.io