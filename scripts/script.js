var indexPage = 1;
this.oldScroll = 0
wh = window.screen.height;
var continu = true;



/*
//cette fonction permet de détécter le scroll
//c'est bon la fonction de scroll page par page est utilisable
var ScrollDebounce = true;
window.addEventListener('scroll',
  function () {
    if (ScrollDebounce) {

      ScrollDebounce = false;
      disableScroll()
      console.log("part 1");
      console.log(this.scrollY);
      console.log(this.oldScroll);
      if (this.oldScroll < this.scrollY) {
        //quand on scroll up
        if (indexPage < 8) {

          console.log("part 1");
          console.log(indexPage);
          indexPage++;
          window.scrollTo(0, (indexPage - 1) * wh);

        }
      } else if (this.oldScroll > this.scrollY) {
        //quand on scroll down
        if (indexPage > 1) {
          console.log("part 2");
          console.log(indexPage);
          indexPage--;
          window.scrollTo(0, -(indexPage - 1) * wh);
        }
      }
      this.oldScroll = (indexPage - 1) * wh
      setTimeout(function () {
        ScrollDebounce = true;
        enableScroll()
      }, 1000);
    }
  })

//tp to another page
function jump(h) {
  var top = document.getElementById(h).offsetTop; //Getting Y of target element
  window.scrollTo(0, top); //Go there directly or some transition
}

/*
function to disable or enable scroll

https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
*/

var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
      supportsPassive = true;
    }
  }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
  passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


//set indexPage avec les bouton de nav

$(document).ready(function(){
	$('ul li a').on('click', function(){
		$(this).closest('ul').find('a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
});


