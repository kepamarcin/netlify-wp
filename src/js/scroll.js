var scroll;

var fired = false;
window.addEventListener("scroll", function(){
    const nav = document.querySelector('.menu-button');
    const body = document.querySelector('body');
    if((body.getBoundingClientRect().top) < -10){
      nav.classList.add("bgchanged");
    } else {
      if(nav.classList.contains("bgchanged")){
        nav.classList.remove("bgchanged");
      }
    }

    if ((document.documentElement.scrollTop != 0 && fired === false) || (document.body.scrollTop != 0 && fired === false)) {

    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    } }


    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-114500181-1', 'auto');
    ga('send', 'pageview');

    fired = true;
  }
}, true)

console.log('arefg');

export default scroll;
