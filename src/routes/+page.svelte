<script lang="ts">
  import TtyLine from '$lib/components/effects/tty-line.svelte';
  import Link from '$lib/components/navigation/link.svelte';

  const projects = [
    {
      description: 'Serves a calendar API (ICS) for events provided from Untis.',
      href: 'https://github.com/bddvlpr/untis-ics-sync',
      title: 'bddvlpr/untis-ics-sync'
    },
    {
      description: "Small Spotify integration into VRChat's chatbox OSC.",
      href: 'https://github.com/bddvlpr/vrc-osc-spotify',
      title: 'bddvlpr/vrc-osc-spotify'
    },
    {
      description:
        'Fast, typesafe fetch client for your OpenAPI schema. Works with Tauri HTTP API.',
      href: 'https://github.com/devolite/openapi-fetch-tauri',
      title: 'devolite/openapi-fetch-tauri'
    },
    {
      description:
        'Fast, typesafe fetch client for your OpenAPI schema. Works with Angular HTTPClient API.',
      href: 'https://github.com/devolite/openapi-fetch-angular',
      title: 'devolite/openapi-fetch-angular'
    },
    {
      description: 'Nix Packages collection.',
      href: 'https://github.com/nixos/nixpkgs',
      title: 'nixos/nixpkgs'
    }
  ];
</script>

<TtyLine># Welcome to my portfolio page.</TtyLine>
<br />
<TtyLine>## About</TtyLine>
<TtyLine status="EMPTY">
  - Interested in high-availability structures, Nix and cryptography.</TtyLine
>
<TtyLine status="EMPTY">- Virtual Reality & electronics hobbyist. FOSS & Linux enthusiast.</TtyLine>
<TtyLine status="EMPTY">- Consumes battery acid 24/7 while listening to music.</TtyLine>
<TtyLine status="EMPTY">- Perfectionistic in a bad way.</TtyLine>
<br />
<TtyLine>## Projects</TtyLine>
{#each projects as { description, href, title }}
  <TtyLine status="EMPTY">
    - <Link {href}>{title}</Link>: {description}
  </TtyLine>
{/each}
