import * as React from "react";
export var Textarea = function (_a) {
    var label = _a.label, editor = _a.editor, value = _a.value;
    return (React.createElement("div", null, editor.toLowerCase() === "multilinetextbox" && (React.createElement("textarea", { value: value, onChange: function (e) {
            return console.log(e);
        }, onBlur: function (e) {
            return console.log(e);
        }, className: "form-control" }))));
};
//# sourceMappingURL=Textarea.js.map