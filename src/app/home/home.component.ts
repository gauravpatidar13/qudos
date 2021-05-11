import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'apexcharts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public chartOptions;
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
        curver: 'smooth',
        width: 2
      },//10 //10
      colors: ["#4a88ca"],//79,136,202
      series: [
        {
          name: "",
          data: [250,122,140,158,72,198,90,176]
        }
      ],
      chart: {
        toolbar: { show: false },
        height: 200,
        type: "area",

      },
      title: {
        text: ""
      },
      xaxis: {
        tooltip: {
          enabled: false
        },
        categories: ["4am", "6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm"],
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

    var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    var chart2 = new ApexCharts(document.querySelector("#chart2"), this.chartOptions);
    var chart3 = new ApexCharts(document.querySelector("#chart3"), this.chartOptions);

    chart.render();
    chart2.render();
    chart3.render();
 
  }

}
