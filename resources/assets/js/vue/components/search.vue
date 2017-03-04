<template>
    <div>
	    <form class="navbar-form navbar-left" role="search">
	        <div class="form-group">
	            <div class="input-group">
	                <input type="text" v-model.trim="searchString" class="form-control" placeholder="Search" @blur="leave" @focus="fetchTasks">
	                <div class="input-group-addon"><i class="fa fa-search"></i></div>
	            </div>
	        </div>

	        <ul class="list-group search-list" v-if="show">
	        	<li class="list-group-item" v-for="task in searchFor">
	        		<a v-bind:href="getHref(task.id)">
		        		<p>{{ task.title }}</p>
	        		</a>
	        	</li>
	        </ul>

	    </form>
	</div>	
</template>

<script>
	export default {
		data: function() {
			return {searchString: '',tasks: [],show: false}
		},
		methods: {
			fetchTasks: function () {
			Vue.resource('/tasks/searchApi').get().then((response)=>{
					this.show = true;
					Vue.set(this,'tasks',response.body);
				},(response)=>{

				});
			},
			leave: function () {
				var vm = this;
				setTimeout(function(){
					vm.show = false;					
				},1000);
			},
			getHref: function(val) {
				return '/tasks/'+val;
			},
		},
		computed: {
            searchFor: function (tasks) {
            var self = this;
            self.searchString = self.searchString.toLowerCase();
               return self.tasks.filter(function (task) {
              if( task.title.toLowerCase().indexOf(self.searchString) !== -1) {
						return task;
						}
           })
           },
       }
	}
</script>

<style>
	.navbar-default .navbar-collapse, .navbar-default .navbar-form {
		height: 3em;


	}
	.navbar-form .search-list {
		width: 20%;
		height: 30em;
		overflow: auto;
		position: absolute;
		z-index: -1;
	}
</style>