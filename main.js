// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }
    throw new Error(`Something went wrong, make sure that ${selector} exists or is type correctly`);
}

// Change the theme

const  themeToggle = selectElement('.header__icon svg');


themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
   const body = selectElement('body');
   body.classList.toggle('light');  
}


// Save theme 


// Generar letra aleatoria

const generarLetra = () => {
    const abcedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let index = random(0, 26);
    return  abcedario[index];
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


const nuevaLetra = () => {
    const letra = selectElement('.letra');
    let temp = generarLetra();
    letra.innerHTML  = temp;
}

const boton = selectElement('.btn');
boton.addEventListener('click', nuevaLetra);













