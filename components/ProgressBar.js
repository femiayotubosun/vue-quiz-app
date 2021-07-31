app.component("progress-bar", {
  props: {
    questionin: { type: Number, required: true },
    totalquestions: { type: Number, required: true },
  },
  template:
    /*html*/
    `<div class="progress">
    <p>Question {{ questionin + 1 }} of {{ totalquestions }}</p>
    <div class="progress-bar">
      <div class="current-progress" :style="{width: calcProgressWidth }"></div>
    </div>
  </div>`,
  computed: {
    calcProgressWidth() {
      return ((this.questionin + 1) / this.totalquestions) * 500 + "px";
    },
  },
});
