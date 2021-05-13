import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home-pending',
  templateUrl: './home-pending.component.html',
  styleUrls: ['./home-pending.component.css']
})
export class HomePendingComponent implements OnInit {
  chartOptions;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = this.chartOptions = {
      show: false,
      points: {
        marker: {
          x: "X",
          y: "y",
          size: 8
        }
        , label: {
          borderColor: "#f00",
          text: "point"
        }
      },
      tooltip: {
        custom: [function ({ series, seriesIndex, dataPointIndex, w }) {

          return `<div class="box" style="color:#000;padding:5px 8px">${series[seriesIndex][dataPointIndex]}</div>`;
        }]
      }
      ,
      stroke: {
        show: true,
        width: 0.2
      },//10 //10
      colors: ["#ddd"],//79,136,202
      series: [
        {
          name: "",
          data: [0,30,70,130,170,190]
        }
      ],
      chart: {
        toolbar: { show: false },
        height: 200,
        type: "line",

      },
      title: {
        text: ""
      },
      xaxis: {
        tooltip: {
          enabled: false
        },
        categories: ["4am", "6am", "8am", "10am", "12pm", "2pm"],
        labels: {
          show: true
        }
      },
      yaxis: {
        tooltip: {
          enabled: false,
        },
        labels: {
          show: true
        },
        show:true,
        opposite:false,
        showAlways:true,
       
      },
      fill:{
gradient:{
  shade:'dark',
  type:'vertical',
  shadeIntensity:0.5,
  gradientToColors:['#d8eefe','#e6f4fd','#f3fafe']
}
      },
      grid: {
        position: "front",
        strokeDashArray:7,
        show: true,
        xaxis: {
          lines: {
            show: false,
            
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        size: [0, 0],
        enabled: false,
        show: false,
        shape: "circle",
        discrete: [],
      }
      ,
      toolbar: {
        show: false
      },
      dataLabels: {
        enabled: false
      }
      , legend: {
        show: false
      }
    };

    var chart = new ApexCharts(document.querySelector("#mchart"), this.chartOptions);
    chart.render();
  }
  closeModel(){
    $('#exa4').css({"display":"none"})
  }
  openEmailVerificaionModal(){
  $('#exa4').css({"display":"block"})
  }
  saveModel(){
    $('#exa4').css({"display":"none"})
  }
}
