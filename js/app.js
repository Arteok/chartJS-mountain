Chart.defaults.color = '#fff'

const printCharts = () => {
    /*fetchCoastersData('https://coasters-api.herokuapp.com','https://coasters-api.herokuapp.com/country/Spain')
    .then(([allCoasters, nationalCoasters]) => {
            console.log(allCoasters, nationalCoasters)
    })   */

    renderModelsChart()

}
const renderModelsChart = () => {

    const data = {
        labels: ['uno', 'dos', 'tres'],
        datasets: [{
            data: [10,20,30],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(40)
            
            //borderColor: ['red', 'green', 'blue'],
            //backgroundColor: ['blue', 'green', 'red']
        }]    
    }

    const options = {
        plugins: {
            legend: { position: 'left'}//pone las barras a la izquierda
        }
    }

    new Chart('modelsChart',{type: 'line', data, options})//crea el tipo de grafico
}



printCharts()