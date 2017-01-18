/**
 * Created by ashishkumar on 1/17/17.
 */
var scroll = false;
window.onscroll = function() {myFunction()};
console.log("now is" +scroll+ "scroll"+document.body.scrollTop);
function myFunction() {
    if (scroll === false){
        console.log(scroll+"scroll"+document.body.scrollTop);
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ) {
            document.body.className = "sticky-header";
        } else {
            document.body.className = "";
        }
    }
}
function myfuncrev(){
    document.body.className = "";
    scroll = false;

}
function myfunc(){
    document.body.className = "sticky-header";
    scroll = true;
    console.log("urs"+scroll+"scroll"+document.body.scrollTop);
}
/*$(function(){
 $(window).scroll(function(){
 var winTop = $(window).scrollTop();
 if(winTop >= 30){
 $("body").addClass("sticky-header");
 }else{
 $("body").removeClass("sticky-header");
 }//if-else
 });//win func.
 });//ready func.*/