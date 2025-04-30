<script lang="ts">
  import { Accordion } from "@dxdns/svelte-components";

  let { variant } = $props();

  let isOpen = $state(false);
</script>

<Accordion
  {variant}
  onclick={() => {
    isOpen = !isOpen;
  }}
  label="test"
  open={isOpen}
>
  <span>test</span>
</Accordion>
