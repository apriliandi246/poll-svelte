<script>
   import Header from "./components/Header.svelte";
   import Footer from "./components/Footer.svelte";
   import PollList from "./components/PollList.svelte";
   import CreatePollForm from "./components/CreatePollForm.svelte";
   import Tabs from "./shared/Tabs.svelte";

   // tabs
   let items = ["Current Polls", "Add New Poll"];
   let activeItem = "Current Polls";

   function tabChange(event) {
      activeItem = event.detail;
   }

   function handleAdd(event) {
      activeItem = "Current Polls";
   }
</script>

<style>
   main {
      max-width: 960px;
      margin: 40px auto;
   }
</style>

<Header />

<main>
   <Tabs on:tabChange={tabChange} {activeItem} {items} />

   {#if activeItem === 'Current Polls'}
      <PollList />
   {:else}
      <CreatePollForm on:add={handleAdd} />
   {/if}
</main>

<Footer />
