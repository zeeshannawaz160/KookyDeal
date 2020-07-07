
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

        /*document.querySelector('.navigation__page--item-1').addEventListener('click', function() {
            var el = document.querySelector('.navigation__page--item-1-add').textContent;

            if(el === 'keyboard_arrow_down') {
                document.querySelector('.navigation__page--item-inner').style.height = "15rem";
                document.querySelector('.navigation__page--item-1').style.marginBottom = document.querySelector('.navigation__page--item-inner').style.height;
                document.querySelector('.navigation__page--item-1-add').textContent = "keyboard_arrow_up";
            }else if (el === 'keyboard_arrow_up') {
                document.querySelector('.navigation__page--item-inner').style.height = 0;
                document.querySelector('.navigation__page--item-1').style.marginBottom = 0;
                document.querySelector('.navigation__page--item-1-add').textContent = "keyboard_arrow_down";
            }
            
        });*/


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



