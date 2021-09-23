const navbar = () => {
  const navbarCats = document.querySelector('.cats-btn')
  const hobbiesBtn = document.querySelector('.hobbies-btn')
  const catinfo = document.querySelector('.catinfo')
  const hobbies = document.querySelector('.hobbies')

  navbarCats.addEventListener('click', () => {
    navbarCats.classList.add('active')
    catinfo.classList.remove('hidden')
    hobbies.classList.add('hidden')
    hobbiesBtn.classList.remove('active')
  })

  hobbiesBtn.addEventListener('click', () => {
    hobbiesBtn.classList.add('active')
    navbarCats.classList.remove('active')
    catinfo.classList.add('hidden')
    hobbies.classList.remove('hidden')
  })
  }

  export {navbar}
