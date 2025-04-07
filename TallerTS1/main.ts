import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
let totalSeasons: number = 0;

function renderSeriesInTable(): void {
  series.forEach((s) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    seriesTbody.appendChild(tr);
    totalSeasons += s.seasons;
  });

  let avg = totalSeasons / series.length;
  let trAvg = document.createElement("tr");
  trAvg.innerHTML = `<td colspan="4"><strong>Seasons average: ${avg.toFixed(2)}</strong></td>`;
  seriesTbody.appendChild(trAvg);
}

renderSeriesInTable();
