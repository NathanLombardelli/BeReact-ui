import { j as i } from "./jsx-runtime-foPj8jHJ.js";
function p({ bgColor: e, neoncolor: n, borderColor: r, toogleColor: t, size: s, checked: o, checkedChange: l }) {
  const a = {
    "--color": n,
    "--toogleColor": t,
    "--borderColor": r,
    "--size": s,
    background: e
  }, c = () => {
    l(!o);
  };
  return /* @__PURE__ */ i.jsx("input", { checked: o, onChange: c, type: "checkbox", role: "switch", className: "neon", style: a });
}
export {
  p as N
};
