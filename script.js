/* .js files add interaction to your website */


var factList = ["By 2050 there will be more plastic than fish in the ocean!", "80% of plastic pollution in the ocean comes from 20 countries!", "70% of ocean garbage sinks to the ocean floor!","1 million marine animals are killed due to Ocean pollution"];


var factOutput = document.getElementById("output");
var factButton = document.getElementById("facts");
var count = 0;


factButton.addEventListener("click",displayFact);



function displayFact(){
factOutput.innerHTML=factList[count];
  count=count+1;
if(count==factList.length){
count=0;  
}
}
