<script lang="ts">
	import { BottomSheet, Button } from "@dxdns/feflow"

	let isOpen = $state(false)
</script>

<BottomSheet
	{isOpen}
	handleClose={() => {
		isOpen = false
	}}
>
	<h1>test</h1>
</BottomSheet>

<Button
	onclick={() => {
		isOpen = !isOpen
	}}
>
	Open
</Button>
