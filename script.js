//document.getElementById('header__top--bars').onclick = 

/*var x = document.querySelector('#header__top--btn');
console.log(x);
x.addEventListener('click', function() {
    document.querySelector('.navigation').style.width = "100px";
});*/

/*document.getElementById("header__top--btn").onclick = () => {
    document.getElementsById("navigation").style.width = "100px";
}*/

document.getElementById("header__top--btn").onclick = function() {myFunction()};        
        function myFunction() {
            var el = document.querySelector('.navigation');
            el.style.height = "100vh";
            document.body.style.backgroundColor = "grey";
        }
        document.getElementById("navigation__page--btn").onclick = function() {myFun()};        
        function myFun() {
            var el = document.querySelector('.navigation');
            el.style.height = "0";
            document.body.style.backgroundColor = "white";
        }

        /*document.getElementById("add-list-1").onclick = function() {addList()};
        function addList() {
            var el = document.querySelector('.navigation__page--item-inner');
            el.style.height = "70px";
            var el2 = document.querySelector('navigation__page--item-1');
            el2.style.paddingBottom = "100px";
        }*/

        document.querySelector('.navigation__page--item-1').addEventListener('click', function() {
            var el = document.querySelector('.navigation__page--item-1-add').textContent;

            if(el === 'keyboard_arrow_down') {
                document.querySelector('.navigation__page--item-inner').style.height = "15rem";
                document.querySelector('.navigation__page--item-1').style.marginBottom = "15rem";
                document.querySelector('.navigation__page--item-1-add').textContent = "keyboard_arrow_up";
            }else if (el === 'keyboard_arrow_up') {
                document.querySelector('.navigation__page--item-inner').style.height = 0;
                document.querySelector('.navigation__page--item-1').style.marginBottom = 0;
                document.querySelector('.navigation__page--item-1-add').textContent = "keyboard_arrow_down";
            }
            
        });

