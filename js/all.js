const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const imagePicker = document.getElementById('image-picker')
const imageElement = document.getElementById('image-element')

imagePicker.onchange = (event) => {
    const file = event.target.files[0]
    console.log(event.target.files[0]);

    const fileReader = new FileReader()

    fileReader.onload = (e) => {
        const src = e.target.result
        imageElement.src = src
    }

    fileReader.readAsDataURL(file)

}