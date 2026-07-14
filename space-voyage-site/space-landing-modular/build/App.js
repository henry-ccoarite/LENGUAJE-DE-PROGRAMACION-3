"use strict";
// ============================================================
// App.jsx — top-level component + mount. Loaded LAST, after
// every other component file, since it renders the whole tree.
// ============================================================
function App() {
    return (React.createElement("div", { className: "bg-black" },
        React.createElement(Hero, null),
        React.createElement(Capabilities, null)));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
