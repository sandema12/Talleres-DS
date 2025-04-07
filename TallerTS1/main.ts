import { Serie } from "./Serie.js";
import { series } from './data.js';


let seriesTbody: HTMLElement = document.getElementById('series')!;
const getPromedioTemporadasElm: HTMLElement = document.getElementById("seasons-average")!;


renderCoursesInTable(series);
getPromedioTemporadasElm.innerHTML = `${getPromedioTemporadas(series)}`

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><strong>${c.num}</strong></td>
                           <td> <a href= ${c.link}>${c.name}</a> </td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioTemporadas(series: Serie[]): number {
    let sumaTemporadas : number = 0;
    let numeroSeries : number = series.length;
    series.forEach((serie) => sumaTemporadas = sumaTemporadas + serie.seasons);
    return sumaTemporadas/numeroSeries;

  }

