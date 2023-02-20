import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart(){

   
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['january', 'february', 'march','april',
								 'may', 'june', 'july','august', 'september', 'october', 'november', 'december' ], 
	       datasets: [
          {
            label: "Spending",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576', '576', '572', '79', '92'],
            backgroundColor: '#001529'
          },
          {
            label: "Income",
            data: ['1100', '960', '1040', '980', '990',
									 '1000', '1100', '960', '1080', '1000', '930', '1000'],
            backgroundColor: '#40a9ff'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
