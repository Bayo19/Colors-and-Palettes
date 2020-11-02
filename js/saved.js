(function() {
        //toggle navigation
        const nav = document.querySelector('.more')
        const navLinks = document.querySelector('.nav-links-remove')

        const openClose = function() {

            if (navLinks.classList.value == 'nav-links') {
                navLinks.classList.remove('nav-links')
                navLinks.classList.add('nav-links-remove')

            } else if (navLinks.classList.value == 'nav-links-remove') {
                navLinks.classList.remove('nav-links-remove')
                navLinks.classList.add('nav-links')
            }
        }

        nav.addEventListener('click', openClose)

        function toHex(val) {
            x = val.replace(/[a-z\(\)]/g, '').split(',').map(function(x) {
                return Number(x)
            })

            let rr = x[0].toString(16)
            if (rr.length < 2) {
                rr = `0${rr}`
            }
            let gg = x[1].toString(16)
            if (gg.length < 2) {
                gg = `0${gg}`
            }
            let bb = x[2].toString(16)
            if (bb.length < 2) {
                bb = `0${bb}`
            }

            let res = `#${rr}${gg}${bb}`
            return res.toUpperCase()
        }

        const palettes = JSON.parse(localStorage.getItem('items'))

        const root = document.querySelector('#saved-root')

        if (palettes.length > 0) {
            root.innerHTML = `${
        palettes.map(function(palette){
    
            return `<div id="saved-palette">
                <div class="saved-palette-child-one" style="background:${'#' + palette[0]}"><p>${palette[0]}</p></div>
                <div class="saved-palette-child-two" style="background:${'#' + palette[1]}"><p>${palette[1]}</p></div>
                <div class="saved-palette-child-three" style="background:${'#' + palette[2]}"><p>${palette[2]}</p></div>
                <div class="saved-palette-child-four" style="background:${'#' + palette[3]}"><p>${palette[3]}</p></div>
                <div class="saved-palette-child-five" style="background:${'#' + palette[4]}"><p>${palette[4]}</p></div>
                </div>`
            }).join('')
        }`
    }       
    
    document.addEventListener('load', function(e){
        if(e.target && e.target.id == 'saved-palette') {
            console.log('hello')
        }
    })
  
    // document.addEventListener('dblclick', function(e){

    //     let res = e.target.style.backgroundColor.replace(/[a-z\(\)]/g, '').split(',')
    //     let [r, g, b] = res
    //     let hsp = Math.sqrt(
    //         0.299 * (r * r) +
    //         0.587 * (g * g) +
    //         0.114 * (b * b)
    //     )
    //     if (hsp >= 128) {
    //         e.target.style.color = 'black'
    //     } else {
    //     e.target.style.color = 'white'
    //     }

    //     if(e.target && e.target.className == 'saved-palette-child-one'|| e.target.className == 'saved-palette-child-two'|| e.target.className == 'saved-palette-child-three' || e.target.className == 'saved-palette-child-four' || e.target.className == 'saved-palette-child-five') {
    //         console.log(e.target.style.backgroundColor)
    //         navigator.clipboard.writeText(toHex(e.target.style.backgroundColor))
    //         e.target.textContent = 'copied'
    //         setTimeout(function() {
    //             e.target.textContent = ''
    //         }, 1200)
    //     }
    // })

    
})()