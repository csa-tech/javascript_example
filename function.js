//define a string
var mystring = "string"
let mystrin2 = "string"
var mystring = "string2"
mystring2 = "string2"


//define an array
var array = [1,2,3,4,5]
console.log(array)



//define a function
function homework(subject, call){
  setTimeout(function(){console.log("doing " + subject + " homework")}, 300)
  call()
}




//function call
homework("math", callback)




//callback
function callback(){
  console.log("finished homework")
}
