<script lang="ts">
  import { onMount } from "svelte";
  import { search, options } from "./utils";

  let //
    select = 0,
    input = "",
    output = "",
    deez = "DEEZ",
    nuts = "NUTS",
    track = 0;

  let transformer: Interchange | null = null;

  function convert() {
    if (!transformer) return;
    try {
      if (track === 0) {
        transformer.atob(input).then((res) => (output = res));
      } else {
        transformer.btoa(output).then((res) => (input = res));
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function set(mode: any) {
    if (typeof mode === "string") {
      mode = options.find((o) => o.id === mode);
    }

    select = mode.id;
    import(`./lib/${select}.ts`).then((m) => (transformer = m.default));
    mode = mode.name;
    deez = mode?.[0] || "DEEZ";
    nuts = mode?.[1] || "NUTS";
  }

  onMount(() => {
    const params = window.location.search.slice(1);
    let res = search(options, params);
    if (!res.length) return;
    set(res[0].item);
  });
</script>

<main class="tc">
  <h1 class="fw1" style="font-size: 3rem;margin: 0.5em auto;">PHANTOM</h1>
  <div id="controls" class="f j-ar">
    <select
      class="m10 p5 b0 rx5"
      name="mode"
      id="mode"
      bind:value={select}
      on:change={(e) => set(e.target.value)}
    >
      {#each options as option}
        <option value={option.id}>
          {option.name.join("-").toLowerCase()}
        </option>
      {/each}
    </select>
    <button class="p10 m10 rx5" on:click={convert}>
      <svg class="p-rel" viewBox="0 0 32 32">
        <path
          d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"
        />
      </svg>
      <span>Convert</span>
    </button>
  </div>
  <lt-split class="rx10" ratio="1:1">
    <div slot="a">
      <h1>{deez}</h1>
      <textarea id="input" on:change={() => (track = 0)} bind:value={input}
      ></textarea>
    </div>
    <div slot="b">
      <h1>{nuts}</h1>
      <textarea id="output" on:change={() => (track = 1)} bind:value={output}
      ></textarea>
    </div>
  </lt-split>
</main>

<style lang="scss">
  button,
  select {
    background: #eef;
    font-size: 18px;
    min-width: 100px;
  }
  button {
    svg {
      height: 18px;
      width: 18px;
      margin-right: 5px;
      stroke: #000;
      stroke-width: 3;
      fill: none;
      top: 3px;
    }
  }
  lt-split {
    margin: 10px;
    min-height: min(600px, 60vh);
    border: 1px solid #888;
  }
  textarea {
    font-family: monospace;
    background: #ccc;
    margin: 10px auto;
    min-height: 300px;
    width: 90%;
    border-radius: 10px;
    padding: 10px;
    border: 0;
  }
</style>
