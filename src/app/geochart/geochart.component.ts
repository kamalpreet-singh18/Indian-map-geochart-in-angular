import { Component, OnInit } from '@angular/core';

import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-geochart',
  templateUrl: './geochart.component.html',
  styleUrls: ['./geochart.component.css']
})
export class GeochartComponent {

  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: [
      ['State', 'Population (2019)'],
      ['IN-AP',	8858775],
      ['IN-AR',	11467923],
      ['IN-AS', 7000039],
      ['IN-BR',	4076246],
      ['IN-CT',	875898],
      ['IN-GA', 10649800],
      ['IN-GJ',	5806081],
      ['IN-HR',	1324820],
      ['IN-HP',	5517919],
      ['IN-JH',	67028048],
      ['IN-KA',	83019214],
      ['IN-KL',	10722287],
      ['IN-MP',	9797561],
      ['IN-MH',	4904226],
      ['IN-MN',	60359546],
      ['IN-ML', 1919968],
      ['IN-MZ',	2794184],
      ['IN-NL', 613894],
      ['IN-OR',	493559],
      ['Punjab',	17282163],
      ['IN-RJ', 37972812],
      ['IN-SK', 10276617],
      ['IN-TN',	19401658],
      ['IN-TG', 5450421],
      ['IN-TR', 2080908],
      ['IN-UP',	46934632],
      ['IN-UT', 10230185],
      ['IN-WB',1123442],
      ['IN-AN',1123442],
      ['IN-CH',1123442],
      ['IN-DN',1123442],
      ['IN-DD',1123442],
      ['IN-DL',1123442],
      ['IN-JK',1123442],
      ['IN-LA',1123442],
      ['IN-LD',1123442],
      ['IN-PY',1123442],
    ],
    options: {
      region: 'IN', // INDIA
      colorAxis: {colors: ['#05FE21', '#12B059', '#094837']},
      resolution: 'provinces',
      backgroundColor: '#00000',
      datalessRegionColor: '#00000',
      defaultColor: '#00000',
      'height': 400
    }
  };
}
