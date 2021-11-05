const { AFRAME, THREE } = window;
AFRAME.registerComponent("detect-click", {
  schema: {
    enabled: { type: "boolean", default: true },
    element: { type: "selector", default: "no-such-element" },
    onClick: { default: "" },
    onMouseEnter: { default: "" },
    onMouseLeave: { default: "" },
  },
  init: function () {
    if (!this.data.enabled) {
      this.el.style.pointerEvents = "none";
      // this.el.setStyle({ "pointer-events": "none" });
      return;
    }
    this.targetElement = this.data.element;

    if (!this.targetElement) {
      this.targetElement = this.el;
    }
    this.targetElement.addEventListener("click", this.data.onClick);
    this.targetElement.addEventListener("mouseenter", this.data.onMouseEnter);
    this.targetElement.addEventListener("mouseleave", this.data.onMouseLeave);
  },
  remove: function () {
    if (!this.data.enabled) return;
    this.targetElement.removeEventListener("click", this.data.onClick);
    this.targetElement.removeEventListener(
      "mouseenter",
      this.data.onMouseEnter
    );
    this.targetElement.removeEventListener(
      "mouseleave",
      this.data.onMouseLeave
    );
  },
});
