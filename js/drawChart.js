/*
 * Archivo que pinta los graficos con la libreria d3 js
 * Autor: Valentin Aguila Fernandez
 *
 */ 

function dibujaDona(contenedorhtml, datacircle, datalines, subject, colores){
    // Dimensiones del grafico
    var width = 300
    height = 310
    margin = 35
    
    // Se crea svg
    var svg = d3.select(contenedorhtml)
	.append("svg")
	.attr("width", width)
	.attr("height", height)
    
    /************************************************/
    /************ Primer layer (dona) ***************/
    /************************************************/
    var g = svg.append( "g" ) // First layer
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    // Propiedades generales
    var radius = Math.min(width, height) / 2 - margin

    color = d3.scaleOrdinal()
    .domain(datacircle)
    .range(colores);
    
    var pie = d3.pie()
	.sort(null) 
	.value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(datacircle))
    
    // arc
    var arc = d3.arc()
	.innerRadius(radius * 0.9)         
	.outerRadius(radius * 1)
    
    var outerArc = d3.arc()
	.innerRadius(radius * 0.9)
	.outerRadius(radius * 0.9)
    
    //Pintamos
    g.selectAll('allSlices')
	.data(data_ready)
	.enter()
	.append('path')
	.attr('d', arc)
    .attr('fill', function(d){ return(color(d.data.key)) })
	.attr("stroke", "white")
	.style("stroke-width", "2px")
	.style("opacity", 1)
    
    /*******************************************************************/
    /************ Segundo layer (Grafica dentro de dona) ***************/
    /*******************************************************************/
    var lines = svg.append( "g" );
    var margin = {top: 5, right: 5, bottom: 5, left: 40},
	width = 180 - margin.left - margin.right,
	height = 30 - margin.top - margin.bottom;
    
    var xdata = d3.range(0, 15);
    var ydata = datalines;
    var xy = [];
    for(var i = 0; i < xdata.length; i++ ) {
	xy.push({x: xdata[i], y: ydata[i]});
    }

    var xscl = d3.scaleLinear()
	.domain(d3.extent(xy, function(d) {return d.x;})) // Parte x
	.range([margin.left+48, width + margin.left+48])
    var yscl = d3.scaleLinear()
	.domain(d3.extent(xy, function(d) {return d.y;})) // Parte y
	.range([height + margin.top+200, margin.top+200])
    var myline = d3.line()
	.x(function(d) { return xscl(d.x);}) // Escala x
	.y(function(d) { return yscl(d.y);}) // Escala y

    // Pintamos
    lines.append("path")
	.attr("class", "line") 
	.attr("d", myline(xy)) 
	.style("fill", "none")
	.style("stroke", "grey")
	.style("stroke-width", 2);
    
    /**************************************************/
    /************ Tercer layer (Textos) ***************/
    /**************************************************/
    var texto = svg.append( "g" );
    
    // Subjects
    drawText(texto, width+18, height + 100, subject.titulo, "indicador","middle","#7e7e7e");
    drawText(texto, width+18, height + 130, subject.cantidadTotal, "money","middle","");
    drawText(texto, width-100, height + 267, subject.descripcionProd1, "negrita","middle",colores[0]);
    drawText(texto, width-85, height + 285, subject.porcentajeProd1+"% "+subject.cantidadProd1, "negrita descripcion","rigth","");
    drawText(texto, width+100, height + 270, subject.descripcionProd2, "negrita","middle",colores[1]);
    drawText(texto, width+114, height + 285, subject.porcentajeProd2+"% "+subject.cantidadProd2, "negrita descripcion","left","");
    
}

// Funcion auxiliar para pintar texto
function drawText(element, x, y, texto, clase, align, color){
    element.append("text")
	.attr("x",x).attr("y",y)
	.text(texto)
	.style("text-anchor", "middle")
    .style("fill", color)
	.attr("class", clase)
    
    return element;
}
