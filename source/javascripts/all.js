//= require_tree ./jquery
//= require_tree ./bootstrap
//= require_tree .

$(function(){
  var defaultTop=$('.gnavi').position().top;
  hoge = $('<div>');
  hoge.insertBefore($('.gnavi'));
  hoge.css({height:$('.gnavi').outerHeight()})
  function onscroll(){
    if(defaultTop<document.body.scrollTop){
      $('.gnavi').css({position:'fixed',left:0,top:0})
      hoge.show();
    }else{
      $('.gnavi').css({position:'relative',left:0,top:0})
      hoge.hide();
    }
  }
  $(document).scroll(onscroll);
  onscroll();
})
