var div1=createDiv("div","class","container");
 var div2=createDiv("div","class","row modified d-flex");
 var div3=createDiv("div","class","col col1 col-sm-12 col-md-12 col-lg-6 m-2");
 
 
 function createDiv(tagname,attrname,attrvalue){
     var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue)
     return ele;
 }
 
