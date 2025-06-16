<script lang="ts">
	import { Separator } from "@dxdns/feflow"

	let { children } = $props()
</script>

<div class="container">
	<div class="left">
		<a href="/" title="logo" style="flex: 1;">
			<img alt="logo" src="/logo.png" width="150px" />
		</a>
		<br />
		<br />
		<Separator />
		<!-- <h3>components</h3>
		<ul style="padding: 1rem 0 0 0;">
			<li><a href="/docs/button">button</a></li>
		</ul> -->
	</div>

	<main style="padding: 1rem;">
		{@render children()}
	</main>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 250px 1fr;
		gap: 1rem;
		min-height: 100vh;
	}

	.left {
		background: var(--ff-color-surface);
		border-right: 1px solid var(--ff-color-border);
		text-align: center;
		padding-top: 1rem;
	}

	@media screen and (max-width: 768px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
