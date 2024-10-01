const Utils = (() => {
    return {
       
        invertido(x) {
            return String(x).split('').reverse().join('');
        }
    };
})();


const App = (() => {
 
    const htmlElements = {
        input: document.querySelector('#cadena'),
        response: document.querySelector('#cadenaSalida'),
        colorSelect: document.querySelector('#seleccionarColor')
    };

    const handlers = {
    
        onInputChange() {
            const strInput = htmlElements.input.value; 
            const strReverse = Utils.invertido(strInput); 
            const selectedColor = htmlElements.colorSelect.value; 
            
            htmlElements.response.innerHTML = `<span class="${selectedColor}">${strReverse}</span>`;
        },
      
        onColorChange() {
            handlers.onInputChange();
        }
    };

    const bindEvents = () => {
        htmlElements.input.addEventListener('input', handlers.onInputChange); 
        htmlElements.colorSelect.addEventListener('change', handlers.onColorChange); 
    };

    return {
        init() {
            bindEvents(); 
        },
    };
})();

App.init();

