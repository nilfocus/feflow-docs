<script lang="ts">
	import { Code } from "@dxdns/feflow"

	const feflowProviderBlock = [
		`<script lang="ts">`,
		`  import { FeflowProvider } from "@dxdns/feflow"`,
		`<` + `/script>`,
		``,
		`<FeflowProvider>`,
		`  {@render children()}`,
		`</FeflowProvider>`
	]

	const buttonBlock = [
		`<script lang="ts">`,
		`  import { Button } from "@dxdns/feflow"`,
		`<` + `/script>`,
		``,
		`<Button>`,
		`  test`,
		`</Button>`
	]
</script>

<h1>Get Started</h1>
<br />
<section>
	<Code>
		{#each feflowProviderBlock as line, i}
			<pre data-prefix={i + 1}><code>{line}</code></pre>
		{/each}
	</Code>
</section>

<section style="margin-top: 1rem;">
	<Code>
		{#each buttonBlock as line, i}
			<pre data-prefix={i + 1}><code>{line}</code></pre>
		{/each}
	</Code>
</section>
