const heading1 = React.createElement("h1", {
    id: "heading1"
}, "Hello");
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "World");
const container = React.createElement("div", {
    class: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.c36f364e.js.map
