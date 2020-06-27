document.querySelector('button').addEventListener('click', event => {

    // 1 - Preparando o HTML
    const btnRipple = event.target

    const spanOnda = document.createElement('span')
    spanOnda.classList.add('onda')
    btnRipple.insertAdjacentElement('beforeend', spanOnda)

    // 2 - valores de posicao do botão na tela
    const posicoesDoBotao = btnRipple.getBoundingClientRect()

    // calculando a posisão do clique dentro do botão
    const topo = Math.abs(posicoesDoBotao.top - event.clientY)
    const esquerda = Math.abs(posicoesDoBotao.left - event.clientX)
    const scale = Math.min(posicoesDoBotao.height, posicoesDoBotao.width)

    // setando os valores nas propriedades customizadas 
    spanOnda.style.setProperty('--topo', `${topo}px`)
    spanOnda.style.setProperty('--esquerda', `${esquerda}px`)
    spanOnda.style.setProperty('--scale', scale)
    spanOnda.style.setProperty('--opacity', 1)

    // 3 - limpando o efeito
    spanOnda.addEventListener('transitionend', limpaEfeito)

    function limpaEfeito() {
        spanOnda.removeEventListener('transitionend', limpaEfeito)
        spanOnda.style.setProperty('--opacity', 0)

        spanOnda.addEventListener('transitionend', () => {
            spanOnda.remove()
        })
    }
})