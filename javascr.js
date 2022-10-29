var myText =document.getElementById('my-text');
var result=document.getElementById('result');
var limit=120;
result.textContent= 0 + "/" + limit;
myText.addEventListener("input",function(){
    var textLenght=myText.value.length;
    result.textContent=textLenght + "/" + limit;

    if(textLenght > limit){
        myText.style.borderColor="#ff2851";
        result.style.color="#ff2851";
    }
    else{
        myText.style.borderColor="#b2b2b2";
        result.style.color="#737373";
    }
});