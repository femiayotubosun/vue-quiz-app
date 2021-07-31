const app = Vue.createApp({
  data() {
    return {
      questionin: 0,

      submitted: false,

      questions: [
        {
          id: 0,
          question: "What is Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
        {
          id: 1,
          question: "What",
          options: ["A", "B", "C", "D"],
        },
        {
          id: 2,
          question: "Poly morphism",
          options: ["Fire", "SD", "Wind", "Air"],
        },
        {
          id: 3,
          question: " is Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
      ],
      //   Data for question box
      answers: {
        0: "Fire",
        1: "B",
        2: "SD",
        3: "Air",
      },

      candidateanswers: {
        0: "",
        1: "",
        2: "",
        3: "",
      },
    };
  },
  methods: {
    prevQuestion(payload) {
      this.candidateanswers[payload.id] = payload.answer;
      if (this.questionin === 0) {
        return;
      }
      this.questionin -= 1;
    },
    nextQuestion(payload) {
      this.candidateanswers[payload.id] = payload.answer;
      this.questionin += 1;
    },
    submitQuestions(payload) {
      this.candidateanswers[payload.id] = payload.answer;

      // Compare the objects

      // Display final score
    },
  },
});

// I'll need current progress
// bound to progress and

// I want to set total questions dynamically
