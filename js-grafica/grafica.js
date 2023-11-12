// Declaramos las constantes
// Estos datos los puedes traer desde la BD por medio de un API
// Como son arreglos, los puedes leer desde un JSON
const labels = ['1 año', '2 años'];
const datos = [24000, 27000];
const colores = [
  'rgba(255, 99, 132)',
  'rgba(255, 159, 64)',
  'rgba(255, 205, 86)',
  'rgba(75, 192, 192)',
  'rgba(54, 162, 235)',
  'rgba(153, 102, 255)',
  'rgba(201, 203, 207)'
];
const borders = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)'
];

// Se arman el objetos con los arreglos de datos, colores y borders que requiere el gráfico
const data = {
  labels: labels,
  datasets: [{
    label: 'Mis inversiones',
    data: datos,
    backgroundColor: colores,
    borderColor: borders,
    borderWidth: 1
  }]
};

// Se arma el objeto de configuración que requiere el gráfico
const config = {
  type: 'bar',
  data: data,
  plugins: [ChartDataLabels],
  options: {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
          anchor: 'end',
          clamp: true,
          align: 'top',
          offset: 0,
          formatter: function (value, context) {
              return '$' + new Intl.NumberFormat('es-MX').format(context.dataset.data[context.dataIndex]);
          }
      }
    }
  },
};

// Obtenemos la referencia al canvas
const ctx = document.querySelector('.grafica');
// Se construye el gráfico en el canvas
const graficaInvest = new Chart(ctx, config);

// Obtenemos la referencia al slider
const slider = document.querySelector('.slider');
const ganancias = [24000, 27000, 34000, 40500, 46300, 48000, 54500];

// Al cambiar el slider, cambiamos la gráfica
slider.addEventListener('change', function() {
  graficaInvest.data.labels = ['1 año'];
  graficaInvest.data.datasets[0].data = [24000];

  for(i=2;i<=this.value;i++){
    graficaInvest.data.labels.push(`${i} años`);
    graficaInvest.data.datasets[0].data.push(ganancias[i-1]);
  }
  graficaInvest.update();
});