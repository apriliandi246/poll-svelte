<script>
   import { tweened } from "svelte/motion";
   import PollStore from "../stores/PollStore.js";
   import Card from "../shared/Card.svelte";
   import Button from "../shared/Button.svelte";

   export let poll;

   // reactive value
   $: totalVotes = poll.votesA + poll.votesB;
   $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
   $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

   // tweened percentages
   const tweenedA = tweened(0);
   const tweenedB = tweened(0);

   $: tweenedA.set(percentA);
   $: tweenedB.set(percentB);

   function handleVote(option, id) {
      PollStore.update((currentData) => {
         const copiedPolls = [...currentData];
         const upvotePoll = copiedPolls.find((poll) => poll.id === id);

         if (option === "a") {
            upvotePoll.votesA++;
         } else {
            upvotePoll.votesB++;
         }

         return copiedPolls;
      });
   }

   function handleDelete(id) {
      PollStore.update((currentData) => {
         return currentData.filter((poll) => poll.id !== id);
      });
   }
</script>

<style>
   h3 {
      margin: 0 auto;
      color: #555;
   }
   p {
      margin-top: 6px;
      font-size: 14px;
      color: #aaa;
      margin-bottom: 30px;
   }
   .answer {
      background: #fafafa;
      cursor: pointer;
      margin: 10px auto;
      position: relative;
   }
   .answer:hover {
      opacity: 0.6;
   }
   span {
      display: inline-block;
      padding: 10px 20px;
   }

   .percent {
      height: 100%;
      position: absolute;
      box-sizing: border-box;
   }

   .percent-a {
      background: rgba(217, 27, 66, 0.2);
      border-left: 4px solid #d91b42;
   }
   .percent-b {
      background: rgba(69, 196, 150, 0.2);
      border-left: 4px solid #45c496;
   }

   .delete {
      text-align: center;
   }
</style>

<div class="poll">
   <Card>
      <h3>{poll.question}</h3>
      <p>{totalVotes}</p>
      <div class="answer" on:click={() => handleVote('a', poll.id)}>
         <div class="percent percent-a" style="width: {$tweenedA}%" />
         <span>{poll.answerA} ({poll.votesA})</span>
      </div>

      <div class="answer" on:click={() => handleVote('b', poll.id)}>
         <div class="percent percent-b" style="width: {$tweenedB}%" />
         <span>{poll.answerB} ({poll.votesB})</span>
      </div>

      <div class="delete">
         <Button
            type="secondary"
            flat={true}
            on:click={() => handleDelete(poll.id)}>
            Delete
         </Button>
      </div>
   </Card>
</div>
