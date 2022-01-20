let code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let userInput = [];


// checks for key-presses done by the user on the given webpage
document.onkeydown = function (event) {
  userInput.push(event.key);
  //checks every input  if it is correct, else dumps array so user can restart
  let inProcess = codeCheck(userInput.length);
  if(inProcess == false){
    userInput = [];
  }
  if(userInput.length == 10){
    let ok = codeCheck(userInput.length);
    if(ok){
      //document.getElementById("pHeader").textContent = "Secret Found :)";
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }

};

let codeCheck = function(size){
  let correct = 0;
  for (let index = 0; index < size; index++) {
    if(code[index] == userInput[index]){
      correct++;
    }
  }
  if(correct == size){
    return true;
  }                           
  return false;
};