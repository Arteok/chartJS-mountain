/*trae el json de la pagina web */
fetch('https://coasters-api.herokuapp.com/')
.then(response => response.json())
.then(data => printCharts(data))

function printCharts(coasters) {
    document.body.classList.add('running')
    
}
