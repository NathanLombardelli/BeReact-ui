import { j as o } from "./jsx-runtime-foPj8jHJ.js";
function S({ Icon: c, text: n, bgColor: u, small: r, width: l, height: s, fontColor: a, action: i, round: x, pointer: d = !0, borderColor: m, borderSize: p = 0, hover: e }) {
  const j = {
    background: u,
    height: s + "px",
    width: l + "px",
    fontSize: s / 1.5,
    borderRadius: x ? 15 : 0,
    border: p + "px solid " + m
  }, f = () => {
    let t = "";
    return t += r ? "socialButtonSmall " : "socialButton ", t += d ? "cursorPointer " : null, t += e || null, t;
  };
  return /* @__PURE__ */ o.jsxs("a", { className: f(), onClick: () => i(), style: j, children: [
    /* @__PURE__ */ o.jsx(c, {}),
    r ? /* @__PURE__ */ o.jsx(o.Fragment, {}) : /* @__PURE__ */ o.jsx("p", { style: { fontSize: Math.min((l - (n ? n.length : 0)) / 4, s / 4), color: a }, children: n })
  ] });
}
export {
  S as I
};
