@extends('layouts.app')
@section('content')
<div class="container">
	<div class="row ">
	<div class=" col-md-4">
		<canvas id="myChart" width="400" height="400"></canvas>	
		<div id="pie-data" data-todo="{{ $toDoCount }}" data-done="{{ $doneCount }}" data-total="{{ $total }}"></div>		
	</div>
	<div class=" col-md-4">
		<canvas id="BarChart" width="400" height="400"></canvas>	
		<div id="bar-data" data-names={!! json_encode($names, JSON_UNESCAPED_UNICODE) !!} data-counts={!! json_encode(tasksCountArray($projects))  !!} data-total="{{ $total }}"></div>			
		</div>
	<div class=" col-md-4">
			<canvas id="RadarChart" width="400" height="400"></canvas>			
	</div>
	</div>
	<div class="row">
		<div class=" col-md-4">
		<canvas id="PolarChart" width="400" height="400"></canvas>
		<div id="Polar-data" data-names={!! json_encode($names, JSON_UNESCAPED_UNICODE) !!} data-counts={!! json_encode(tasksCountArray($projects))  !!} data-total="{{ $total }}"></div>				
	</div>
	</div>
</div>

@endsection

@section('customJS')
<script src="{{ asset('js/charts.js') }}"></script> 
<script>
//极地区域图
var ctxPolar = $('#PolarChart');
var data = {
    datasets: [{
        data: $('#bar-data').data('counts'),
        backgroundColor: [
            "{{ rand_color() }}",
            "{{ rand_color() }}",
            "{{ rand_color() }}",
            "{{ rand_color() }}",
            "{{ rand_color() }}"
        ],
    }],
    labels: $('#bar-data').data('names')
};
new Chart(ctxPolar, {
    data: data,
    type: 'polarArea',
     options: {
	   responsive: true,
	   title: {
	   		display: true,
	   		text: "所有任务的完成情况",
	   },
	   legend: {
	   	display: true,
	   	position: "bottom",
	   },
    }
});




//雷达图
	var ctxRadar = $('#RadarChart');
	var data = {
    labels: ["任务总数", "完成的", "未完成的"],
    datasets: [
	  <?php
    	$i = 0;
    	foreach($projects as $project):
    		$name = $project->name;
    		$totalPP = $project->tasks()->count();
    		$toDoPP = $project->tasks()->where('completed',0)->count();
    		$donePP = $project->tasks()->where('completed',1)->count();
    	    echo "{";
    	?>
        
            label: "<?php echo $name; ?>",
            // backgroundColor: "{{ rand_color() }}",
            borderColor: "{{ rand_color() }}",
            pointBackgroundColor: "{{ rand_color() }}",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "{{ rand_color() }}",
            data: [<?php echo $totalPP.",".$donePP.",".$toDoPP; ?>]
        
        <?php
         ($i+1) == $projects->count() ? print "}": print "},";
         $i++;
         endforeach; ?>
    ]
	};
	var myRadarChart = new Chart(ctxRadar, {
    type: 'radar',
    data: data,
     options: {
	   responsive: true,
	   title: {
	   		display: true,
	   		text: "所有任务的完成情况",
	   },
	   legend: {
	   	display: true,
	   	position: "bottom",
	   },
    }
	});
</script>
@endsection