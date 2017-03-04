//条形图
var ctxBar = $('#BarChart');
var data1 = {
    labels: $('#bar-data').data('names'),
    datasets: [
        {
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)', 
            borderWidth: 1,
            data: $('#bar-data').data('counts'),
        }
    ]
};
var myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: data1,
     options: {
	   responsive: true,
	   title: {
	   		display: true,
	   		text: "所有任务的完成比例（总数：" +$('#bar-data').data('total')+ "）",
	   },
	   legend: {
	   	display: false,
	   },
    }

});