import React from "react";
export default function AuthLayout(_a) {
    var children = _a.children, heading = _a.heading, message = _a.message;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "box-border p-4 border-4 border-gray-400 bg-gray-200" },
            React.createElement("h1", { className: "text-2xl text-gray-800 text-center font-extrabold" }, "CodeHub Mentorship App")),
        React.createElement("div", { className: "min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "sm:mx-auto sm:w-full sm:max-w-md" },
                React.createElement("h2", { className: "mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 p-4" }, heading),
                React.createElement("p", { className: "mt-2 text-center text-sm leading-5 text-gray-600 max-w" }, message)),
            React.createElement("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" },
                React.createElement("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, children)))));
}
//# sourceMappingURL=AuthLayout.js.map