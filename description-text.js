AFRAME.registerComponent("description-text", {
  schema: {
    value: { type: "string", default: "Description Text" },
    position: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
    scale: { type: "vec3", default: { x: 20, y: 20, z: 20 } },
    align: { type: "string", default: "center" },
    baseline: { type: "string", default: "top" },
    side: { type: "string", default: "double" },
    color: { type: "color", default: "#FFF" },
    rotation: { type: "vec3", default: { x: 0, y: 90, z: 0 } },
    width: { type: "number", default: 0.2 },
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
      width: data.width,
    });
    el.setAttribute("position", data.position);
    el.setAttribute("scale", data.scale);
    el.setAttribute("rotation", data.rotation);
  },
});
