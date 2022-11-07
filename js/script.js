Chart.defaults.color = '#fff'

/*trae el json de la pagina web */
fetch('https://coasters-api.herokuapp.com/')
.then(response => response.json())
.then(data => printCharts(data))

function printCharts(coasters) {
    document.body.classList.add('running');//desaparece "esperando la respuesta de la API" creando una class running en el body
    compareRadialChart(coasters, 'chart2')
    
}

function compareRadialChart(coasters, id) {
    const data = {
        labels: ['EEUU','China','Japón','España','Reino Unido'],
        datasets: [{
            data: [
                coasters.filter(eachCoaster => eachCoaster.country === 'United States').length,
                coasters.filter(eachCoaster => eachCoaster.country === 'China').length,
                coasters.filter(eachCoaster => eachCoaster.country === 'Japan').length,
                coasters.filter(eachCoaster => eachCoaster.country === 'Spain').length,
                coasters.filter(eachCoaster => eachCoaster.country === 'United Kingdom').length
            ],
            bordeWidth: 1,
            borderColor: getDataColors(),
            backgroundColor: getDataColors(40)                       
        }]
    }

    const options = {
        
        scales: {
            r: {
                grid: {
                    color: '#7f8c8d',

                },
                ticks: {
                    display: false
                }
            }
        },

        plugins: {
            legend: { position: 'right'},   
                
        }
    }

    new Chart('chart2',{type: 'polarArea', data, options});
}
