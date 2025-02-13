AFRAME.registerComponent("description-heading", {
  schema: {
    value: { type: "string", default: "Description Heading" },
    position: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
    scale: { type: "vec3", default: { x: 12, y: 12, z: 12 } },
    align: { type: "string", default: "center" },
    baseline: { type: "string", default: "top" },
    side: { type: "string", default: "double" },
    color: { type: "color", default: "#FFF" },
    rotation: { type: "vec3", default: { x: 0, y: 90, z: 0 } },
  },
  init: function () {
    let el = this.el;
    let data = this.data;

    el.setAttribute("text", {
      value: data.value,
      align: data.align,
      baseline: data.baseline,
      side: data.side,
      color: data.color,
    });
    el.setAttribute("position", data.position);
    el.setAttribute("scale", data.scale);
    el.setAttribute("rotation", data.rotation);
  },
});
