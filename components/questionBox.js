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
    <p class="question-box__question">{{ questions[questionin].question }}</p>
    
    <div class="question-box__option" v-for="option in questions[questionin].options">
    <input name="{{option}}" type="radio"> {{option}}
    <br>
    </div>
    
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
          options: ["A", "B", "C", "D"],
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
