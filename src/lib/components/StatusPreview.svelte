<script lang="ts">
	import { Status, themeConfig } from "@dxdns/feflow"

	const { colors } = $derived(themeConfig())
	const variants = ["pulse", "ping", "bounce"]
</script>

<div style="max-width: 300px; margin: 0 auto; line-height: 3;">
	{#each variants as variant, i}
		<Status
			variant={variant as any}
			color={i % 2 ? colors.colorSuccess : colors.colorError}
		/>
		<br />
	{/each}

	{#each ["5rem", 100, "150px", 200] as size, i}
		<Status
			color={i % 2 ? colors.colorInfo : colors.colorWarning}
			variant={i % 2 ? "bounce" : "none"}
			{size}
		/>
		<br />
	{/each}
</div>
