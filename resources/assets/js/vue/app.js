var Vue  = require('./vue');
var VueResource  = require('./vue-resource');
var stepList = require('./components/stepList.vue');
Vue.use(VueResource);
var eventHub = new Vue();
Vue.http.headers.common['X-CSRF-TOKEN'] = $('#token').attr("content");
	var resource = Vue.resource(top.location+'/steps{/id}');
	var app4 = new Vue({
	  el: '#app-4',
	  data: {
	    steps: [
	      { name: '', completed:false },
	    ],

	    baseURL: self.location+'/steps',
	  },
	  mounted: function () {
	  	this.fetchSteps();
	  },
	  components: {
	  	stepList
	  },
	  methods: {
	    addStep: function (step) {
	    	if(step){
	  	    	resource.save('', {name:step}).then((response)=>{
		  	        this.fetchSteps();
		    	},(response)=>{
		    		response.status;
		    	});
	    	}

	    },
	    toggleCompletion: function (step) {
  	    	resource.update({id:step.id}, {opposite: !step.completed}).then((response)=>{
		  	        this.fetchSteps();
		    	},(response)=>{
		    		response.status;
		    	});
	    },
	    removeStep: function (step) {
	  	    	resource.delete({id:step.id}).then((response)=>{
		  	        this.fetchSteps();
		    	},(response)=>{
		    		response.status;
		    	});
	    },
	    completeAll: function () {
  	    	this.$http.post(this.baseURL+'/complete').then((response)=>{
		  	        this.fetchSteps();
		    	},(response)=>{
		    		response.status;
		    	});
	    },
	    clearCompleted: function () {
	   	this.$http.delete(this.baseURL+'/clear').then((response)=>{
		  	        this.fetchSteps();
		    	},(response)=>{
		    		response.status;
		    	});
	    },
	    fetchSteps: function () {
	    	resource.get().then((response)=>{
	    		Vue.set(this, 'steps', response.body);
	    	},(response)=>{
	    		response.status;
	    	});
	    },
	  },

 


	})