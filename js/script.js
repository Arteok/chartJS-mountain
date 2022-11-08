//options default charts
Chart.defaults.color = '#fff';
//Chart.defaults.elements.line.borderWidth = 2;
//Chart.defaults.elements.bar.borderWidth = 5;
//Chart.defaults.scale.ticks.display = false;//en chart2 esta la forma de hacerlo desde el chart
//Chart.defaults.scale.grid.color = '#7f8fa6';//en chart3 esta la forma de hacerlo desde el chart


/*trae el json de la pagina web */
fetch('https://coasters-api.herokuapp.com/')
.then(response => response.json())
.then(data => printCharts(data))

function printCharts(coasters) {
    document.body.classList.add('running');//desaparece "esperando la respuesta de la API" creando una class running en el body
    compareRadialChart(coasters, 'chart2');
    modelDoughnutChart(coasters, 'chart4');
    heightRadarChart(coasters, 'chart3');
    GForceBarsChart(coasters, 'chart5');
    countriesRadarChart(coasters, 'chart1');
    yearsBarChart(coasters, 'chart6');
    
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
                /*grid: {
                    color: '#7f8c8d',

                },*/
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: { position: 'right'} 
                
        }
    }
    new Chart('chart2',{type: 'polarArea', data, options});
}

function modelDoughnutChart(coasters, id) {
    const data = {
        labels: ['Propulsada', 'Hiper montaña', 'Giga montaña', 'Inversión', 'Sentado'],
        datasets: [{
            data: [
                coasters.filter(eachCoaster => eachCoaster.model === 'Accelerator Coaster').length,
                coasters.filter(eachCoaster => eachCoaster.model === 'Hyper Coaster').length,
                coasters.filter(eachCoaster => eachCoaster.model === 'Giga Coaster').length,
                coasters.filter(eachCoaster => eachCoaster.model === 'Multi Inversion Coaster').length,
                coasters.filter(eachCoaster => eachCoaster.model === 'Sitting Coaster').length
            ],
            bordeWidth: 1,
            borderColor: getDataColors(),
            backgroundColor: getDataColors(40)
        }]
    }
    const options = {

        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
    new Chart(id, {type: 'doughnut', data, options})
}

function heightRadarChart(coasters, id){

    const selectedCoaster = coasters.filter(eachCoaster => eachCoaster.height > 80)
    const data = {
        labels:selectedCoaster.map(eachCoaster => eachCoaster.name),
        datasets: [{
            label: 'Altura',
            data: selectedCoaster.map(eachCoaster => eachCoaster.height),
            bordeWidth: 1,
            borderColor: getDataColors(),
            backgroundColor: getDataColors(40)
        }]
    }

    const options = {        
        scales: {
            r: {
                grid: {
                    color: '#2ecc71'
                },                
                ticks: {
                    display: false
                }
            }
        },      
        plugins: {
            legend: { display: false}
                
        }
    }
    new Chart(id, {type: 'radar', data, options})
}

function GForceBarsChart(coasters, id){
    const selectedCoaster = coasters.filter(eachCoaster => eachCoaster.gForce)
    //console.log(selectedCoaster)
    const data = {
        labels: selectedCoaster.map(eachCoaster => eachCoaster.name),
        datasets: [{
            data: selectedCoaster.map(eachCoaster => eachCoaster.gForce),
            borderColor: getDataColors(),
            backgroundColor: getDataColors(80)
            //borderColor: style.color.solids[1],
            //backgroundColor: style.color.alphas[1]

        }]
    }
    const options = {      
        scales: {            
            r: {
                
                ticks: {
                    display: false
                }
            }
        },            
        plugins: {
            legend: { display: false}                
        }
    }
    new Chart(id, {type: 'bar', data, options})
}

function countriesRadarChart(coasters, id){

    const selectedCoaster = coasters.filter(eachCoaster => eachCoaster.gForce)
    const data = {
        labels:selectedCoaster.map(eachCoaster => eachCoaster.name),
        datasets: [{
            label: 'Altura',
            data: selectedCoaster.map(eachCoaster => eachCoaster.height),
            bordeWidth: 1,
            borderColor: style.color.solids[0],
            backgroundColor: style.color.alphas[0]
            //borderColor: getDataColors(),
            //backgroundColor: getDataColors(60)
        },
        {
            label: 'Longitud',
            data: selectedCoaster.map(eachCoaster => eachCoaster.length),
            bordeWidth: 1,
            borderColor: style.color.solids[1],
            backgroundColor: style.color.alphas[1],
            hidden: true
            //borderColor: getDataColors(),
            //backgroundColor: getDataColors(60)
        },
        {
            label: 'Inversiones',
            data: selectedCoaster.map(eachCoaster => eachCoaster.inversions),
            bordeWidth: 1,
            borderColor: style.color.solids[2],
            backgroundColor: style.color.alphas[2]
            //borderColor: getDataColors(),
            //backgroundColor: getDataColors(60)
        },
        {
            label: 'Velocidad',
            data: selectedCoaster.map(eachCoaster => eachCoaster.speed),
            bordeWidth: 1,
            borderColor: style.color.solids[3],
            backgroundColor: style.color.alphas[3]
            //borderColor: getDataColors(),
            //backgroundColor: getDataColors(60)
        },
        {
            label: 'Fuerza G',
            data: selectedCoaster.map(eachCoaster => eachCoaster.gForce),
            bordeWidth: 1,
            borderColor: style.color.solids[4],
            backgroundColor: style.color.alphas[4]
            //borderColor: getDataColors(),
            //backgroundColor: getDataColors(60)
        }   
    ]
    }
    const options = {        
        scales: {
            r: {
                grid: {
                    color: '#2ecc71'
                },                
                ticks: {
                    display: false
                }
            }
        },      
        plugins: {
            legend: { position: 'left'}                
        }
    }
    new Chart(id, {type: 'radar', data, options})
}

function yearsBarChart(coasters, id) {


    const data = {
        labels: ['1995-1997', '1998-2000', '2001-2003', '2004-2006', '2007-2009', '2013-2015', '2016-2018', '2019-2021'],
        datasets: [
            {
                label: 'Montañas creadas',
                borderColor: getDataColors(),
                backgroundColor: getDataColors(60),
                data: [
                    coasters.filter(eachCoaster => eachCoaster.year >= 1995 && eachCoaster.year <= 1997).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 1998 && eachCoaster.year <= 2000).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2001 && eachCoaster.year <= 2003).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2004 && eachCoaster.year <= 2006).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2007 && eachCoaster.year <= 2009).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2010 && eachCoaster.year <= 2012).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2013 && eachCoaster.year <= 2015).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2016 && eachCoaster.year <= 2018).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2019 && eachCoaster.year <= 2021).length
                ]
            },
            {
                type: 'bar',//esnecesario poner tipo para el segundo tipo de chart
                label: 'Aceleración',
                borderColor: getDataColors(),
                backgroundColor: getDataColors(60),
                data: [
                    coasters.filter(eachCoaster => eachCoaster.year >= 1995 && eachCoaster.year <= 1997 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 1998 && eachCoaster.year <= 2000 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2001 && eachCoaster.year <= 2003 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2004 && eachCoaster.year <= 2006 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2007 && eachCoaster.year <= 2009 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2010 && eachCoaster.year <= 2012 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2013 && eachCoaster.year <= 2015 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2016 && eachCoaster.year <= 2018 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2019 && eachCoaster.year <= 2021 && eachCoaster.model === 'Hyper Coaster').length
                ]
            }
        ]
    }

    const options = {
        maintainAspectRatio: false/*,
        scaleFontColor: '#fff',
        scale: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                barPercentage: 0.1,
                ticks: {
                    display: true
                }
            }]
        }*/
    }
    new Chart(id, { type: 'line', data, options })

}