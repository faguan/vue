<template>
	<div id="app">
		<v-classification></v-classification>

		<v-propup></v-propup>
	</div>
</template>

<style>

</style>

<script>
	import vClassification from './components/classification/classification';
	import vPropup from './components/classification/propup'

	export default{
		components:{
			vClassification,vPropup
		}
	}
</script>

