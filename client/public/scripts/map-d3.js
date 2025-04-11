// JavaScript source code
let width = 500,
	height = 736;
let svg = d3.select(".svg svg").attr("width", width).attr("height", height);

let projection = d3.geo
	.mercator()
	.center([18, 52])
	.scale([width / 1.5])
	.translate([width / 2, height / 2]);

let pathGenerator = d3.geo.path().projection(projection);

d3.json("Scripts/custom.geo.json", (geojson) => {
	svg
		.selectAll("path")
		.data(geojson.features)
		.enter()
		.append("path")
		.attr("class", (data) => data.properties.name)
		.attr("d", pathGenerator) 
		.attr("stroke", "#161f35") 
		.attr("fill", "#fff");
});