app.component("progress-bar", {
  props: {
    questionin: { type: Number, required: true },
  },
  template:
    /*html*/
    `<div class="progress">
    <p>Question {{ questionin }} of 20</p>
    <div class="progress-bar">
      <div class="current-progress" :style="{width: calcProgressWidth }"></div>
    </div>
  </div>`,
  computed: {
    calcProgressWidth() {
      return (this.questionin / 20) * 500 + "px";
    },
  },
});
