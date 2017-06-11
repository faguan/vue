// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/flexible'
import resource from 'vue-resource'

import Vuex from 'vuex'
/* eslint-disable no-new */

Vue.use(Vuex);

Vue.use(resource);


//仓库Store
const store = new Vuex.Store({
	//储存的状态
	state : {
		showState : false,
		catEmitStatus : false,//是否出发cat方法
		goods:[],
		catId:'10807',
	},
	// 行为，对状态进行改变，是静态行为
	mutations : {
		changeState(state){
			state.showState= !state.showState
		},
		emitCat(state,val){
			state.catEmitStatus = val;
			// state.catEmitStatus = false;
		}
	}
})

Vue.filter('n',function(e){
	let n,result;
	n = e/100;
	result = n.toFixed(2);
	return result;
})

new Vue({
  el: '#app',
  render: h=>h(App),
  router,
  resource,
  store
})
