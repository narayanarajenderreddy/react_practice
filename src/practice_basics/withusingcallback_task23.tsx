import { useState, useMemo, useCallback } from "react";
import React from "react";

/* ---------------- CHILD COMPONENT ---------------- */

const ListItem = React.memo(function ListItem({
  item,
  onSelect,
  isSelected
}) {
  console.log("Rendering item:", item.id);

  return (
    <li
      onClick={() => onSelect(item.id)}
      style={{
        cursor: "pointer",
        color: isSelected ? "red" : "black"
      }}
    >
      {item.name}
    </li>
  );
});

/* ---------------- PARENT COMPONENT ---------------- */

function LargeListOptimized() {
  const [selectedId, setSelectedId] = useState(null);

  // ✅ Memoize items (stable reference)
  const items = useMemo(() => {
    console.log("Creating items...");
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`
    }));
  }, []);

  // ✅ Stable function reference
  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <>
      <h2>Selected: {selectedId}</h2>

      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onSelect={handleSelect}
            isSelected={selectedId === item.id}
          />
        ))}
      </ul>
    </>
  );
}

export default LargeListOptimized;