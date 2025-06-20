<script lang="ts">
	import { Autocomplete } from "@dxdns/feflow"

	const data = Array.from(Array(30)).map((_, i) => ({
		id: i,
		label: `Item ${i}`
	}))
</script>

<Autocomplete variant="search" {data} filter={(item) => `${item.label}`}>
	{#snippet renderInput({ id, label })}
		<a href="/{id}">
			{label}
		</a>
	{/snippet}
</Autocomplete>
