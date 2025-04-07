import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var getPromedioTemporadasElm = document.getElementById("seasons-average");
renderCoursesInTable(series);
getPromedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(series));
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><strong>".concat(c.num, "</strong></td>\n                           <td> <a href= ").concat(c.link, ">").concat(c.name, "</a> </td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var sumaTemporadas = 0;
    var numeroSeries = series.length;
    series.forEach(function (serie) { return sumaTemporadas = sumaTemporadas + serie.seasons; });
    return sumaTemporadas / numeroSeries;
}