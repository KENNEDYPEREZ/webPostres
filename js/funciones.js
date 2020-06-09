const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

function precios() {
    document.getElementById('p1').innerHTML = formatterPeso.format((Math.random() * (5000 - 500)));
    document.getElementById('p2').innerHTML = formatterPeso.format((Math.random() * (5000 - 500)));
    document.getElementById('p3').innerHTML = formatterPeso.format((Math.random() * (5000 - 500)));
    document.getElementById('p4').innerHTML = formatterPeso.format((Math.random() * (5000 - 500)));
    document.getElementById('p5').innerHTML = formatterPeso.format((Math.random() * (5000 - 500)));
    document.getElementById('p6').innerHTML = formatterPeso.format((Math.random() * (5000 - 500)));
}