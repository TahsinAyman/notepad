import CodeEditor from "@uiw/react-textarea-code-editor";
import React from "react";

function Note(props) {
  const [code, setCode] = React.useState(props.note);
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          <CodeEditor
            value={code}
            language="text"
            placeholder=""
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            readOnly={true}
            style={{
              fontSize: 20,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default Note;
