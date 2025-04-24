import { useState } from "react";

export default function ProfileEditor() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });
  const [isSaving, setIsSaving] = useState(false);

  // Avoids mutating state directly (user.name = ...)
  const handleNameChange = (e) => {
    const value = e.target.value;
    setUser((initialName) => ({
      ...initialName,
      name: value,
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full flex items-center justify-center">
      <input
        type="text"
        value={user.name}
        onChange={handleNameChange}
        className="border p-2"
      />
      <button
        onClick={handleSave}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}


// 🔄 Updates the name property of the user object.

// Uses the functional form of setUser to safely access the previous state (initialName).

// ...initialName copies all properties of the user (like age) to avoid losing data.

// Only name gets updated. This avoids mutating state directly (which React doesn’t allow).

// 🧠 Why not user.name = value?
// Because React state should be treated as immutable. Always use setState() to update values properly and trigger re-rendering.