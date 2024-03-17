import { j as s } from "./jsx-runtime-foPj8jHJ.js";
import { useRef as u, useCallback as n } from "react";
function v({ content: y }) {
  const r = u(null), a = n(() => {
    const e = r.current;
    e && (e.style.setProperty("--x", "50%"), e.style.setProperty("--y", "50%"), e.style.setProperty("--bg-x", "50%"), e.style.setProperty("--bg-y", "50%"), e.style.setProperty("--r-x", "0deg"), e.style.setProperty("--r-y", "0deg"));
  }, []), d = n((e) => {
    const t = r.current;
    if (t) {
      const i = t.clientWidth, p = t.clientHeight, l = t.getBoundingClientRect(), o = (e.clientX - l.left) / i, c = (e.clientY - l.top) / p, x = -(o - 0.5) * 26, g = (c - 0.5) * 26, m = 40 + 20 * o, P = 40 + 20 * c;
      t.style.setProperty("--x", 100 * o + "%"), t.style.setProperty("--y", 100 * c + "%"), t.style.setProperty("--bg-x", m + "%"), t.style.setProperty("--bg-y", P + "%"), t.style.setProperty("--r-x", x + "deg"), t.style.setProperty("--r-y", g + "deg");
    }
  }, []);
  return /* @__PURE__ */ s.jsx("div", { className: "card", ref: r, onMouseMove: d, onMouseLeave: a, children: /* @__PURE__ */ s.jsx("div", { className: "card__wrapper", children: /* @__PURE__ */ s.jsxs("div", { className: "card__3d", children: [
    /* @__PURE__ */ s.jsx("div", { className: "card__image", children: y }),
    /* @__PURE__ */ s.jsx("div", { className: "card__layer1" }),
    /* @__PURE__ */ s.jsx("div", { className: "card__layer2" })
  ] }) }) });
}
export {
  v as H
};
