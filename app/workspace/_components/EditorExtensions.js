import { Bold } from "lucide-react";
import React from "react";

const EditorExtensions = ({editor}) => {
  return (
    <div>
      <div className="control-group">
        <div className="button-group">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "text-blue-500" : ""}
          >
            <Bold/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorExtensions;
