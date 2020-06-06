(function() {

        const palettes = JSON.parse(localStorage.getItem('items'))
        const root = document.querySelector('#saved-root')

        if (palettes.length > 0) {
            root.innerHTML = `${
        palettes.map(function(palette){
    
            return `<div class="saved-palette">
                <div class="saved-palette-child-one" style="background:${'#' + palette[0]}"></div>
                <div class="saved-palette-child-two" style="background:${'#' + palette[1]}"></div>
                <div class="saved-palette-child-three" style="background:${'#' + palette[2]}"></div>
                <div class="saved-palette-child-four" style="background:${'#' + palette[3]}"></div>
                <div class="saved-palette-child-five" style="background:${'#' + palette[4]}"></div>
                </div>`
            }).join('')
        }`
    }
        
    console.log(palettes)
})()