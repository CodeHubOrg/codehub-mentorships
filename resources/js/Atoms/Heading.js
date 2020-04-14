import React from 'react';
export default function Heading(_a) {
    var children = _a.children, type = _a.type;
    return (React.createElement("div", { className: "box-border p-4 border-4 border-gray-400 bg-gray-200" },
        type === "h1" && React.createElement("h1", { className: "font-mono text-4xl text-gray-800 text-center" }, children),
        type === "h2" && React.createElement("h2", { className: "font-mono text-3xl text-gray-800 text-center" }, children),
        type === "h3" && React.createElement("h3", { className: "font-mono text-2xl text-gray-800 text-center" }, children)));
}
//# sourceMappingURL=Heading.js.map