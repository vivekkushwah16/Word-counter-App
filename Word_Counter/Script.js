let box = document.getElementById("textbox");
box.addEventListener('input',function(){
   let text = this.value;
   let ch = text.length;
   document.getElementById("characters").innerHTML=ch;
   text=text.trim();
   let wd = text.split(" ");
   let clearlist = wd.filter(function(elm){
       return elm != "";
   });
   console.log(clearlist)
   document.getElementById("words").innerHTML=clearlist.length; 
})