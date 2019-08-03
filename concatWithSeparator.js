function concatWithSeparator(newString, string)
{
  var result = '';
  for(var i=0;i<string.length;i++) { 
     result = result + string[i]; 
     if(i+i<string.length) { 
         result = result + separator 
     } 
  }
  return result;
}

var string = ["USA","Mexico","Canada"]
var separator = "///"
var newString = ''; 

result = concatWithSeparator(newString, string);