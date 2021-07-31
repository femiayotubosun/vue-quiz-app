app.component("question-box", {
  props: {
    questionin: {
      type: Number,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `

    <form @submit.prevent="onSubmit">
    <div class="question-box">
    <p class="question-box__question">{{ questions[questionin].question }}</p>

    <div class="question-box__option" :class="[ selectedoption === option ? 'selected-option': '' ]" v-for="option in questions[questionin].options">
    <input name="options" v-model="selectedoption" :id="option" type="radio" :value="option"> 
    <label :for="option"> {{ option }}</label>
    <br>
    </div>
    </div>
    
    <div class="ctrl-btns">    
      <button v-if="!(questionin === 0)"  class="button back" @click="prevQuest">Back</button>
      <button v-if="! (questionin === (questions.length - 1))" @click="nextQuest" class="button next">Next</button>
      <button v-if="questionin === (questions.length - 1)" @click="submitQuest" class="button submit">Submit</button>
    </div>

    </form>
    `,

  data() {
    return {
      selectedoption: "",
    };
  },
  methods: {
    prevQuest() {
      this.$emit("prev-question");
    },
    nextQuest() {
      this.$emit("next-question");
    },

    onSubmit() {
      console.log("Yeah");
    },
  },
});
