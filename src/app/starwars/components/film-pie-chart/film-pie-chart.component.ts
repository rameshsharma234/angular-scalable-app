import { Component, OnInit, Input } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-film-pie-chart',
  templateUrl: './film-pie-chart.component.html',
  styleUrls: ['./film-pie-chart.component.scss']
})
export class FilmPieChartComponent implements OnInit {
  
  @Input() film;
  filmData: any;
  pieChartData: any;
  constructor(
    private _starwarsService : StarwarsService
  ) { }

  ngOnInit(): void {
    console.log('film',this.film);
    this.getFilmData(this.film);
  }

  getFilmData(url) {
    this._starwarsService.getFilmData(url).subscribe((data)=> {
      console.log("filmData",data);
      this.filmData = data;
      this.pieChartData = this.generatePieChartData(data);
    })
  }

  generatePieChartData(data) {
    let chartData = [
      {
        name: 'Characters',
        y: data.characters.length
      },
      {
        name: 'Planets',
        y: data.planets.length
      },
      {
        name: 'Vehicles',
        y: data.vehicles.length
      },
      {
        name: 'Species',
        y: data.species.length
      }
    ];
   return chartData; 
  }

}
