<script>
   import { createEventDispatcher } from "svelte";

   export let items;
   export let activeItem;

   const dispatch = createEventDispatcher();
</script>

<style>
   .active {
      color: #d91b42;
      border-bottom: 2px solid #d91b42;
      padding-bottom: 8px;
   }

   .tabs {
      margin-bottom: 40px;
   }

   ul {
      display: flex;
      justify-content: center;
      padding: 0;
      list-style-type: none;
   }

   li {
      margin: 0 20px;
      font-size: 18px;
      color: #555;
      cursor: pointer;
   }
</style>

<div class="tabs">
   <ul>
      {#each items as item}
         <li on:click={() => dispatch('tabChange', item)}>
            <div class:active={item === activeItem}>{item}</div>
         </li>
      {/each}
   </ul>
</div>
