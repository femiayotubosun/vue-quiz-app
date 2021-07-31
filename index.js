const app = Vue.createApp({
  data() {
    return {
      questionin: 0,

      submitted: true,

      finalscore: null,

      questions: [
        {
          id: 0,
          question: "If 5x + 32 = 4 - 2x what is the value of x ?",
          options: ["-4", "-3", "4", "7"],
        },
        {
          id: 1,
          question:
            "Which of the following numbers is farthest from the number 1 on the number line?",
          options: ["-10", "-5", "0", "5"],
        },
        {
          id: 2,
          question:
            "A car got 33 miles per gallon using gasoline that cost $2.95 per gallon. Approximately what was the cost, in dollars, of the gasoline used in driving the car 350 miles?",
          options: ["$10", "$20", "$30", "$40"],
        },
        {
          id: 3,
          question:
            "A certain jar contains 60 jelly beans — 22 white, 18 green, 11 yellow, 5 red, and 4 purple. If a jelly bean is to be chosen at random, what is the probability that the jelly bean will be neither red nor purple?",
          options: ["0.09", "0.54", "0.15", "0.85"],
        },
        {
          id: 4,
          question:
            "Before the fuse is lit, the total weight of a model rocket including fuel is 0.7 N. The gravitational field strength is 10 N/kg. The total mass of the model rocket including fuel is:",
          options: ["0.007 kg", "0.07kg", "0.7kg", "7kg"],
        },
      ],
      //   Data for question box
      answers: {
        0: "-4",
        1: "-10",
        2: "$30",
        3: "0.85",
        4: "0.07kg",
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
    submitAnswers(payload) {
      this.candidateanswers[payload.id] = payload.answer;

      score = 0;

      // Compare candidate answers to actual answers
      for (key in Object.keys(this.candidateanswers)) {
        if (this.candidateanswers[key] === this.answers[key]) {
          score += 1;
        }
      }

      this.finalscore = score;
      this.submitted = true;
    },

    retakeExam() {
      // Reset exam
      this.submitted = false;
      this.questionin = 0;

      for (key in Object.keys(this.candidateanswers)) {
        this.candidateanswers[key] = "";
      }
    },
  },
});
