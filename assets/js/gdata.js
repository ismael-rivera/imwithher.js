$(document).ready(function(){

// do jQuery
	$.getJSON("assets/data/storygrid.json", function(result){	        

	        $.each(result, function(i, row){
	        	console.log(row);
	        	console.log(row.inciting_incident);

	        	var out =	 "<tr>";
					out +=      "<td>" + row.act.number + "</td>";
					out +=      "<td>" + row.chapter.number + "</td>";
					out +=      "<td>" + row.inciting_incident + "</td>";
					out +=      "<td>" + row.complication + "</td>";
					out +=      "<td>" + row.crisis + "</td>";
					out +=      "<td>" + row.climax + "</td>";
					out +=      "<td>" + row.resolution + "</td>";
					out +=   "</tr>";

	            $("#storygrid tbody").append(out);
	        });
	});

	

})




