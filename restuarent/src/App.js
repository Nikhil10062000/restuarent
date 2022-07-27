import React, { useState } from 'react';
import Menu from './Component/Menu';
import Categories from './Component/Categories';
import items from './Component/Data';
import './App.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <h3 className="menu section">
        <div className="title">
          <h4>FIINAX RESTUARENT </h4>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </h3>
    </>
  );
}

export default App;