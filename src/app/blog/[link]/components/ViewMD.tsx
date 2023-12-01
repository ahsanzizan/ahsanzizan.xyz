"use client";

import MDEditor from "@uiw/react-md-editor";

export default function ViewMD({ markdown }: { markdown: string }) {
  return (
    <MDEditor.Markdown
      source={markdown}
      style={{
        backgroundColor: "#000",
        color: "#a3a3a3",
        fontFamily: "Raleway",
      }}
    />
  );
}
