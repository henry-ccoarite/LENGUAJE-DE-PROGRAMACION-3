// ============================================================
// App.jsx — top-level component + mount. Loaded LAST, after
// every other component file, since it renders the whole tree.
// ============================================================

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Capabilities />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
