const style = {//no anda, por eso uso el de abajo que saque de otro video    
    color: {
        solids:['rgba(116, 72, 194, 1)','rgba(33, 192, 215, 1)','rgba(217, 158, 43, 1)','rgba(205, 58, 129, 1)','rgba(33, 192, 215, 1)','rgba(217, 158, 43, 1)','rgba(205, 58, 129, 1)','rgba(156, 153, 204, 1)','rgba(225, 78, 202, 1)'],
        alphas:['rgba(116, 72, 194, 2)','rgba(33, 192, 215, 2)','rgba(217, 158, 43, 2)','rgba(205, 58, 129, 2)','rgba(33, 192, 215, 2)','rgba(217, 158, 43, 2)','rgba(205, 58, 129, 2)','rgba(156, 153, 204, 2)','rgba(225, 78, 202, 2)']
    }
}

const getDataColors = opacity => {
    const colors = ['#7448c2','#21c0d7','#d99e2b','#cd3a81','#9c99cc','#e14eca','#ffffff','#ff0000','#d6ff00','#44bd32']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}