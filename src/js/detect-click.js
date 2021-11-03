const { AFRAME, THREE } = window;
AFRAME.registerComponent("detect-click", {
  schema: {
    element: { type: "selector", default: "no-such-element" },
    onClick: { default: "" },
    onMouseEnter: { default: () => {} },
  },
  init: function () {
    this.targetElement = this.data.element;

    if (!this.targetElement) {
      this.targetElement = this.el;
    }
    // this.targetElement.addEventListener("click", this.data.onClick);
    this.targetElement.addEventListener("mouseenter", this.data.onMouseEnter);
  },
});
