// Multiply numeric property values by 2


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

 function multiplyNumeric(obj) {
   for(let beep in obj){
     if(typeof obj[beep] == "number"){
       obj[beep] *= 2
     }
    
   }
  
 }

  multiplyNumeric(menu);
  console.log(menu)

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.
