// let btn = document.getElementById("btn");
// let hiddedDiv = document.querySelector('.wis')

// btn.addEventListener("click", () => {
//     hiddedDiv.classList.toggle('show')
//     console.log(hiddedDiv.classList)
// })

let wrapper = document.querySelector('.btn-container')
let hiddedDiv = document.querySelector('.HidenText')
wrapper.addEventListener('click', e => {
  if(e.target.tagName === 'P'){
        e.target.parentElement.lastElementChild.classList.toggle("show")
        console.log(e.target.parentElement)
    }
})