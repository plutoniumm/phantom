<script lang="ts">
  let //
    input = "",
    output = "",
    deez = "DEEZ",
    nuts = "NUTS",
    last_changed = 0;

  let transformer: Interchange | null = null;

  const options = Object.freeze([
    { mode: null, name: ["", ""] },
    { mode: "base64", name: ["Base64", "String"] },
  ]);

  function convert() {
    if (!transformer) return;
    try {
      if (last_changed === 0) {
        transformer.atob(input).then((res) => (output = res));
      } else {
        transformer.btoa(output).then((res) => (input = res));
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function onchange(e: { target: HTMLSelectElement }) {
    const mode = e.target.value;
    transformer = (await import(`./lib/${mode}.ts`)).default;
    const name = options.find((o) => o.mode === mode)?.name;
    deez = name?.[0] || "DEEZ";
    nuts = name?.[1] || "NUTS";
  }

  const here = (e: Event) => (last_changed = e?.target?.id === "input" ? 0 : 1);
</script>

<main class="tc">
  <h1 class="fw1" style="font-size: 3rem;margin: 0.5em auto;">PHANTOM</h1>
  <div id="controls" class="f j-ar">
    <select class="m10 p5 b0 rx5" name="mode" id="mode" on:change={onchange}>
      {#each options as option}
        <option value={option.mode}>
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
      <textarea class="rx10 b0" on:change={here} id="input" bind:value={input}
      ></textarea>
    </div>
    <div slot="b">
      <h1>{nuts}</h1>
      <textarea class="rx10 b0" on:change={here} id="output" bind:value={output}
      ></textarea>
    </div>
  </lt-split>
</main>

<style lang="scss">
  button {
    background: #fff;
    font-size: 18px;
    min-width: 100px;
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
  select {
    min-width: 100px;
    font-size: 18px;
  }
  lt-split {
    margin: 10px;
    min-height: min(600px, 60vh);
    border: 1px solid #888;
  }
  textarea {
    margin: 10px auto;
    background: #fff;
    min-height: 300px;
    width: 90%;
  }
</style>
