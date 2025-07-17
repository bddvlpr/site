<script lang="ts">
  import TtyLine from '$lib/components/effects/tty-line.svelte';
  import TtyStatus from '$lib/components/effects/tty-status.svelte';
  import Link from '$lib/components/navigation/link.svelte';

  const links = [
    {
      href: 'mailto:contact@bddvlpr.com',
      text: 'e-mail'
    },
    {
      href: 'https://github.com/bddvlpr',
      text: 'github.com'
    },
    {
      href: 'https://discord.com/users/932859041368125532',
      text: 'discord.com'
    },
    {
      href: 'https://last.fm/user/bddvlpr',
      text: 'last.fm'
    },
    {
      href: 'https://matrix.to/#/@luna:bddvlpr.com',
      text: 'matrix.to'
    },
    {
      href: 'https://steamcommunity.com/id/gpgkey',
      text: 'steamcommunity.com'
    }
  ].sort((a, b) => a.text.localeCompare(b.text));

  const { data } = $props();
</script>

<svelte:head>
  <title>bddvlpr</title>
  <meta content="bddvlpr's portfolio page. I'm sorry mobile users." name="description" />
</svelte:head>

<TtyStatus status="OK">Welcome to my portfolio page.</TtyStatus>
<TtyLine>
  Hi, I'm bddvlpr, a full-stack developer and devops engineer from Belgium with a passion for
  high-availability architectures, Nix and cryptography. When I'm not writing code, you'll likely
  find me exploring Virtual Reality, tinkering with electronics and HAM radios. You can find my
  projects and organisations below along with ways to contact me.
</TtyLine>
<br />

<TtyStatus status="OK">Connections</TtyStatus>
{#each links as { href, text }}
  <TtyLine>
    - <Link external {href}>{text}</Link>
  </TtyLine>
{/each}
<br />

{#await data.repos}
  <TtyStatus status="PROG">Loading projects...</TtyStatus>
{:then repos}
  <TtyStatus status="OK">Projects ({repos.length})</TtyStatus>
  {#each repos as { description, html_url, language, name }}
    <TtyLine>
      - <Link external href={html_url}>{name.toLowerCase()}</Link>
      [{language ?? '?'}]
      {description}
    </TtyLine>
  {/each}
{:catch}
  <TtyStatus status="FAIL">Failed to load projects.</TtyStatus>
{/await}
<br />

{#await data.orgs}
  <TtyStatus status="PROG">Loading organisations...</TtyStatus>
{:then orgs}
  <TtyStatus status="OK">Organisations ({orgs.length})</TtyStatus>
  {#each orgs as { avatar_url, login }}
    <TtyLine>
      - <img alt="{login}'s icon" class="inline-block h-4 w-4" src={avatar_url} />
      <Link external href="https://github.com/{login}">{login.toLowerCase()}</Link>
    </TtyLine>
  {/each}
{:catch}
  <TtyStatus status="FAIL">Failed to load organisations.</TtyStatus>
{/await}
<br />

{#await data.trackstop}
  <TtyStatus status="PROG">Loading top tracks...</TtyStatus>
{:then tracks}
  <TtyStatus status="OK">Top tracks [7d] ({tracks.length})</TtyStatus>
  {#each tracks as { artist, name, url }}
    <TtyLine>
      - <Link external href={url}>{name}</Link> by {artist.name}
    </TtyLine>
  {/each}
{:catch}
  <TtyStatus status="FAIL">Failed to load top tracks.</TtyStatus>
{/await}
<br />

{#await data.tracksrecent}
  <TtyStatus status="PROG">Loading recent tracks...</TtyStatus>
{:then tracks}
  <TtyStatus status="OK">Recent tracks ({tracks.length})</TtyStatus>
  {#each tracks as { artist, name, url }}
    <TtyLine>
      - <Link external href={url}>{name}</Link> by {artist['#text']}
    </TtyLine>
  {/each}
{:catch}
  <TtyStatus status="FAIL">Failed to load recent tracks.</TtyStatus>
{/await}
