import { useState } from "react";

function ListItem({ item, onSelect }) {
  console.log("Rendering item:", item.id);
  return (
    <li onClick={() => onSelect(item.id)}>
      {item.name}
    </li>
  );
}

function LargeList() {
  const [selectedId, setSelectedId] = useState(null);

  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`
  }));

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <h2>Selected: {selectedId}</h2>
      <ul>
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </>
  );
}

export default LargeList;