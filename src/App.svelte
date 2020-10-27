<script>
   import Header from "./components/Header.svelte";
   import Footer from "./components/Footer.svelte";
   import PollList from "./components/PollList.svelte";
   import CreatePollForm from "./components/CreatePollForm.svelte";
   import Tabs from "./shared/Tabs.svelte";

   // tabs
   let items = ["Current Polls", "Add New Poll"];
   let activeItem = "Current Polls";

   let polls = [
      {
         id: 1,
         question: "React or Svelte",
         answerA: "Svelte",
         answerB: "React",
         votesA: 10,
         votesB: 8,
      },
   ];

   function tabChange(event) {
      activeItem = event.detail;
   }

   function handleAdd(event) {
      polls = [event.detail, ...polls];
      activeItem = "Current Polls";
   }

   function handleVote(event) {
      const { id, option } = event.detail;
      const copiedPolls = [...polls];
      const upvotePoll = copiedPolls.find((poll) => poll.id === id);

      if (option === "a") {
         upvotePoll.votesA++;
      } else {
         upvotePoll.votesB++;
      }

      polls = copiedPolls;
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
      <PollList on:vote={handleVote} {polls} />
   {:else}
      <CreatePollForm on:add={handleAdd} />
   {/if}
</main>

<Footer />
