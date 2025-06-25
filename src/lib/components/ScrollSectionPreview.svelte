<script lang="ts">
	import { getSections, ScrollSection, Window } from "@dxdns/feflow"

	const sections = $derived(getSections())
	const sectionsData = Array.from({ length: 25 }, (_, index) => ({
		reference: `Section ${index + 1}`
	}))
</script>

<Window style="max-height: 300px; overflow-y: scroll;">
	<ScrollSection
		data={sections}
		style="
        position: sticky; 
        margin: 0; 
        top: -16px; 
        z-index: 1;
        "
	>
		{#each sectionsData as { reference }}
			<ScrollSection.Content
				id={reference}
				style="
                height: 100vh; 
                border: 1px solid red; 
                padding: 1rem;
                "
			>
				<span>{reference}</span>
			</ScrollSection.Content>
		{/each}
	</ScrollSection>
</Window>
