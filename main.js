// nav------------

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// footer------------

const footerYear = document.querySelector('.footer_year');

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();