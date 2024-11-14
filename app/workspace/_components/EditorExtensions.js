import { Bold, Sparkle } from "lucide-react";
import React from "react";

const EditorExtensions = ({editor}) => {
    const onAiClick = () => {
        console.log("AI Clicked");
    }
  if (!editor) {
    return null;
  }

  return (
    <div>
      <div className="control-group">
        <div className="button-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor?.isActive("bold") ? "text-blue-500" : ""}
          >
            <Bold/>
          </button>

          <button
            type="button"
            onClick={() => onAiClick()}
            className=""
          >
            <Sparkle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorExtensions;
