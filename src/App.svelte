<script lang="ts">
  let //
    input = "",
    output = "",
    last_changed = 0;

  function convert() {
    if (last_changed === 0) {
      // l -> r
    } else {
      // r -> l
    }
  }

  function onchange(e: { target: HTMLTextAreaElement }) {
    // if input is changed, set to 0, else set to 1
    last_changed = e.target.name === "input" ? 0 : 1;
  }
</script>

<main class="tc">
  <h1 class="fw1" style="font-size: 3rem;margin: 0.5em auto;">PHANTOM</h1>
  <div id="controls">
    <button class="rpm-10" on:click={convert}>
      <svg class="p-rel" viewBox="0 0 32 32" stroke-width="2">
        <path
          d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"
        />
      </svg>
      <span>Convert</span>
    </button>
  </div>
  <lt-split class="rx10" ratio="1:1">
    <div slot="a">
      <h1>DEEZ</h1>
      <textarea class="rx10 b0" name="input" id="input" bind:value={input}
      ></textarea>
    </div>
    <div slot="b">
      <h1>NUTS</h1>
      <textarea class="rx10 b0" name="output" id="output" bind:value={output}
      ></textarea>
    </div>
  </lt-split>
</main>

<style lang="scss">
  button {
    background: #fff;
    font-size: 24px;
    min-width: 50px;
    svg {
      height: 24px;
      width: 24px;
      margin-right: 10px;
      stroke: #000;
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
    margin: 10px auto;
    background: #fff;
    min-height: 300px;
    width: 90%;
  }
</style>
