<script lang="ts">
	import { Badge, Button, Navbar } from "@dxdns/feflow"
</script>

<svelte:head>
	<title>feflow</title>
</svelte:head>

<Navbar variant="text" isTranslucent>
	<div
		style="
            display:flex;
            align-items: center;
			gap: 1rem;
            "
	>
		<a href="/" title="logo" style="flex: 1;">
			<img alt="logo" src="/logo.png" width="80px" />
		</a>
		<a href="/docs">
			<Navbar.Item>Docs</Navbar.Item>
		</a>
	</div>
</Navbar>

<div
	style="
	width: 60%; 
	margin: 3rem auto; 
	line-height: 2.5;
	text-align: center;
	"
>
	<Badge variant="outlined" size="sm">
		<p style="padding: 0.5rem;">Version 0.5.14 - Latest Release</p>
	</Badge>
	<h1>Documentation</h1>
	<p>building...</p>
	<br />
	<a href="/docs">
		<Button size="md">Get Started</Button>
	</a>
</div>
