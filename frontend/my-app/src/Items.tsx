import React from 'react';

const Items = () => {
  const handleAddItem = async () => {
    const item = {
      name: 'Item 1',
      price: 10.99
    };

    try {
      const response = await fetch('http://localhost:8080/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default Items;
