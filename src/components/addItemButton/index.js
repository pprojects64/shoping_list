import React from "react";
// Тут я хотел вынести кнопку в отдельный компонент, 
//   чтобы не загружать разметкой основные компоненты
function AddItemButton({fn}) {
  return (
    <div className="add_item_button">
      <button className="add-button" onClick={() => fn(true)}>-|-  Добавить товар</button>
    </div>
  )
}
export default AddItemButton;