import { Component, OnInit } from '@angular/core';

import { GoogleChartInterface } from 'ng2-google-charts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-geochart',
  templateUrl: './geochart.component.html',
  styleUrls: ['./geochart.component.css']
})
export class GeochartComponent implements OnInit{

  states_data = [['State','COVID-Confirmed Cases']];
  response: any[]=[];
  mapReady=false;
  constructor(public serv: DataService){}

  ngOnInit(){
    this.serv.getData().subscribe(
      (res)=>{
        this.response=res.statewise;
        this.response.splice(0,1);

        for(let state of this.response){
          let temp = [state.state,Number(state.confirmed)];
          if( state.state=="Odisha"){
            temp = ['IN-OR',Number(state.confirmed)];
          }
          this.states_data.push(temp);
        }
        this.mapReady=true
      },
      (err)=>{
        console.log(err)
      }
    );

    
  }
  
  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_data,
    options: {
      region: 'IN', // INDIA
      colorAxis: {colors: ['#00F919', '#0FFFE4', '#1FA20F','#156930','#033E3B']},
      resolution: 'provinces',
      backgroundColor: '#00000',
      datalessRegionColor: '#00000',
      defaultColor: '#00000',
      'height': 600,
    }
  };

}
