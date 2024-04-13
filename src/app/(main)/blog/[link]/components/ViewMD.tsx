"use client";
import MDEditor from "@uiw/react-md-editor";
import { raleway } from "@/utils/loadFont";

export default function ViewMD({ markdown }: Readonly<{ markdown: string }>) {
  return (
    <MDEditor.Markdown
      source={markdown}
      style={{
        backgroundColor: "#000",
        color: "#a3a3a3",
        ...raleway.style,
      }}
    />
  );
}
