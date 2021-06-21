const state = {
  value: ""
}
let modal = document.querySelector(".modal")
let wrapper = document.querySelector('.btn-container')
let hiddedDiv = document.querySelector('.HidenText')
wrapper.addEventListener('click', e => {
  if(e.target.tagName === 'P'){
        e.target.parentElement.lastElementChild.classList.toggle("show")
        console.log(e.target.parentElement)
    }
})
console.log(modal.children.length);
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
let emailInput = document.querySelector(".Email_Reg")
let buttonGetStarted = document.querySelector(".Get_Started_Btn")
  buttonGetStarted.addEventListener("click", (e) => {
      if(validateEmail(state.value) && (modal.children.length < 1)){ 
        modal.style.display = "flex"
        let p = document.createElement("p");
        let text = document.createTextNode("Successful")
        p.appendChild(text)
        modal.appendChild(p)
        setTimeout(()=> {
          modal.style.display = "none"
          modal.removeChild(p)
        },2000)
      }else if(!validateEmail(state.value) && (modal.children.length < 1)){
        modal.style.display = "flex"
        modal.style.backgroundColor = "red";
        modal.style.borderColor = "red"
        let p = document.createElement("p");
        let text = document.createTextNode("Please enter a valid email.")
        p.appendChild(text)
        modal.appendChild(p)
        setTimeout(()=> {
          modal.style.display = "none"
          modal.style.backgroundColor = "green";
          modal.style.borderColor = "green"
          modal.removeChild(p)
          
        },2000)
      }

  })
  emailInput.addEventListener('change',(e) => {
      state.value = e.target.value
  })