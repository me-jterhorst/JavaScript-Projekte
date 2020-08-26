window.addEventListener('DOMContentLoaded', function() {

const TESTIMONIAL = 
[
    {
        picture: "img/jedd-saliba-_ykWgC5SVMU-unsplash.jpg",
        rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
        author: "Jedd Saliba",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper auctor tellus vitae hendrerit. Vestibulum ante lacus, consequat vitae lobortis a, fringilla sed metus. Ut id iaculis justo. Duis vel viverra lacus, ut imperdiet leo. Sed id eros nec nibh molestie blandit eu sed mi. Sed odio neque, egestas ac ornare et, cursus a odio. Etiam aliquam lectus urna, sit amet dapibus magna maximus eu."

    },
    {
        picture: "img/marco-testi-RQUdGsK6_gE-unsplash.jpg",
        rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
        author: "Marco Testi",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper auctor tellus vitae hendrerit. Vestibulum ante lacus, consequat vitae lobortis a, id iaculis justo. Lacus, ut imperdiet leo. Sed id eros nec nibh molestie blandit eu sed mi. Sed odio neque, egestas ac ornare et, cursus a odio. Etiam aliquam lectus urna, sit amet dapibus magna maximus eu."

    },
    {
        picture: "img/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg",
        rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>',
        author: "Peri Stojnic",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper auctor tellus vitae hendrerit. Vestibulum ante lacus, consequat vitae lobortis a, fringilla sed metus. Ut id iaculis justo. Duis vel viverra lacus, ut imperdiet leo. Sed id eros nec nibh molestie blandit eu sed mi. Sed odio neque, egestas ac ornare et, cursus a odio. Etiam aliquam lectus urna, sit amet dapibus magna maximus eu."

    },
    {
        picture: "img/brian-lundquist--dAksd12l9E-unsplash.jpg",
        rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
        author: "Brian Lundquist",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper auctor tellus vitae hendrerit. Consequat vitae lobortis a, fringilla sed metus. Ut id iaculis justo. Duis vel viverra lacus, ut imperdiet leo. Sed id eros nec nibh molestie blandit eu sed mi. Sed odio neque, egestas ac ornare et, cursus a odio. Etiam aliquam lectus urna, sit amet dapibus magna maximus eu."

    },
    {
        picture: "img/kelly-fournier-d9YXhgFAmIQ-unsplash.jpg",
        rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>',
        author: "Kelly Fournier",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper auctor tellus vitae hendrerit. Vestibulum ante lacus, consequat vitae lobortis a, fringilla sed metus. Ut id iaculis justo. Duis vel viverra lacus, ut imperdiet leo. Sed id eros nec nibh molestie blandit eu sed mi. Sed odio neque, egestas ac ornare et, cursus a odio. Etiam aliquam lectus urna, sit amet dapibus magna maximus eu."

    },
]

const PICTURE = document.getElementById('picture');
const RATING = document.getElementById('rating');
const AUTHOR = document.getElementById('author');
const QUOTE = document.querySelector('.quote');
const PREV_BTN =  document.querySelector('#prevBtn');
const NEXT_BTN = document. querySelector('#nextBtn');

let i = 0;

PICTURE.style.backgroundImage = `url('${TESTIMONIAL[i].picture}')`;
RATING.innerHTML = TESTIMONIAL[i].rating;
AUTHOR.textContent = TESTIMONIAL[i].author;
QUOTE.textContent = TESTIMONIAL[i].quote;

PREV_BTN.addEventListener('click', event => {
    console.log("hello");
    if( i === 0) 
    {
        i = TESTIMONIAL.length - 1; 
        PICTURE.style.backgroundImage = `url('${TESTIMONIAL[i].picture}')`;
        RATING.innerHTML = TESTIMONIAL[i].rating;
        AUTHOR.textContent = TESTIMONIAL[i].author;
        QUOTE.textContent = TESTIMONIAL[i].quote;   
    } 
    else 
    {
        i--;
        PICTURE.style.backgroundImage = `url('${TESTIMONIAL[i].picture}')`;
        RATING.innerHTML = TESTIMONIAL[i].rating;
        AUTHOR.textContent = TESTIMONIAL[i].author;
        QUOTE.textContent = TESTIMONIAL[i].quote;
    }
})

NEXT_BTN.addEventListener('click', event => {
    console.log("hello");
    if( i === TESTIMONIAL.length - 1) 
    {
        i = 0; 
        PICTURE.style.backgroundImage = `url('${TESTIMONIAL[i].picture}')`;
        RATING.innerHTML = TESTIMONIAL[i].rating;
        AUTHOR.textContent = TESTIMONIAL[i].author;
        QUOTE.textContent = TESTIMONIAL[i].quote;   
    } 
    else 
    {
        i++;
        PICTURE.style.backgroundImage = `url('${TESTIMONIAL[i].picture}')`;
        RATING.innerHTML = TESTIMONIAL[i].rating;
        AUTHOR.textContent = TESTIMONIAL[i].author;
        QUOTE.textContent = TESTIMONIAL[i].quote;
    }
})



},true)