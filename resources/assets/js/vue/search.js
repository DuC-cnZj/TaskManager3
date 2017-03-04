var Vue  = require('./vue');
var VueResource  = require('./vue-resource');
var search = require('./components/search.vue');

Vue.use(VueResource);


var app5 = new Vue({
    el: '#app-navbar-collapse',
	components: {search}
});