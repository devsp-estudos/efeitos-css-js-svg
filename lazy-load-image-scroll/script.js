window.addEventListener('scroll', () => {

    document.querySelectorAll('img').forEach(img => {

        // codigo resposavel po identificar quando as imagens entram na tela
        // img.getBoundingClientRect().top < window.innerHeight

        if (img.getBoundingClientRect().top < window.innerHeight) {

            img.src = img.getAttribute('data-src')

        }
    })

})
