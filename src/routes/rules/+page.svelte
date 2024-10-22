<script>
  import { Text } from "$lib/utils/text";

  export let data;
</script>

{#each data.games as game}
  <p>├──<a href="/rules/{game}">{Text.Format(game)}</a></p>
{/each}
<style>
  p
  {
      font-size: 1.5rem;
      margin:0;
  }

  a
  {
      text-decoration: none;
  }

  a:hover
  {
      opacity:50%;
  }
</style>