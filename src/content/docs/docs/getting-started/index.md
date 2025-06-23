---
title: Installation
description: How to install and set up feflow in your project
---

#### Requirements

| Tooling     | Minimum Supported Version |
|-------------|---------------------------|
| **SvelteKit** | 2.x                       |
| **Svelte**    | 5.x                       |

#### 1 - Install `@dxdns/feflow`

```
npm install @dxdns/feflow
```

#### 2 - Setup provider

Wrap your application with the `FeflowProvider` to enable all Feflow components.  
This should be done at the layout level to ensure global access.

> Recommended: Place this in `src/routes/+layout.svelte` (SvelteKit root layout)

```svelte
<script lang="ts">
    import { FeflowProvider } from "@dxdns/feflow"
</script>

<FeflowProvider>
    {@render children()}
</FeflowProvider>
```

#### 3 - Enjoy!

```svelte
<script lang="ts">
    import { Button } from "@dxdns/feflow"
</script>

<Button>
    Click me
</Button>
```