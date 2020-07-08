
document.getElementById("header__top--btn").onclick = function() {myFunction()};        
        function myFunction() {
            document.querySelector('.navigation').style.height = "100vh";
            document.body.style.backgroundColor = "grey";
        }
        document.getElementById("navigation__page--btn").onclick = function() {myFun()};        
        function myFun() {
            document.querySelector('.navigation').style.height = "0";
            document.body.style.backgroundColor = "white";
        }

        /*document.getElementById("add-list-1").onclick = function() {addList()};
        function addList() {
            var el = document.querySelector('.navigation__page--item-inner');
            el.style.height = "70px";
            var el2 = document.querySelector('navigation__page--item-1');
            el2.style.paddingBottom = "100px";
        }*/

           /* var coll = [];
            var i = 1;

            /*document.getElementById('header__top--btn').onclick = function() {
                for(j = 1; j < 6; j++) {
                    coll = document.querySelector('.navigation__page--item-' + j);
                } 
            }*/
                   
 
            /*document.querySelector('.navigation__page--item-' + 1).addEventListener('click', function() {
                    var el = document.querySelector('.navigation__page--item-' + 1 +'-add').textContent;
                    expandeNav(el, 1);
                    i++;
            });


function expandNav(el, i) {
    if (el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-inner').style.height = "25rem";
        coll[i].style.marginBottom = document.querySelector('.navigation__page--item-inner').style.height;
        document.querySelector('.navigation__page--item-' + i + '-add').textContent = "keyboard_arrow_up";
    }
    else if (el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-inner').style.height = 0;
        coll[i].style.marginBottom = 0;
        document.querySelector('.navigation__page--item-' + i + '-add').textContent = "keyboard_arrow_down";
    }
}*/
        /*var coll = document.getElementsByClassName("navigation__page--item");
        var coll2 = document.getElementsByClassName("navigation__page--item-inner");
        var i;
        var j;
        var x = new Array();

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                for(j = 1; j < 6; j++) {
                    x = document.getElementsByClassName("navigation__page--item-i");
                }
                x[i-1].style.marginBottom = coll2[i].scrollHeight + "px";
            });
        } */


/*var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}*/

document.querySelector('.navigation__page--item-1').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-1-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-1').style.marginBottom = '43rem';
        document.querySelector('.inner-1').style.height = '42rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-1').style.marginBottom = 0;
        document.querySelector('.inner-1').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-2').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-2-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = '36rem';
        document.querySelector('.inner-2').style.height = '35rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = 0;
        document.querySelector('.inner-2').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-3').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-3-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-3').style.marginBottom = '62rem';
        document.querySelector('.inner-3').style.height = '61rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-3').style.marginBottom = 0;
        document.querySelector('.inner-3').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-4').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-4-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-4').style.marginBottom = '36rem';
        document.querySelector('.inner-4').style.height = '35rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-4').style.marginBottom = 0;
        document.querySelector('.inner-4').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-5').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-5-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-5').style.marginBottom = '36rem';
        document.querySelector('.inner-5').style.height = '35rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-5').style.marginBottom = 0;
        document.querySelector('.inner-5').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});
/*
document.querySelector('.navigation__page--item-2').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-2-add').textContent;
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = '40rem';
        document.querySelector('.inner-2').style.height = '40rem';
        document.querySelector('.navigation__page--item-2-add').textContent = 'keyboard_arrow_down';
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = 0;
        document.querySelector('.inner-2').style.height = 0;
        document.querySelector('.navigation__page--item-2-add').textContent = 'keyboard_arrow_up';
    }

});*/



