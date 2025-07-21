var monthly=document.getElementsByClassName("monthly")[0];
var yearly=document.getElementsByClassName("yearly")[0];

monthly.addEventListener("click",function(){
    monthly.style.backgroundColor="rgb(10,18,34)";
    yearly.style.backgroundColor="rgb(21, 38, 71)";
    document.getElementsByClassName("price")[0].textContent='$199/monthly';
    document.getElementsByClassName("price")[1].textContent='$399/monthly';
    document.getElementsByClassName("price")[2].textContent='$599/monthly';
    
});
yearly.addEventListener("click",function(){
    monthly.style.backgroundColor="rgb(21, 38, 71)";
    yearly.style.backgroundColor="rgb(10,18,34)";
    document.getElementsByClassName("price")[0].textContent='$2388/yearly';
    document.getElementsByClassName("price")[1].textContent='$4788/yearly';
    document.getElementsByClassName("price")[2].textContent='$7188/yearly';

});