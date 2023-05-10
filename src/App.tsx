import { useState } from 'react';
import ContentEditable from './content-editable'

export default function App() {

  const [text, setText] = useState<string>('ここは書き換え可能な文章です。');
  const [name, setName] = useState<string>('山田太郎');

  const handleTextBlur = () => {
    console.log('Textのbluerイベント - Stateの値: ', text);
  }

  const handleNameBlur = () => {
    console.log('Nameのbluerイベント - Stateの値: ', name);
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2em auto', padding: '0 32px', boxSizing: 'border-box' }}>
      <h1>Reactでcontenteditableを使うサンプル</h1>
      <hr />
      <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
        <ContentEditable value={text} onChange={setText} onBlur={handleTextBlur} />
      </div>
      <div>
        TextのStateの値:
        <div style={{ color: '#666' }}>{text}</div>
      </div>
      <hr />
      <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
        <ContentEditable value={name} onChange={setName} onBlur={handleNameBlur} />
      </div>
      <div>
        NameのStateの値:
        <div style={{ color: '#666' }}>{name}</div>
      </div>
      <hr />
    </div>
  );
}