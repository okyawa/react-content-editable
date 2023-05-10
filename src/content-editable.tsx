import { useRef, SyntheticEvent } from 'react'

type ContentEditableProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

/**
 * 編集可能なdiv要素のコンポーネント
 */
const ContentEditable = ({value, onChange, onBlur}: ContentEditableProps) => {
  const defaultValue = useRef<string>(value);

  const handleInput = (event: SyntheticEvent) => {
    onChange((event.currentTarget as HTMLElement).innerHTML)
  }

  return (
    <div
      contentEditable
      onInput={handleInput}
      onBlur={onBlur}
      dangerouslySetInnerHTML={{ __html: defaultValue.current}}
    />
  );
};

export default ContentEditable
