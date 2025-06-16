<script lang="ts">
	import { FeflowProvider } from "@dxdns/feflow"

	let { children } = $props()
</script>

<svelte:head>
	<style>
		@font-face {
			font-family: "Inter";
			src: url("/fonts/Inter-Regular.woff2") format("woff2");
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: "Inter";
			src: url("/fonts/Inter-Bold.woff2") format("woff2");
			font-weight: 700;
			font-style: normal;
			font-display: swap;
		}

		body {
			font-family: "Inter", sans-serif;
			line-height: 1.2;
			overflow-x: hidden;
		}
	</style>
</svelte:head>

<FeflowProvider defaultMode="dark">
	{@render children?.()}
</FeflowProvider>
