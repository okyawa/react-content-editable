import { useState } from "react";
import ContentEditable from './content-editable'

export default function App() {

  const [text, setText] = useState<string>("ここは書き換え可能な文章です。");
  const [name, setName] = useState<string>("山田太郎");

  const handleTextBlur = () => {
    console.log(text);
  }

  const handleNameBlur = () => {
    console.log(name);
  }

  return (
    <div style={{'margin':'2em'}}>
        <ContentEditable value={text} onChange={setText} onBlur={handleTextBlur}/>
        <div>
          Text:{text}
        </div>
        <ContentEditable value={name} onChange={setName} onBlur={handleNameBlur}/>
        <div>
          Name:{name}
        </div>
    </div>
  );
}