/**
 * Created by chen on 16/5/21.
 */
/**
 * Created by chen on 16/5/20.
 */
$(document).ready(function(){
  $('#fullpage').fullpage({
    easing:'easeInQuart', //滚动动画方式,默认'easeInQuart'
    scrollingSpeed: 700, //滚动速度,默认700ms
    verticalCentered: false, //内容是否垂直居中,默认为true
    resize: false, //字体是否随着窗口缩放而缩放,默认为false
    slidesColor: [], //设置背景色
    anchors:['page1', 'page2','page3','page4'], //定义锚链接
    menu: '#menu',  //绑定菜单,设定的值与anchors的值对应后,菜单可以控制滚动
    navigation: true, //是否显示项目导航 ,默认false
    navigationPosition: 'right', //项目导航的位置，可选 left 或 right
    navigationColor: '#000', //项目导航的颜色,默认#000
    showActiveTooltip: [], //项目导航的 tip
    slidesNavigation: false, // 是否显示左右滑块的项目导航
    slidesNavPosition: 'bottom', //左右滑块的项目导航的位置，可选 top 或 bottom
    controlArrowColor: '#fff', //左右滑块的箭头的背景颜色
    loopBottom: true, //滚动到最底部后是否滚回顶部,默认false
    loopTop: true, //滚动到最顶部后是否滚底部,默认false
    loopHorizontal: true, //左右滑块是否循环滑动,默认true
    css3: true, //是否使用 CSS3 transforms 滚动,默认false
    paddingTop: '60px',  //与顶部的距离,默认0
    paddingBottom: '0', //与底部距离
    keyboardScrolling: true, //是否使用键盘方向键导航,默认true
    fixedElements: '#menu', //要在CSS里给该固定元素设置属性,让其固定个在某个位置,一般可以用作页面导航
    autoScrolling: true, //是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条,默认true
    scrollOverflow: false,//内容超过满屏后是否显示滚动条,默认false
    touchSensitivity: 5 ,//
    continuousVertical:false ,//是否循环滚动，与 loopTop 及 loopBottom 不兼容,默认false


    //绑定事件
    /* 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，*/
    /*  @anchorLink 是锚链接的名称，*/
    /*  @index 是序号，从1开始计算 */
    afterLoad: function(link, index){
      switch(index) {
        case 1:
          move('.section1 h1').scale(1.5).end();
          move('.section1 p').set('margin-top','80px').end();
          break;
        case 2:
          move('.section2 h1').scale(1.3).set('margin-left','180px').end();
          move('.section2 p').scale(1.3).set('margin-left','180px').end();
          break;
        case 3:
          move('.section3 .slide1').then()
            .set('opacity',.8)
            .duration('0.3s').end();
          break;
        case 4:
          move('.section4').scale(1.02).end();
          break;
        default:
          break;
      }
    },
    /*滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：*/
    /* @index 是离开的“页面”的序号，从1开始计算；*/
    /* @nextIndex 是滚动到的“页面”的序号，从1开始计算；*/
    /* @direction 判断往上滚动还是往下滚动，值是 up 或 down。*/
    onLeave: function(index) {
      switch(index) {
        case 1:
          move('.section1 h1').scale(1).end();     //设置h1到初始状态,方便下次afterLoad动画效果执行
          move('.section1 p').set('margin-top','1200px').end(); //设置p到初始状态,方便下次afterLoad动画效果执行
          break;
        case 2:
          move('.section2 h1').scale(1).set('margin-left','2500px').end();
          move('.section2 p').scale(1).set('margin-left','-2500px').end();
          break;
        case 3:
          move('.section3 .slide1').set('opacity',1).end();
          break;
        case 4:
          move('.section4').scale(1).end();
          break;
        default:
          break;
      }
    },
  });
});