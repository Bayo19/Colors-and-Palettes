(function() {
    let box = document.querySelector('.box')
    let box2 = document.querySelector('.box2')
    let box3 = document.querySelector('.box3')
    let box4 = document.querySelector('.box4')
    let box5 = document.querySelector('.box5')
    let box6 = document.querySelector('.box6')
    let box7 = document.querySelector('.box7')
    let randombtn = document.querySelector('.btn')
    let allbox = document.querySelectorAll('.allbox')
    let numberInput = document.querySelector('.number-input')
    const startColor = document.querySelector('#start-color')
    const endColor = document.querySelector('#end-color')
    const backgroundBox = document.querySelector('.background-box')
    const cssInfo = document.querySelector('.css-info')

    const directions = ['to right', 'to right bottom', 'to left', 'to left bottom', 'to right top']

    const toHex = function(val) {
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

            e.target.textContent = 'Copied'
            setTimeout(function() {
                e.target.textContent = text
            }, 1400)
        } catch (err) {
            console.error('Failed to copy!', err)
        }
    }

    const changeColor = function() {
        for (x of allbox) {
            let res = getComputedStyle(x).getPropertyValue('background-color').replace(/[a-z\(\)]/g, '').split(',')
            let [r, g, b] = res
            let hsp = Math.sqrt(
                0.299 * (r * r) +
                0.587 * (g * g) +
                0.114 * (b * b)
            )
            if (hsp > 140.5) {
                x.children[0].style.color = 'black'
            } else {
                x.children[0].style.color = 'white'
            }
        }
    }

    const newColor = function() {
        let r, g, b
        r = Math.floor(Math.random() * 256)
        g = Math.floor(Math.random() * 256)
        b = Math.floor(Math.random() * 256)

        return `rgb(${r},${g},${b})`
    }

    const complement = function(x) {
        let y = tinycolor(x).analogous()
        let z = y[Math.floor(Math.random() * y.length)]

        function getRandomSpin(min, max) {
            return Math.random() * (max - min) + min;
        }

        return tinycolor(`rgb(${Math.floor(z['_r'])}, ${Math.floor(z['_g'])}, ${Math.floor(z['_b'])})`).darken(13).saturate(14).spin(getRandomSpin(-65, 65)).toString()

    }

    const getNewColor = (a, c = complement(a)) => {
        return d3.quantize(d3.interpolateHcl(a, c), 7)

    }

    const setCSSInfo = function() {
        let first, second, third, fourth, fifth, sixth, seventh
        first = toHex(getComputedStyle(box).getPropertyValue('background-color'))
        second = toHex(getComputedStyle(box5).getPropertyValue('background-color'))
        third = toHex(getComputedStyle(box3).getPropertyValue('background-color'))
        fourth = toHex(getComputedStyle(box7).getPropertyValue('background-color'))
        fifth = toHex(getComputedStyle(box4).getPropertyValue('background-color'))
        sixth = toHex(getComputedStyle(box6).getPropertyValue('background-color'))
        seventh = toHex(getComputedStyle(box2).getPropertyValue('background-color'))

        let direction = directions[Math.floor(Math.random() * directions.length)]
        backgroundBox.style.background = `linear-gradient(${direction}, ${first}, ${second}, ${third}, ${fourth}, ${fifth}, ${sixth}, ${seventh})`
        cssInfo.children[0].textContent = `background: linear-gradient(${direction}, ${first}, ${second}, ${third}, ${fourth}, ${fifth}, ${sixth}, ${seventh})`
        cssInfo.children[0].style.color = '#dee'
    }

    function moreColor() {
        // setting color of boxes
        let res = getNewColor(newColor())
        box.style.backgroundColor = res[0]
        box2.style.backgroundColor = res[6]
        box3.style.backgroundColor = res[2]
        box5.style.backgroundColor = res[1]
        box4.style.backgroundColor = res[4]
        box6.style.backgroundColor = res[5]
        box7.style.backgroundColor = res[3]

        // text in box and styling either black or white
        for (x of allbox) {
            let res = getComputedStyle(x).getPropertyValue('background-color').replace(/[a-z\(\)]/g, '').split(',')
            let [r, g, b] = res
            let hsp = Math.sqrt(
                0.299 * (r * r) +
                0.587 * (g * g) +
                0.114 * (b * b)
            )
            if (hsp > 140.5) {
                x.children[0].style.color = 'black'
            } else {
                x.children[0].style.color = 'white'
            }

            x.children[0].textContent = toHex(getComputedStyle(x).getPropertyValue('background-color')).replace(/#/g, '')

            setCSSInfo()

        }
        startColor.value = '#'
        startColor.value += box.children[0].textContent
        endColor.value = '#'
        endColor.value += box2.children[0].textContent
    }

    function numberOfColors() {
        if (numberInput.value == 2) {
            box.style.display = 'flex'
            box2.style.display = 'flex'
            box3.style.display = 'none'
            box4.style.display = 'none'
            box5.style.display = 'none'
            box6.style.display = 'none'
            box7.style.display = 'none'
        } else if (numberInput.value == 3) {
            box.style.display = 'flex'
            box2.style.display = 'flex'
            box3.style.display = 'flex'
            box4.style.display = 'none'
            box5.style.display = 'none'
            box6.style.display = 'none'
            box7.style.display = 'none'
        } else if (numberInput.value == 4) {
            box.style.display = 'flex'
            box2.style.display = 'flex'
            box3.style.display = 'flex'
            box4.style.display = 'flex'
            box5.style.display = 'none'
            box6.style.display = 'none'
            box7.style.display = 'none'
        } else if (numberInput.value == 5) {
            box.style.display = 'flex'
            box2.style.display = 'flex'
            box3.style.display = 'flex'
            box4.style.display = 'flex'
            box5.style.display = 'flex'
            box6.style.display = 'none'
            box7.style.display = 'none'
        } else if (numberInput.value == 6) {
            box.style.display = 'flex'
            box2.style.display = 'flex'
            box3.style.display = 'flex'
            box4.style.display = 'flex'
            box5.style.display = 'flex'
            box6.style.display = 'flex'
            box7.style.display = 'none'
        } else if (numberInput.value == 7) {
            box.style.display = 'flex'
            box2.style.display = 'flex'
            box3.style.display = 'flex'
            box4.style.display = 'flex'
            box5.style.display = 'flex'
            box6.style.display = 'flex'
            box7.style.display = 'flex'
        }
    }

    startColor.addEventListener('keyup', function() {
        let c = getComputedStyle(box2).getPropertyValue('background-color')
        let interpolate = d3.quantize(d3.interpolateHcl(this.value, c), 7)
        box.style.backgroundColor = this.value
        box.children[0].textContent = this.value
        box2.style.backgroundColor = interpolate[6]
        box3.style.backgroundColor = interpolate[2]
        box4.style.backgroundColor = interpolate[4]
        box5.style.backgroundColor = interpolate[1]
        box6.style.backgroundColor = interpolate[5]
        box7.style.backgroundColor = interpolate[3]

        box3.children[0].textContent = toHex(getComputedStyle(box3).getPropertyValue('background-color')).replace(/#/g, '')
        box4.children[0].textContent = toHex(getComputedStyle(box4).getPropertyValue('background-color')).replace(/#/g, '')
        box5.children[0].textContent = toHex(getComputedStyle(box5).getPropertyValue('background-color')).replace(/#/g, '')
        box6.children[0].textContent = toHex(getComputedStyle(box6).getPropertyValue('background-color')).replace(/#/g, '')
        box7.children[0].textContent = toHex(getComputedStyle(box7).getPropertyValue('background-color')).replace(/#/g, '')

        setCSSInfo()

        setTimeout(changeColor, 200)
    })

    endColor.addEventListener('keyup', function() {
        let a = getComputedStyle(box).getPropertyValue('background-color')
        let interpolate = d3.quantize(d3.interpolateHcl(a, this.value), 7)
        box2.style.backgroundColor = this.value
        box2.children[0].textContent = this.value
        box.style.backgroundColor = interpolate[0]
        box3.style.backgroundColor = interpolate[2]
        box4.style.backgroundColor = interpolate[4]
        box5.style.backgroundColor = interpolate[1]
        box6.style.backgroundColor = interpolate[5]
        box7.style.backgroundColor = interpolate[3]

        box3.children[0].textContent = toHex(getComputedStyle(box3).getPropertyValue('background-color')).replace(/#/g, '')
        box4.children[0].textContent = toHex(getComputedStyle(box4).getPropertyValue('background-color')).replace(/#/g, '')
        box5.children[0].textContent = toHex(getComputedStyle(box5).getPropertyValue('background-color')).replace(/#/g, '')
        box6.children[0].textContent = toHex(getComputedStyle(box6).getPropertyValue('background-color')).replace(/#/g, '')
        box7.children[0].textContent = toHex(getComputedStyle(box7).getPropertyValue('background-color')).replace(/#/g, '')

        setCSSInfo()

        setTimeout(changeColor, 200)
    })


    for (x of allbox) {
        x.addEventListener('dblclick', copytoClipboard)
    }

    // switching html divs around for illusion of variety/randomness in colors for gradient

    const switchDivs = function() {
        const parentBox = document.querySelector('.boxes')
        const parentBoxChildren = Array.from(parentBox.childNodes)
        parentBoxChildren.reverse()
        parentBox.append(...parentBoxChildren);
        const control = document.querySelector('.one')
        const oneChildren = Array.from(control.childNodes)
        oneChildren.reverse()
        control.append(...oneChildren)

        let startLabel = document.getElementById('start-label')
        let endLabel = document.getElementById('end-label')

        if (startLabel.textContent == 'START') {
            startLabel.textContent = 'END'
        } else startLabel.textContent = 'START'

        if (endLabel.textContent == 'END') {
            endLabel.textContent = 'START'
        } else endLabel.textContent = 'END'

    }

    randombtn.addEventListener('click', switchDivs)
    randombtn.addEventListener('click', moreColor)
    numberInput.value = "5"
    numberOfColors()
    numberInput.addEventListener('keyup', numberOfColors)
    numberInput.addEventListener('change', numberOfColors)
    moreColor()
})()