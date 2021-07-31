const app = Vue.createApp({
  data() {
    return {
      questionin: 0,
      questions: [
        {
          question: "What is Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
        {
          question: "What",
          options: ["A", "B", "C", "D"],
        },
        {
          question: "Poly morphism",
          options: ["Fire", "SD", "Wind", "Air"],
        },
        {
          question: " is Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
      ],
      //   Data for question box
    };
  },
  methods: {
    prevQuestion() {
      if (this.questionin === 0) {
        return;
      }
      this.questionin -= 1;
    },
    nextQuestion() {
      this.questionin += 1;
    },
  },
});

// I'll need current progress
// bound to progress and

// I want to set total questions dynamically
