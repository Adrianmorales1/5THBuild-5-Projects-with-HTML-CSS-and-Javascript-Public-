const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name1 = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)


function getData() {
    header.innerHTML = '<img src = "student.png" alt = "">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ex.'
    profile_img.innerHTML = '<img src = "https://randomuser.me/api/portraits/men/45.jpg" alt = "">'
    name1.innerHTML = 'John Doe'
    date.innerHTML = 'May 30th, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
