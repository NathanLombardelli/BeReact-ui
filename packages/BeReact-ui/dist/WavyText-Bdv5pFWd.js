import { j as p } from "./jsx-runtime-foPj8jHJ.js";
function y({ text: o, fontFamily: x, color: l, variation: t, hueColor: n, delay: r, jumpHeight: a, animationTime: c, fontSize: m }) {
  const j = n || 10, u = [...o].map((e, s) => {
    const $ = {
      "--i": s + 1,
      "--delay": r ? `${r}s` : "0.1s",
      "--jumpHeight": a ? `-${a}px` : "-10px",
      "--animationTime": c ? `${c}s` : "1s",
      fontFamily: x,
      fontSize: m,
      color: t ? `hsl(${j + t * s % 360}, 100%, 50%)` : l
    };
    return /* @__PURE__ */ p.jsx("span", { style: $, children: e === " " ? " " : e }, s);
  });
  return /* @__PURE__ */ p.jsx("div", { className: "wavy", children: u });
}
export {
  y as W
};
