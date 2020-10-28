<script>
   export let type = "primary";
   export let flat = true;
   export let inverse = false;
</script>

<style>
   button {
      cursor: pointer;
      border: 0;
      border-radius: 6px;
      padding: 8px 12px;
      font-weight: bold;
      margin-top: 20px;
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
   }

   .primary {
      background-color: #d91b42;
      color: white;
   }

   .secondary {
      background-color: #45c496;
      color: white;
   }

   .flat {
      box-shadow: none;
   }

   .primary.inverse {
      color: #d91b42;
      background-color: white;
      border: 2px solid #d91b42;
   }

   .secondary.inverse {
      color: #45c496;
      background-color: whitesmoke;
      border: 2px solid #45c496;
   }
</style>

<button on:click class={type} class:flat class:inverse>
   <slot />
</button>
