window.addEventListener("load", () => {
  //start your code here
});
const lowerCaseLetters ="abcdefghijklmnopqrstuvwxyz"
function onSubmit(event){
  const input = document.getElementById("password-lenght")
  const howManyCharacters = input.value
  for (let i= 0; i <howManyCharacters; i++) { 
    const randomIndex = Math.floor(Math.random()+26)
 startingString += lowerCaseLetters[randomIndex]
}
console.log(startingString)

  
}