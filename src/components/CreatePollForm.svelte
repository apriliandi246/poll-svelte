<script>
   import { fade } from "svelte/transition";
   import { createEventDispatcher } from "svelte";
   import PollStore from "../stores/PollStore.js";
   import Button from "../shared/Button.svelte";

   const dispatch = createEventDispatcher();

   let fields = {
      question: "",
      answerA: "",
      answerB: "",
      votesA: 0,
      votesB: 0,
      id: Math.random(),
   };

   let valid = false;

   let errors = {
      question: "",
      answerA: "",
      answerB: "",
   };

   function submitHandler() {
      valid = true;

      // validation question
      if (fields.question.trim().length < 5) {
         valid = false;
         errors.question = "Question must be at least 5 characters long";
      } else {
         errors.question = "";
      }

      // validate asnwer a
      if (fields.answerA.trim().length < 1) {
         valid = false;
         errors.answerA = "Answer A cannot be empty";
      } else {
         errors.answerA = "";
      }

      // validate answer b
      if (fields.answerB.trim().length < 1) {
         valid = false;
         errors.answerB = "Answer B cannot be empty";
      } else {
         errors.answerB = "";
      }

      // add new poll
      if (valid === true) {
         PollStore.update((currentData) => {
            return [fields, ...currentData];
         });
         dispatch("add");
      }
   }
</script>

<style>
   form {
      width: 400px;
      margin: 0 auto;
      text-align: center;
   }

   .form-field {
      margin: 19px auto;
   }

   input {
      width: 100%;
      border-radius: 6px;
   }

   label {
      margin: 10px auto;
      text-align: left;
   }

   .error {
      font-weight: bold;
      font-size: 13px;
      margin-top: 4px;
      color: orangered;
   }
</style>

<form on:submit|preventDefault={submitHandler} in:fade autocomplete="off">
   <div class="form-field">
      <label for="question">Poll Question</label>
      <input type="text" id="question" bind:value={fields.question} />
      <div class="error">{errors.question}</div>
   </div>

   <div class="form-field">
      <label for="answer-a">Answer A</label>
      <input type="text" id="answer-a" bind:value={fields.answerA} />
      <div class="error">{errors.answerA}</div>
   </div>

   <div class="form-field">
      <label for="answer-b">Answer B</label>
      <input type="text" id="answer-b" bind:value={fields.answerB} />
      <div class="error">{errors.answerB}</div>
   </div>

   <Button type="secondary" flat={true}>Add Poll</Button>
</form>
