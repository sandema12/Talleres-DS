import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  standalone: false,
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio= 0;

  constructor(private serieService: SerieService) { }

  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.getAverageSeasons(this.series);
    });
  }

  getAverageSeasons(series: Serie[]){

    let sumaTemporadas : number = 0;
    let numeroSeries : number = series.length;
    series.forEach((serie) => sumaTemporadas = sumaTemporadas + serie.seasons);
    this.promedio= sumaTemporadas/numeroSeries;

  }


  ngOnInit() {
    this.getSeriesList();
  }

}
