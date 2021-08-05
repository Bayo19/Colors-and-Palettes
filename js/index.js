(function() {
    const boxAction = document.querySelectorAll('.box')
    const modalBg = document.querySelector('.modal-bg')
    const modalClose = document.querySelector('.modal-close')
    const header = document.querySelector('.title')
    const paragraph = document.querySelector('.paragraph')
    const textBox = document.querySelector('.text')
    const hexColor = document.querySelector('.hexcol')
    const rgbColor = document.querySelector('.rgbcol')
    const hslColor = document.querySelector('.hslcol')
    const s1 = document.querySelector('.s1')
    const s1Text = document.querySelector('.s1-txt')
    const s2 = document.querySelector('.s2')
    const s2Text = document.querySelector('.s2-txt')
    const s3 = document.querySelector('.s3')
    const s3Text = document.querySelector('.s3-txt')
    const s4 = document.querySelector('.s4')
    const s4Text = document.querySelector('.s4-txt')
    const s5 = document.querySelector('.s5')
    const s5Text = document.querySelector('.s5-txt')
    const a1 = document.querySelector('.a1')
    const a2 = document.querySelector('.a2')
    const a3 = document.querySelector('.a3')
    const a4 = document.querySelector('.a4')
    const a5 = document.querySelector('.a5')
    const sp = document.querySelectorAll('.sp')
    const generate = document.querySelector('.generate')
    const save = document.querySelector('.save')
    const boxesss = document.querySelector('.boxes')
    const pGraph = document.querySelector('.p-graph')
    console.log(boxesss.children)

    const hex2RGB = function(hex) {
        let r, g, b
        let color = hex.replace(/#/g, '').split('')

        r = parseInt(color.splice(0, 2).join(''), 16)
        g = parseInt(color.splice(0, 2).join(''), 16)
        b = parseInt(color.splice(0, 2).join(''), 16)
        return `rgb(${r}, ${g}, ${b})`
    }

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

    // function to access colormind api
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        return response.json()
    }


    let modalFunction = function(col) {
        let [red, green, blue] = col

        fetch(`https://www.thecolorapi.com/id?rgb=${red},${green},${blue}`)
            .then(res => res.json())
            .then(data => (header.textContent = data.name.value,
                header.style.color = data.rgb.value,
                paragraph.style.color = data.rgb.value,
                data.hsl.l < 70 ? modalClose.style.color = 'white' : modalClose.style.color = 'black',
                modalClose.style.backgroundColor = data.rgb.value,
                textBox.style.border = `thick solid ${data.rgb.value}`,
                rgbColor.textContent = data.rgb.value,
                hexColor.textContent = data.hex.value.replace(/#/g, ''),
                hslColor.textContent = data.hsl.value,
                pGraph.textContent = `Click GENERATE to find new palettes based on ${data.name.value}`
            ))

        fetch(`https://www.thecolorapi.com/scheme?rgb=${red},${green},${blue}&mode=monochrome`)
            .then(res => res.json())
            .then(data => (
                s1.style.backgroundColor = data.colors[0].rgb.value,
                s1Text.textContent = data.colors[0].hex.value.replace(/#/g, ''),
                data.colors[0].hsl.l < 40 ? s1Text.style.color = 'white' : s1Text.style.color = 'black',
                s2.style.backgroundColor = data.colors[1].rgb.value,
                s2Text.textContent = data.colors[1].hex.value.replace(/#/g, ''),
                data.colors[1].hsl.l < 30 ? s2Text.style.color = 'white' : s2Text.style.color = 'black',
                s3.style.backgroundColor = data.colors[2].rgb.value,
                s3Text.textContent = data.colors[2].hex.value.replace(/#/g, ''),
                data.colors[2].hsl.l < 30 ? s3Text.style.color = 'white' : s3Text.style.color = 'black',
                s4.style.backgroundColor = data.colors[3].rgb.value,
                s4Text.textContent = data.colors[3].hex.value.replace(/#/g, ''),
                data.colors[3].hsl.l < 36 ? s4Text.style.color = 'white' : s4Text.style.color = 'black',
                s5.style.backgroundColor = data.colors[4].rgb.value,
                s5Text.textContent = data.colors[4].hex.value.replace(/#/g, ''),
                data.colors[4].hsl.l < 30 ? s5Text.style.color = 'white' : s5Text.style.color = 'black'
            ))

        // random colormind schemes for each color
        postData('http://colormind.io/api/', {
                model: "default",
                input: [
                    [red, green, blue],
                    "N", "N", "N", "N"
                ],
            })
            .then(data => (a1.style.background = `rgb(${data.result[0][0]},${data.result[0][1]},${data.result[0][2]})`,
                a1.children[0].textContent = toHex(getComputedStyle(a1).getPropertyValue('background-color')).replace(/#/g, ''),
                a2.style.background = `rgb(${data.result[1][0]},${data.result[1][1]},${data.result[1][2]})`,
                a2.children[0].textContent = toHex(getComputedStyle(a2).getPropertyValue('background-color')).replace(/#/g, ''),
                a3.style.background = `rgb(${data.result[2][0]},${data.result[2][1]},${data.result[2][2]})`,
                a3.children[0].textContent = toHex(getComputedStyle(a3).getPropertyValue('background-color')).replace(/#/g, ''),
                a4.style.background = `rgb(${data.result[3][0]},${data.result[3][1]},${data.result[3][2]})`,
                a4.children[0].textContent = toHex(getComputedStyle(a4).getPropertyValue('background-color')).replace(/#/g, ''),
                a5.style.background = `rgb(${data.result[4][0]},${data.result[4][1]},${data.result[4][2]})`,
                a5.children[0].textContent = toHex(getComputedStyle(a5).getPropertyValue('background-color')).replace(/#/g, '')
            ))
        modalBg.classList.add('bg-active')
        console.log(modalBg.classList.length)
        setTimeout(function() {
            for (x of sp) {
                let res = getComputedStyle(x).getPropertyValue('background-color').replace(/[a-z\(\)]/g, '').split(',')
                let [r, g, b] = res
                let hsp = Math.sqrt(
                    0.299 * (r * r) +
                    0.587 * (g * g) +
                    0.114 * (b * b)
                )
                if (hsp >= 128) {
                    x.children[0].style.color = 'black'
                } else {
                    x.children[0].style.color = 'white'
                }
            }
        }, 450)
    }

    // -----------------------------------------

    // Applying random colors to the boxes on main page
    const boxes = Array.from(boxAction)

    for (let box of boxes) {

        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)

        fetch(`https://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
            .then(res => res.json())
            .then(data => box.style.backgroundColor = data.rgb.value)

        box.addEventListener('click', function(e) {
            let col = e.target.style['background-color'].replace(/[a-z\(\)]/g, '').split(',')
            modalFunction(col)
        })
    }

    //  only works locally due to clipboard api not being allowed without https
    const copytoClipboard = async function(e) {
        if (!navigator.clipboard) {
            return
        }

        const text = e.target.textContent
        const hexValidate = /[0-9A-Fa-f]{6}/g
        try {
            if (hexValidate.test(text)) {
                await navigator.clipboard.writeText('#' + text)
            } else {
                await navigator.clipboard.writeText(text)
            }

            e.target.textContent = 'Copied to clipboard'
            setTimeout(function() {
                e.target.textContent = text
            }, 1400)
        } catch (err) {
            console.error('Failed to copy!', err)
        }
    }


    let items = [hexColor, rgbColor, hslColor, s1Text, s2Text, s3Text, s4Text, s5Text, a1.children[0], a2.children[0], a3.children[0], a4.children[0], a5.children[0]]

    items.forEach(function(item) {
        item.addEventListener('dblclick', copytoClipboard)
    })


    const refreshColors = function(box) {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        fetch(`https://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
            .then(res => res.json())
            .then(data => box.style.backgroundColor = data.rgb.value)
    }

    document.body.addEventListener('keypress', function(e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault()
            boxes.map(refreshColors)
        }
    })

    const newButton = document.querySelector('.new-colors-p')
    newButton.addEventListener('click', function() {
        boxes.map(refreshColors)

    })

    modalClose.addEventListener('click', function() {
        modalBg.classList.remove('bg-active')
        setTimeout(function() {
            save.textContent = 'SAVE'
            save.style.color = '#777'
        }, 500)
    })

    window.addEventListener('click', function(e) {
        if (e.target == modalBg) {
            modalBg.classList.remove('bg-active')
            setTimeout(function() {
                save.textContent = 'SAVE'
                save.style.color = '#777'
            }, 500)
        }
    })



    const shuffle = function(arr) {
        let newPos
        let temp
        for (let i = arr.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1))
            temp = arr[i]
            arr[i] = arr[newPos]
            arr[newPos] = temp
        }
        return arr
    }

    const switchBoxes = function() {
        const paletteParent = document.querySelector('.scheme-pallete')
        const paletteChildren = Array.from(paletteParent.childNodes)
        const newChildren = shuffle(paletteChildren)
        paletteParent.append(...newChildren)
    }

    // new color scheme for each color everytime generate is clicked
    generate.addEventListener('click', function() {
        let color = generate.parentElement.parentElement.children[0].children[0].style.color.replace(/[a-z\(\)]/g, '').split(',')
        let [r, g, b] = color
        postData('http://colormind.io/api/', {
                model: "default",
                input: [
                    [r, g, b],
                    "N", "N", "N", "N"
                ],
            })
            .then(data => (a1.style.background = `rgb(${data.result[0][0]},${data.result[0][1]},${data.result[0][2]})`,
                a1.children[0].textContent = toHex(getComputedStyle(a1).getPropertyValue('background-color')).replace(/#/g, ''),
                a2.style.background = `rgb(${data.result[1][0]},${data.result[1][1]},${data.result[1][2]})`,
                a2.children[0].textContent = toHex(getComputedStyle(a2).getPropertyValue('background-color')).replace(/#/g, ''),
                a3.style.background = `rgb(${data.result[2][0]},${data.result[2][1]},${data.result[2][2]})`,
                a3.children[0].textContent = toHex(getComputedStyle(a3).getPropertyValue('background-color')).replace(/#/g, ''),
                a4.style.background = `rgb(${data.result[3][0]},${data.result[3][1]},${data.result[3][2]})`,
                a4.children[0].textContent = toHex(getComputedStyle(a4).getPropertyValue('background-color')).replace(/#/g, ''),
                a5.style.background = `rgb(${data.result[4][0]},${data.result[4][1]},${data.result[4][2]})`,
                a5.children[0].textContent = toHex(getComputedStyle(a5).getPropertyValue('background-color')).replace(/#/g, ''),
                switchBoxes()
            ))
            //setTime out for smoother animation of any text that changes color when the background contrast changes
        setTimeout(function() {
            for (x of sp) {
                let res = getComputedStyle(x).getPropertyValue('background-color').replace(/[a-z\(\)]/g, '').split(',')
                let [r, g, b] = res
                let hsp = Math.sqrt(
                    0.299 * (r * r) +
                    0.587 * (g * g) +
                    0.114 * (b * b)
                )
                if (hsp >= 128) {
                    x.children[0].style.color = 'black'
                } else {
                    x.children[0].style.color = 'white'
                }
            }
        }, 393)
        save.textContent = 'SAVE'
        save.style.color = '#777'
    })

    // 'save' palette to local storage
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    localStorage.setItem('items', JSON.stringify(itemsArray))

    save.addEventListener('click', function() {
        const paletteParent = document.querySelector('.scheme-pallete')

        let colorArray = Array.from(paletteParent.children)

        let savedColors = [colorArray[0].outerText, colorArray[1].outerText, colorArray[2].outerText, colorArray[3].outerText, colorArray[4].outerText]

        if (itemsArray.some(function(el) { return JSON.stringify(el) == JSON.stringify(savedColors) })) {
            return
        } else {
            itemsArray.push(savedColors)
        }

        localStorage.setItem('items', JSON.stringify(itemsArray))
        this.textContent = 'SAVED'
        this.style.color = 'red'

    })

    // toggle navigation
    let nav = document.querySelector('.more')
    let navLinks = document.querySelector('.nav-links-remove')

    const openClose = function() {

        if (navLinks.classList.value == 'nav-links') {
            navLinks.classList.remove('nav-links')
            navLinks.classList.add('nav-links-remove')
            console.log(navLinks.classList.value)

        } else if (navLinks.classList.value == 'nav-links-remove') {
            navLinks.classList.remove('nav-links-remove')
            navLinks.classList.add('nav-links')
            console.log(navLinks.classList.value)

        }
    }

    nav.addEventListener('click', openClose)

    // search for color
    const search = document.getElementById('form-for-search')
    const inputSearch = document.getElementById('text-search')

    const searchColor = function(e) {
        const hexValidate = /#[0-9A-Fa-f]{6}/g
        const hexValidateNoHash = /[0-9A-Fa-f]{6}/g
        const text = inputSearch.value
        const hashed = '#' + inputSearch.value
        let newRGB
        let col
        if (hexValidate.test(text)) {
            newRGB = hex2RGB(inputSearch.value)
            col = newRGB.replace(/[a-z\(\)]/g, '').split(',')
            modalFunction(col)
        } else if (hexValidateNoHash.test(text)) {
            newRGB = hex2RGB(hashed)
            col = newRGB.replace(/[a-z\(\)]/g, '').split(',')
            modalFunction(col)
        } else {
            newRGB = inputSearch.value
            col = newRGB.replace(/[a-z\(\)]/g, '').split(',')
            modalFunction(col)
        }

        e.preventDefault()
        e.stopImmediatePropagation()
    }
    search.addEventListener('submit', searchColor)
})();