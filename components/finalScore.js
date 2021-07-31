app.component("final-score", {
  props: {
    finalscore: { type: Number, required: true },
    totalquestions: { type: Number, required: true },
  },
  template:
    /* html */
    `
    <div class="final-score">
       <div class="final-score__circle">
            <div> {{finalscore}}!</div>
        
       
       </div>
       <div class="final-score__text">
            <h4>Congratulations!</h4>
            <p>You got {{finalscore}} of  {{totalquestions }} questions right.</p>
            
       </div>
       <div class="final-score__buttons">
       <button class="button" @click="retake">Retake</button>
       
       </div>
    </div>

  `,

  methods: {
    retake() {
      this.$emit("retake");
    },
  },
});
