import React, { useState } from 'react';

const SmartFilter = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const handleFilter = () => {
    onFilter({ category, tags: tags.split(',').map((tag) => tag.trim()) });
  };

  return (
    <div>
      <h3>Фильтр изображений</h3>
      <input
        type="text"
        placeholder="Категория"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Теги (через запятую)"
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleFilter}>Применить</button>
    </div>
  );
};

export default SmartFilter;
