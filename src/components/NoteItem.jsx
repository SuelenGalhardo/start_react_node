import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <div className={`noteItem ${isNew ? 'isNew' : ''}`}>
      <input className="noteItem__inputItem"type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick} 
       className={isNew ? 'button-add' : 'button-delete'}> 
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </div>
  );
}
