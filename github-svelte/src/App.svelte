<script>
	//export let name;
	import Navbar from "./Navbar.svelte";
	import Admin from "./Admin.svelte";
	import NewAdmin from "./NewAdmin.svelte";
	import Sidenav from "./Sidenav.svelte";
	import { Router, Route } from 'svero';
</script>

<!-- <main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> -->
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