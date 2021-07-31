app.component("question-box", {
  props: {
    questionin: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="question-box">
    <p>{{ questions[questionin].question }}</p>
    
    </div>`,

  data() {
    return {
      questions: [
        {
          question: "What is Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
        {
          question: "What",
          options: ["Fire", "Water", "Wind", "Air"],
        },
        {
          question: "Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
        {
          question: " is Poly morphism",
          options: ["Fire", "Water", "Wind", "Air"],
        },
      ],
    };
  },
});
