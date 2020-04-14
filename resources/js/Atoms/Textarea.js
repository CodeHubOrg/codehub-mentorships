import * as React from "react";
export var Textarea = function (_a) {
    var placeholder = _a.placeholder;
    return (React.createElement("div", null,
        React.createElement("h1", null, "Text Area"),
        React.createElement("textarea", { placeholder: placeholder, onChange: function (e) {
                return console.log(e);
            }, onBlur: function (e) {
                return console.log(e);
            }, className: "form-control" })));
};
//# sourceMappingURL=Textarea.js.map