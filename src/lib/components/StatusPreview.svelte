<script lang="ts">
	import { Status } from "@dxdns/feflow"

	const variants = ["pulse", "ping", "bounce"]
	const colors = ["blue", "red", "green"]
</script>

<div style="max-width: 300px; margin: 0 auto; line-height: 3;">
	{#each variants as variant, i}
		<Status variant={variant as any} color={colors[i]} />
	{/each}

	{#each ["5rem", 100, "150px", 200] as size, i}
		<Status
			color={i % 2 ? "aqua" : "orange"}
			variant={i % 2 ? "bounce" : "none"}
			{size}
		/>
	{/each}
</div>
