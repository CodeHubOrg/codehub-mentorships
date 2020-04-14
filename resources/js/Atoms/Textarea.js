import * as React from "react";
export var Textarea = function (_a) {
    var placeholder = _a.placeholder;
    return (React.createElement("div", null,
        React.createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Textarea"),
        React.createElement("textarea", { placeholder: placeholder, onChange: function (e) {
                return console.log(e);
            }, className: "form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5" })));
};
//# sourceMappingURL=Textarea.js.map