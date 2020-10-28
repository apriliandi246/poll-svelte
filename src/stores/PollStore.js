import { writable } from "svelte/store";

const PollStore = writable([
   {
      id: 1,
      question: "React or Svelte",
      answerA: "Svelte",
      answerB: "React",
      votesA: 10,
      votesB: 8,
   },
]);

export default PollStore;
