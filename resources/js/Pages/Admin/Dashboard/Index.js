import React from "react";
import Heading from "@/Atoms/Heading";
import Button from "@/Atoms/Button";
import Card from "@/Molecules/Card";
import SampleForm from "@/Organisms/SampleForm";
import AuthLayout from "@/Atoms/AuthLayout";
import { Textarea } from "@/Atoms/Textarea";
export default function Index(_a) {
    var message = _a.message, button = _a.button;
    return (React.createElement("div", null,
        React.createElement(AuthLayout, { heading: "Auth Layout", message: "" },
            React.createElement(SampleForm, null),
            React.createElement("p", null, "\u00A0"),
            React.createElement("p", null, "\u00A0"),
            React.createElement(Heading, { type: "h3" }, message),
            React.createElement(Card, { heading: "Card heading", hasPadding: true }),
            React.createElement(Button, { size: "medium" }, button),
            React.createElement(Textarea, { label: "text area", editor: "Editor", value: "textbox" }))));
}
//# sourceMappingURL=Index.js.map