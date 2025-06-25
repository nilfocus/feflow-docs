<script lang="ts">
	import { Button, Tab, Card } from "@dxdns/feflow"
	import { fade, fly } from "svelte/transition"

	let activeTab = $state({
		tab1: "1",
		tab2: "1",
		tab3: "1",
		tab4: "1",
		tab5: "1"
	})

	const tabs = Array.from({ length: 10 }, (_, i) => {
		const id = (i + 1).toString()
		return {
			id,
			label: `label${id}`,
			content: `test${id}`,
			...(i === 0 && { icon: "&#9734;" })
		}
	})

	function handle(tab: keyof typeof activeTab, id: string) {
		activeTab[tab] = id
	}
</script>

{#snippet content(isActive: boolean, content: any)}
	<Tab.Panel
		{isActive}
		transition={{
			in: [fly, { x: 300, duration: 400 }],
			out: [fade, { duration: 300 }]
		}}
	>
		{content}
	</Tab.Panel>
{/snippet}

{#snippet icon(s: string)}
	<span style="font-size: 20px;">{@html s}</span>
{/snippet}

<div style="max-width:500px; margin: 3rem auto;">
	<Card>
		<Tab id="tab1">
			<Tab.List scrollable={false} lineStyle={{ color: "green" }}>
				{#each tabs.slice(0, 2) as tab}
					<Button
						id={tab.id}
						title={tab.label}
						variant="text"
						style="flex:1;"
						onclick={() => {
							handle("tab1", tab.id)
						}}
					>
						{#if tab.icon}
							{@render icon(tab.icon)}
						{/if}
						{tab.label}
					</Button>
				{/each}
			</Tab.List>

			{#each tabs as tab}
				{@render content(activeTab.tab1 === tab.id, tab.content)}
			{/each}
		</Tab>
	</Card>

	<Tab id="tab2" style="background: transparent;">
		<Tab.List hoverFollower>
			{#each tabs as tab}
				<Button
					id={tab.id}
					title={tab.label}
					variant="text"
					style="flex:1;"
					onclick={() => {
						handle("tab2", tab.id)
					}}
				>
					{#if tab.icon}
						{@render icon(tab.icon)}
					{/if}
					{tab.label}
				</Button>
			{/each}
		</Tab.List>

		{#each tabs as tab}
			{@render content(activeTab.tab2 === tab.id, tab.content)}
		{/each}
	</Tab>
</div>
