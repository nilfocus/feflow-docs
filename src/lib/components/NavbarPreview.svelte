<script lang="ts">
	import {
		Card,
		HoverFollower,
		Menu,
		Navbar,
		Separator,
		themeConfig,
		Window
	} from "@dxdns/feflow"

	let isOpen = $state(false)

	const theme = $derived(themeConfig())
</script>

{#snippet logo()}
	<h4 style="margin: 0;">Lo<span style="color: aqua;">Go</span></h4>
{/snippet}

{#snippet contentMain(s: string)}
	<main style="min-height: 100vh; width: 80%; margin: 3rem auto;">
		<h2>{s}</h2>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur
			voluptates odit illum, autem, alias perspiciatis numquam tempora sequi
			voluptate, iste recusandae nesciunt suscipit. Quasi ipsa dolore tempora ea
			tempore!
		</p>
	</main>
{/snippet}

<Window style="max-width: 500px; overflow: auto; position: relative;">
	<Navbar
		id="navFree"
		style="
        display: flex; 
        align-items: center; 
        gap: 1rem;
        margin: 0;
        "
	>
		{@render logo?.()}

		<div style="flex:1;"></div>

		<HoverFollower
			orientation="horizontal"
			bgColor={theme.colors.colorSuccess}
			class={`menu ${isOpen ? "show" : ""}`}
		>
			<Navbar.Item aria-current="page">active</Navbar.Item>
			<Navbar.Item>test1</Navbar.Item>
			<Navbar.Item>test2</Navbar.Item>
		</HoverFollower>

		<Menu id="menu-navFree" style="margin: 0;">
			{#snippet anchor()}
				<Navbar.Item>Open menu</Navbar.Item>
			{/snippet}

			{#snippet items()}
				<Menu.Item href="https://dxdns.dev" target="_blank">test1</Menu.Item>
				<Separator />
				<Menu.Item>test2</Menu.Item>
				<Separator />
				<Menu.Item>test3</Menu.Item>
			{/snippet}
		</Menu>

		<Navbar.Toggler
			id="toggler-1"
			checked={isOpen}
			onclick={() => {
				isOpen = !isOpen
			}}
		/>
	</Navbar>
	{@render contentMain?.("navFree")}
</Window>

<Window style="height: 500px; width: 500px; overflow: auto;">
	<div style="text-align: center; margin: 5rem 0;">
		<h2>Scroll Down</h2>
		<p>Scroll down to see the sticky effect.</p>
	</div>

	<Navbar
		id="navSticky"
		style="
        position: sticky; 
        top: 0; 
        display: flex; 
        align-items: center; 
        gap: 1rem;
        margin: 0;
        z-index: 1;
        "
		isTranslucent
	>
		<Navbar.Toggler id="toggler-2" />
		<Navbar.Item variant="contained">test1</Navbar.Item>
		<Navbar.Item variant="outlined">test2</Navbar.Item>
		<div style="flex: 1;"></div>
		{@render logo?.()}
	</Navbar>
	<Card style="background: {theme.colors.colorWarning};">
		{@render contentMain?.("navSticky")}
	</Card>
</Window>
