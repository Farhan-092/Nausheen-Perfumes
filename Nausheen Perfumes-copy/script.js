

const imgDivs = document.querySelectorAll('.overlaybox');
const yearSpans = document.querySelectorAll('.year');
const questions = document.querySelectorAll('.question');





window.addEventListener('DOMContentLoaded', function () {
    updateDate();
})


// updating the year automatically
function updateDate (){
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(function (span) {
        span.innerHTML = currentYear;

    })
}


// making the bestsellers grid responsive 
window.addEventListener('resize', function(event){
    if (document.body.clientWidth <= 289) {
        imgDivs.forEach(function (div) {
            div.classList.remove('col-4', 'col-6', 'col-3');
            div.classList.add('col-12');
        })
    }
    else if (document.body.clientWidth >= 299 && document.body.clientWidth <= 600) {
        imgDivs.forEach(function (div) {
            div.classList.remove('col-4','col-12', 'col-3');
            div.classList.add('col-6');
            div.style.padding = '0.5em';
        })
    }
    else if (document.body.clientWidth >= 601 && document.body.clientWidth <= 769){
        imgDivs.forEach(function (div) {
            div.classList.remove('col-3', 'col-6','col-12');
            div.classList.add('col-4');
            div.style.padding = '0';
            // div.style.marginBottom = '1.3em';
        })
    }
    else if (document.body.clientWidth >= 770 && document.body.clientWidth <= 1199){
        imgDivs.forEach(function (div) {
            div.classList.remove('col-3', 'col-6','col-12');
            div.classList.add('col-4');
            div.style.padding = '1.5em';
        });
    }
    else if (document.body.clientWidth >= 1200){
        imgDivs.forEach(function (div) {
            div.classList.remove('col-4', 'col-6','col-12');
            div.classList.add('col-3');
            div.style.padding = '1.5em';
            // div.style.marginBottom = '2em';
        })
    }
})

// making sure the grid is updated automatically without the resize event 
if (window.innerWidth <= 289) {
    imgDivs.forEach(function (div) {
        div.classList.remove('col-4', 'col-6', 'col-3');
        div.classList.add('col-12');
        div.style.padding = '0';

    })
}
else if (window.innerWidth >= 299 && window.innerWidth <= 600) {
    imgDivs.forEach(function (div) {
        div.classList.remove('col-4','col-12', 'col-3');
        div.classList.add('col-6');
        div.style.padding = '0.5em';
    })
}
else if (window.innerWidth >= 601 && window.innerWidth <= 769){
    imgDivs.forEach(function (div) {
        div.classList.remove('col-3', 'col-6','col-12');
        div.classList.add('col-4');
        div.style.padding = '0';
        // div.style.marginBottom = '1.3em';
    })
}
else if (window.innerWidth >= 770 && window.innerWidth <= 1199){
    imgDivs.forEach(function (div) {
        div.classList.remove('col-3', 'col-6','col-12');
        div.classList.add('col-4');
        div.style.padding = '1em';
    });
}
else if (window.innerWidth >= 1200){
    imgDivs.forEach(function (div) {
        div.classList.remove('col-4', 'col-6','col-12');
        div.classList.add('col-3');
        div.style.padding = '1.5em';
        // div.style.marginBottom = '2em';
    })
}



// FAQs page: show and hide answers
questions.forEach(function (question) {
    const btn = question.querySelector('.button')
    btn.addEventListener('click', function () {
        question.classList.toggle('show-answer');
    });
    questions.forEach(function (item) {
        if (item !== question) {
            item.classList.remove('show-answer');
        }
    });
});
const WHATSAPP_NUMBER = '971522631843'
// Open WhatsApp (floating button)
function openWhatsApp() {
    const message = `🌸 *Hello Nausheen Perfumes!*\n\n` +
                   `I'm interested in exploring your exquisite perfume collection.\n\n` +
                   `Could you please share:\n` +
                   `• Latest catalog and featured fragrances\n` +
                   `• Current offers and promotions\n` +
                   `• Delivery information\n\n` +
                   `Looking forward to finding my perfect scent! ✨\n\n` +
                   `Thank you! 🛍️`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
; 