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
    $('.session').css({'min-height':''});
    var max=0;
    $('.session').each(function(){
      var h=$(this).height();
      if(max<h)max=h;
    });
    $('.session').css({'min-height':max});
  }
  fix();
  $(window).resize(fix);
})

$(function(){
  var a = $('[data-ust-replace]');
  if(new Date()>new Date('Mar 01 2014 12:00:00 GMT+0900')){
    var parent=a.parent();
    a.remove();
    parent.append($('<div>').html(a.data('ust-replace')))
  }
})
