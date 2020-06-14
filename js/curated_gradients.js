(function() {
        let colors = [
            'linear-gradient(to right top, #EE9C3C, #E57945, #D35A4E, #BA3E55, #9C2959, #781B58, #531352)',
            'linear-gradient(to left, rgb(36, 219, 221), rgb(37, 217, 229), rgb(46, 214, 236), rgb(58, 211, 243), rgb(72, 208, 248), rgb(87, 205, 251), rgb(101, 201, 254))',
            'linear-gradient(176deg, rgba(11,137,219,1) 16%, rgba(41,99,224,1) 46%, rgba(107,33,203,1) 74%)',
            'linear-gradient(5deg, rgba(255,192,203,1) 9%, rgba(255,146,214,1) 43%, rgba(169,124,252,1) 74%)',
            'linear-gradient(to top left, rgb(203, 126, 224), rgb(219, 110, 210), rgb(234, 92, 191), rgb(245, 73, 168), rgb(253, 50, 142), rgb(255, 25, 113), rgb(255, 0, 82))',
            'linear-gradient(16deg, rgba(125,184,112,1) 24%, rgba(145,197,142,1) 48%, rgba(168,209,171,1) 74%)',
            'linear-gradient(to right bottom, rgb(219, 103, 139), rgb(195, 82, 134), rgb(169, 63, 130), rgb(141, 46, 125), rgb(110, 32, 119), rgb(77, 23, 113), rgb(37, 16, 104))',
            'linear-gradient(110deg, rgb(232, 197, 60) 20%, rgb(228, 225, 38) 60%, rgb(211, 255, 17) 93%)',
            'linear-gradient(to bottom, rgb(44, 69, 146), rgb(61, 73, 151), rgb(76, 78, 156), rgb(89, 82, 161), rgb(102, 87, 166), rgb(115, 91, 171), rgb(127, 96, 175))',
            'linear-gradient(to right top, #D89A80, #D98D75, #D9806B, #D97164, #D9625E, #D9505A, #D83C57)',
            'linear-gradient(130deg, rgb(132, 89, 223) 8%, rgb(170, 118, 223) 60%, rgb(199, 151, 224) 93%)',
            'linear-gradient(to right bottom, rgb(133, 123, 239), rgb(182, 112, 223), rgb(217, 102, 200), rgb(240, 97, 171), rgb(251, 100, 141), rgb(252, 113, 112), rgb(244, 130, 87))',
            'linear-gradient(to bottom, rgb(214, 114, 152), rgb(204, 115, 168), rgb(189, 119, 183), rgb(170, 124, 194), rgb(149, 129, 201), rgb(124, 134, 204), rgb(98, 138, 203))',
            'linear-gradient(to left bottom, rgb(155, 222, 109), rgb(177, 209, 84), rgb(196, 194, 66), rgb(214, 178, 56), rgb(229, 160, 56), rgb(241, 142, 65), rgb(250, 122, 79))',
            'linear-gradient(130deg, rgb(209, 153, 168) 8%, rgb(222, 183, 191) 60%, rgb(234, 213, 216) 93%)',
            'linear-gradient(to right bottom, rgb(135, 223, 250), rgb(106, 196, 233), rgb(79, 169, 217), rgb(54, 143, 200), rgb(31, 117, 181), rgb(11, 91, 162), rgb(0, 66, 141))',
            'linear-gradient(to bottom right, rgb(12, 198, 148), rgb(0, 203, 142), rgb(0, 208, 134), rgb(0, 213, 125), rgb(0, 217, 114), rgb(0, 222, 102), rgb(0, 226, 88))',
            'linear-gradient(to right, rgb(192, 112, 155), rgb(188, 99, 156), rgb(181, 87, 158), rgb(174, 75, 161), rgb(164, 64, 166), rgb(151, 55, 171), rgb(136, 47, 177))',
            'linear-gradient(to top left, rgb(176, 245, 190), rgb(179, 246, 182), rgb(182, 248, 174), rgb(187, 248, 166), rgb(194, 249, 157), rgb(201, 249, 148), rgb(209, 249, 139))',
            'linear-gradient(to left bottom, rgb(218, 132, 158), rgb(232, 135, 150), rgb(244, 139, 140), rgb(253, 145, 128), rgb(255, 154, 114), rgb(255, 165, 100), rgb(255, 177, 86))',
            'linear-gradient(to right, rgb(216, 34, 153), rgb(223, 41, 154), rgb(229, 47, 155), rgb(236, 53, 156), rgb(242, 59, 156), rgb(249, 65, 157), rgb(255, 71, 158))',
            'linear-gradient(to bottom, rgb(240, 169, 177), rgb(231, 162, 187), rgb(216, 158, 197), rgb(197, 155, 206), rgb(172, 155, 210), rgb(144, 154, 210), rgb(114, 154, 205))',
            'linear-gradient(to right top, #01FA8D, #00EBA5, #00DAB8, #00C8C4, #00B5C8, #00A2C4, #008FB8)',
            'linear-gradient(to left, #81A1B2, #799FB1, #719DAF, #689AAD, #5F98AA, #5596A8, #4A94A5)'
        ]

        const root = document.getElementById('root')
        const h4 = document.getElementById('dynamic-h4')
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

        const copytoClipboard = function(e) {

            if (!navigator.clipboard) {
                return
            }

            const text = getComputedStyle(e.target.parentElement).getPropertyValue('background-image')

            try {

                navigator.clipboard.writeText(text)
                e.target.textContent = 'Copied'
                setTimeout(function() {
                    e.target.textContent = 'Copy'
                }, 1400)
            } catch (err) {
                console.error('Failed to copy!', err)
            }
        }
        h4.textContent = `A collection of ${colors.length} linear gradients for your next project`
        root.innerHTML = `${
        colors.map(function(color){
            return `
            <div class="square" style="background-image:${color}">
                <p class="square-text">Copy</p>
            </div>`
        }).join('')
    }`

    const square = document.querySelectorAll('.square')

    for(x of square){
       x.children[0].addEventListener('dblclick', copytoClipboard)
    }
    
})()