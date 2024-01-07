"use client";
import MDEditor from "@uiw/react-md-editor";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500"],
});

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
