<script>
	//export let name;
	import Navbar from "./Navbar.svelte";
	import Admin from "./Admin.svelte";
	import NewAdmin from "./NewAdmin.svelte";
	import Sidenav from "./Sidenav.svelte";
	import { Router, Route } from 'svero';
</script>

<Navbar />
<!-- <Sidenav/> -->

<Admin/>
<!-- <Admin/> -->

<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>