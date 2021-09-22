import "./App.css";
import marked from "marked";
import { useState, useEffect } from "react";

const Preview = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: props.renderHtml }}
    ></div>
  );
};

function App() {
  const defVal =
    "# Markdown Previewer\n" +
    "## Default value\n" +
    "[link](www.google.ca)\n" +
    "`code sample`\n" +
    "```\n" +
    "function aaa (arg)  { return arg + 1}\n" +
    "aaa()\n" +
    "```\n" +
    "* list1\n" +
    "* list2\n" +
    "* list3\n" +
    " > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. \n\n" +
    "![logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)\n\n" +
    "__Bolded text__";
  const [inputText, setInputText] = useState(defVal);
  const [previewText, setPreviewText] = useState("");

  const fireChange = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    setPreviewText(marked(inputText, { breaks: true }));
  }, [inputText]);

  return (
    <div className="App">
      <h2>Input Markdown</h2>
      <textarea
        id="editor"
        onChange={fireChange}
        defaultValue={defVal}
      ></textarea>
      <h2>HTML presentation</h2>  
      <Preview renderHtml={previewText} />
    </div>
  );
}

export default App;
