window.addEventListener("load", () => {
  //start your code here
});
const lowerCaseLetters ="abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = "0123456789"
const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
function onSubmit(event){
  event.preventDefault()
  const input = document.getElementById("password-length")
  const howManyCharacters = input.value
  let startingString = ''
  for (let i= 0; i <howManyCharacters; i++) { 
    const randomIndex = Math.floor(Math.random() *26)
 startingString += lowerCaseLetters[randomIndex]
}
console.log(startingString)
const output = document.getElementById('result')
output.innerHTML = startingString
  
}
document.addEventListener('submit', onSubmit)