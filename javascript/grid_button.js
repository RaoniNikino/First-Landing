const grid = () =>{
const displaybtn = document.querySelector('.display-btn')
const content = document.querySelector('#hidden-content')
displaybtn.addEventListener('click', () => {
  content.classList.toggle('hidden')
})
}

export {grid}
