//= require_tree ./jquery
//= require_tree ./bootstrap
//= require_tree .

//nav固定
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

//ゲスト講演高さ揃え
$(function(){
  function fix(){
    $('.session').css({height:''});
    var max=0;
    $('.session').each(function(){
      var h=$(this).height();
      if(max<h)max=h;
    });
    $('.session').css({height:max});
  }
  fix();
  $(window).resize(fix);
})