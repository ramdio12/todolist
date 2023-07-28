import React, { useState } from "react";

const GroceryItem = ({ item, handleEditItem,handleDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);

  const onEdit = () => {
    //handle Edit Item
    handleEditItem(item.id, newItem);
    setIsEditing(false);
  };

  return (
    <>
      <li>
        {isEditing ? (
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}
        <div>
          <button
            onClick={() => {
              isEditing ? onEdit() : setIsEditing(true);
            }}
            className="btn-edit"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button 
            onClick={()=>handleDeleteItem(item.id)} 
            className="btn-delete">Delete</button>
        </div>
      </li>
    </>
  );
};

export default GroceryItem;
