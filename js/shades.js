// toggle navigation
let nav = document.querySelector('.more')
let navLinks = document.querySelector('.nav-links-remove')

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

const black = [{ hex: '#000000', name: 'Black' }, { hex: '#696969', name: 'Dim gray' }, { hex: '#555D50', name: 'Ebony' }, { hex: '#483c32', name: 'Taupe' }, { hex: '#555555', name: 'Davy\'s Gray' }, { hex: '#36454F', name: 'Charcoal' }, { hex: '#414A4C', name: 'Outer Space' }, { hex: '#3B3C36', name: 'Black Olive' }, { hex: '#353839', name: 'Onyx' }, { hex: '#343434', name: 'Jet' }, { hex: '#242124', name: 'Raisin Black' }, { hex: '#232B2B', name: 'Charleston Green' }, { hex: '1B1B1B', name: 'Eerie Black' }, { hex: '#1A1110', name: 'Licorice' }]


const blue = [{ hex: '#89CFF0', name: 'Baby Blue' }, { hex: '#ADD8E6', name: 'Light blue' }, { hex: 'CCCCFF', name: 'Periwinkle' }, { hex: '#B0E0E6', name: 'Powder blue' }, { hex: '#99FFFF', name: 'Ice blue' },
    { hex: '8DA399', name: 'Morning blue' }, { hex: '#0000FF', name: 'Computer Web Color Blue' }, { hex: '333399', name: 'Internation Klein Blue' }, { hex: '0087BD', name: 'Natural Color System Blue' }, { hex: '0093AF', name: 'Munsell Color System Blue' }, { hex: '#0018A8', name: 'Pantone Blue' }, { hex: '1F75FE', name: 'Crayola Blue' }, { hex: '#AFDBF5', name: 'Uranian Blue' }, { hex: '#6CB4EE', name: 'Argentinian Blue' }, { hex: '#76ABDF', name: 'Ruddy Blue' }, { hex: '#4B61D1', name: 'Savoy Blue' }, { hex: '#246BCE', name: 'Celtic Blue' }, { hex: '#0070BB', name: 'Spanish Blue' }, { hex: '#545AA7', name: 'Liberty' }, { hex: '#1034A6', name: 'Egyptian Blue' }, { hex: '#4000FF', name: 'Ultramarine' }, { hex: '#4D4DFF', name: 'Neon Blue' }, { hex: '#318CE7', name: 'Bleu De France' }, { hex: '#1F305E', name: 'Delft Blue' }, { hex: '#007791', name: 'Duck Blue' }, { hex: '#00008B', name: 'Dark Blue' }, { hex: '2E2787', name: 'Picotee Blue' }, { hex: '#224C98', name: 'Polynesian Blue' }, { hex: '#000080', name: 'Navy Blue' }, { hex: '#191970', name: 'Midnight Blue' }, { hex: '#468FEA', name: ' Chefchaouen Blue' }, { hex: '#082567', name: 'Sapphire' }, { hex: '4C516D', name: 'Independence' }, { hex: '#1E2952', name: 'Space Cadet' }, { hex: '#15F4EE', name: 'Flourescent Blue' }, { hex: '#00356B', name: 'Yale Blue' }, { hex: '#011F5B', name: 'Penn Blue' }, { hex: '#003262', name: 'Berkeley Blue' }, { hex: '#008080', name: 'Teal' }, { hex: '367588', name: 'Teal Blue' }
]

const brown = [{ hex: '#A52A2A', name: ' Red-Brown' }, { hex: '#9F8170', name: 'Beaver' }, { hex: '#F5F5DC', name: 'Beige' }, { hex: '#F0DC82', name: 'Buff' }, { hex: '#8A3324', name: 'Burnt Umber' }, { hex: '#9545353', name: 'Chestnut' }, { hex: '#7B3F00', name: 'Chocolate' }, { hex: '#D2691E', name: 'Cocoa Brown' }, { hexX: '#5C4033', name: 'Dark Brown' }, { hex: '#EDC9AF', name: 'Desert Sand' }, { hex: '#C3B091', name: 'Khaki' }, { hex: '#6B4423', name: 'Kobicha' }, { hex: '#CD853F', name: 'Peru' }, { hex: '#826644', name: 'Raw Umber' }, { hex: '#BC8F8F', name: 'Rosy Brown' }, { hex: '#80461B', name: 'Russet' }, { hex: '#F4A460', name: 'Sandy Brown' }, { hex: '#832A0D', name: 'Smokey Topaz' }, { hex: '#D2B48C', name: 'Tan' }, { hex: '#483C32', name: 'Taupe' }, { hex: '#5C5248', name: 'Walnut Brown' }, { hex: '#645452', name: 'Wenge' }, { hex: '#C19A6B', name: 'Wood Brown' }]

const cyan = [{ hex: '#00B7EB', name: ' Subtractive Primary Cyan' }, { hex: '#00FFFF', name: 'Additive Secondary Cyan' }, { hex: '#C0E8D5', name: 'Aero Blue' }, { hex: '#7FFFD4', name: 'Aquamarine' }, { hex: '#0D98BA', name: 'Blue-Green' }, { hex: '#006D6F', name: 'Caribbean Current' }, { hex: '#B2FFFF', name: 'Celeste' }, { hex: '#007BA7', name: 'Cerulean' }, { hex: '#008B8B', name: 'Dark Cyan' }, { hex: '#1164B4', name: 'Green-Blue' }, { hex: '#3AB09E', name: 'Keppel' }, { hex: '#20B2AA', name: 'Light Sea Green' }, { hex: '#004C54', name: 'Midnight Green' }, { hex: '#3AA8C1', name: 'Moonstone' }, { hex: '#A8C3BC', name: 'Opal' }, { hex: '#87D3F8', name: 'Pale Cyan' }, { hex: '#00CCCC', name: 'Robin Egg Blue' }, { hex: '#81D8D0', name: 'Tiffany Blue' }, { hex: '#43B3AE', name: 'Verdigris' }, { hex: '#40826D', name: 'Viridian' }]

const green = [{ hex: '#8F9779', name: 'Artichoke' }, { hex: '#4B6F44', name: 'Artichoke Green' }, { hex: '#87A96B', name: 'Asparagus' }, { hex: '#568203', name: 'Avocado' }, { hex: '#4F7942', name: 'Fern Green' }, { hex: '#71BC78', name: 'Fern' }, { hex: '#228B22', name: 'Forest Green' }, { hex: '#29AB87', name: 'Jungle Green' }, { hex: '#A9BA9D', name: 'Laurel Green' }, { hex: '#BFFF00', name: 'Lime' }, { hex: '#74C365', name: 'Mantis' }, { hex: '#3EB489', name: 'Mint' }, { hex: '#8A9A5B', name: 'Moss Green' }, { hex: '#4A5D23', name: 'Dark Moss Green' }, { hex: '#317873', name: 'Myrtle Green' }, { hex: '#01796F', name: 'Pine Green' }, { hex: '#6C7C59', name: 'Reseda Green' }, { hex: '#009E60', name: 'Shamrock Green' }, { hex: '#D0F0C0', name: 'Tea Green' }, { hex: '#808000', name: 'Olive' }, { hex: '#50C878', name: 'Emerald' }, { hex: '#DADD98', name: 'Green Earth' }, { hex: '#49796B', name: 'Hooker\'s Green' }, { hex: '#00A86B', name: 'Jade' }, { hex: '#0BDA51', name: 'Malachite' }, { hex: '#3FFF00', name: 'Harlequin' }, { hex: '#4B5320', name: 'Army Green' }, { hex: '#1B4D3E', name: 'Brunswick Green' }, { hex: '#ACE1AF', name: 'Celadon' }, { hex: '#4D5D53', name: 'Feldgrau' }, { hex: '00AB66', name: 'Go Green' }, { hex: '#138808', name: 'India Green' }, { hex: '#4CBB17', name: 'Kelly Green' }, { hex: '#01411C', name: 'Pakistan Green' }, { hex: '#50C878', name: 'Paris Green' }, { hex: '#444C38', name: 'Rifle Green' }, { hex: '#679267', name: 'Russian Green' }, { hex: '#009150', name: 'Spanish Green' }]

const gray = [{ name: 'Ash grey', hex: '#B2BEB5' }, { name: 'Battleship Grey', name: '#848482' }, { name: 'Blue-grey', hex: '#6699CC' }, { name: 'Cadet grey', hex: '#91A3B0' }, { name: 'Charcoal', hex: '#36454F' }, { name: 'Cinerous', hex: '#98817B' }, { name: 'Cool grey', hex: '#8C92AC' }, { name: 'Davy\'s Grey', hex: '#555555' }, { name: 'Feldgrau', hex: '#FDFDFD' }, { name: 'Marengo', hex: '#4C5866' }, { name: 'Rose Quartz', hex: '#AA98A9' }, { name: 'Timberwolf', hex: '#DBD7D2' }]

const magenta = [{ name: 'Amaranth', hex: '#E52B50' }, { name: 'Amaranth Pink', hex: '#F19CBB' }, { name: 'Amaranth Purple', hex: '#AB274F' }, { name: 'Blush', hex: '#DE5D83' }, { name: 'Cerise', hex: '#DE3163' }, { name: 'Dark Magenta', hex: '#FF0000' }, { name: 'Fairytale', hex: '#F2C1D1' }, { name: 'Fandango', hex: '#F2C1D1' }, { name: 'Magenta Haze', hex: '#9F4576' }, { name: 'Phlox', hex: '#DF00FF' }, { name: 'Plum', hex: '#C2938D' }, { name: 'Telemagenta', hex: '#CF3476' }, { name: 'Puce', hex: '#CC8899' }, { name: 'Violet-red', hex: '#F75394' }]

const orange = [{ name: 'Amber', hex: '#FFBF00' }, { name: 'Bittersweet', hex: '#FF6F5E' }, { name: 'Buff', hex: '#E0AB76' }, { name: 'Burnt Orange', hex: '#CC5500' }, { name: 'Butterscotch', hex: '#E09540' }, { name: 'Carrot Orange', hex: '#ED9121' }, { name: 'Citron', hex: '#DDD06A' }, { name: 'Dark Salmon', hex: '#E9967A' }, { name: 'Flame', hex: '#E25822' }, { name: 'Fulvous', hex: '#E48400' }, { name: 'Golden Poppy', hex: '#FCC200' }, { name: 'International Orange', hex: '#FF4F00' }, { name: 'Lion', hex: '#C19A6B' }, { name: 'Papaya Whip', hex: '#FFEFD5' }, { name: 'Peach-yellow', hex: '#FADFAD' }, { name: 'Portland Orange', hex: '#FF5A36' }, { name: 'Princeton Orange', hex: '#FF8F00' }, { name: 'Salmon', hex: '#FF8C69' }, { name: 'Tea Rose', hex: '#F88379' }]

const pink = [{ name: 'Amaranth Pink', hex: '#F19CBB' }, { name: 'Baker-Miller Pink', hex: '#FF91AF' }, { name: 'Blush', hex: '#DE5D83' }, { name: 'Brilliant Rose', hex: '#F653A6' }, { name: 'Brink Pink', hex: '#FB607F' }, { name: 'Carnation Pink', hex: '#FFA6C9' }, { name: 'Coral Pink', hex: '#F88379' }, { name: 'Fairy Tale', hex: '#F2C1D1' }, { name: 'Heliotrope', hex: '#DF73FF' }, { name: 'Mimi Pink', hex: '#FFDAE9' }, { name: 'Pale Dogwood', hex: '#EDCDC2' }, { name: 'Red Violet', hex: '#C71585' }, { name: 'Thulian Pink', hex: '#DE6FA1' }]

const purpleViolet = [{ name: 'African Violet', hex: '#B284BE' }, { name: 'Amethyst', hex: '#9966CC' }, { name: 'Byzantium', hex: '	#702963' }, { name: 'Caput Mortuum', hex: '#592720' }, { name: 'Chinese Violet', hex: '	#856088' }, { name: 'Dark Purple', hex: '	#301934' }, { name: 'English Violet', name: '#563C5C' }, { name: 'Eminence', hex: '#6C3082' }, { name: 'Fandango', hex: '#B53389' }, { name: 'French Mauve', hex: '	#D473D4' }, { name: 'Opera Mauve', hex: '	#B784A7' }, { name: 'Iris', hex: '#5A4FCF' }, { name: 'Japanese Violet', hex: '#5B3256' }, { name: 'Lavender (floral)', hex: '#B57EDC ' }, { name: 'Lilac', hex: '#C8A2C8' }, { name: 'Mardi Gras', hex: '#880085' }, { name: 'Mulberry', hex: '	#C54B8C' }, { name: 'French Lilac', hex: '#86608E' }, { name: 'Purpueus', hex: '#9A4EAE' }, { name: 'Red Violet', hex: '#C71585' }, { name: 'Russian Violet', hex: '#32174D' }, { name: 'Tyrian Purple', hex: '#66023C' }, { name: 'Wisteria', hex: '#C9A0DC' }]

const red = [{ name: 'Alizarin Crimson', hex: '#E32636' }, { name: 'Apricot', hex: '#FBCEB1' }, { name: 'Auburn', hex: '#A52A2A' }, { name: 'Blood Red', hex: '#660000' }, { name: 'Candy Apple Red', hex: '#FF0800' }, { name: 'Cardinal', hex: '#C41E3A' }, { name: 'Carmine', hex: '#960018' }, { name: 'Cinnabar', hex: '#E44D2E' }, { name: 'Indian Red', hex: '#CD5C5C' }, { name: 'Oxblood', hex: '#4A0000' }, { name: 'Penn Red', hex: '#990000' }, { name: ' Redwood', hex: '#A45A52' }, { name: 'Rosewood', hex: '#65000B' }, { name: 'Rosso corsa', hex: '#D40000' }, { name: 'Rust', hex: '#B7410E' }, { name: 'Tawny', hex: '#cd5700' }, { name: 'Turkey Red', hex: '#A91101' }, { name: 'Venetian Red', hex: '#C80815' }, { name: 'Vermillion', hex: '#E34234' }]

const white = [{ name: 'Alabaster', hex: '#EDEAE0' }, { name: 'Alice Blue', hex: '#F0F8FF' }, { name: 'Antique White', hex: '#FAEBD7' }, { name: 'Azure White', hex: '#F0FFFF' }, { name: 'Beige', hex: '#F5F5DC' }, { name: 'Bone', hex: '#E3DAC9' }, { name: 'Champagne', hex: '#F7E7CE' }, { name: 'Cornsilk', hex: '#FFF8DC' }, { name: 'Cosmic Latte', hex: '#FFF8E7' }, { name: 'Eggshell', hex: '#F0EAD6' }, { name: 'Floral White', hex: '#FFFAF0' }, { name: 'Honeydew', hex: '#F0FFF0' }, { name: 'Isabelline', hex: '#F4F0EC' }, { name: 'Ivory', hex: '#FFFFF0' }, { name: 'Lavender Blush', hex: '#FFF0F5' }, { name: 'Lemon Chiffon', hex: '#FFFACD' }, { name: 'Linen', hex: '#FAF0E6' }, { name: 'Magnolia', hex: '#F2E8D7' }, { name: 'Seasalt', hex: '#FDFDFD' }, { name: 'Seashell', hex: '#FFF5EE' }, { name: 'White smoke', hex: '#F5F5F5' }]

const yellow = ['Yellow', [{ name: 'Arylide Yellow', hex: '#E9D66B' }, { name: 'Aureolin', hex: '#FDEE00' }, { name: 'Chartreuse', hex: '#DFFF00' }, { name: 'Citrine', hex: '#E4D00A' }, { name: 'Flax', hex: '#EEDC82' }, { name: 'Gold', hex: '#FFD700' }, { name: 'Harvest Gold', hex: '#E6A817' }, { name: 'Jasmine', hex: '#F8DE7E' }, { name: 'Jonquil', hex: '#FACA16' }, { name: 'Maize/Corn', hex: '#FBEC5D' }, { name: 'Mikado Yellow', hex: '#FFC40C' }, { name: 'Mindaro', hex: '#E3F988' }, { name: 'Naples Yellow', hex: '#FADA5E' }, { name: 'Saffron', hex: '#F4C431' }, { name: 'National School Bus Glossy Yellow', hex: '#F5A400' }, { name: 'Stil De Grain Yellow', hex: '#FADA5E' }, { name: 'Straw', hex: '#E4D96F' }, { name: ' Wheat', hex: '#F5DEB3' }]]


let shades = [red, orange, yellow, blue, cyan, green, white, gray, black, brown, magenta, pink, purpleViolet]

const root = document.querySelector('.shades-root')

root.innerHTML = `<div class= 'shade-color'>
    ${
        yellow[1].map(function(color){
            return `<div class="shade-box" style='background-color: ${color.hex}'>
                
            </div> `
        }).join('')
    }
</div>`