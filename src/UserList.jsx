import { useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //   Removes a user by index.
  // Uses the functional form of setUsers to ensure safe state updates.
  // Filters out the user at the provided index.

  const handleDelete = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const showDetails = selectedUser !== null;
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();

    return user.toLowerCase().includes(term);
  });

  const handleHover = (user) => {
    setTimeout(() => {
      console.log("Hovered over:", user);
    }, 1000);
  };

  return (
    <div className="mt-4 flex items-center justify-center flex-col w-full">
      <h2 className="text-xl font-bold">Users</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mt-2"
      />

      <ul className="flex my-10 gap-5">
        {(filteredUsers.length > 0 ? filteredUsers : users).map(
          (user, index) => (
            <li
              key={`${user}-${index}`}
              onClick={() => {
                setSelectedUser(user);
              }}
              onMouseEnter={() => handleHover(user)}
              className="cursor-pointer hover:bg-gray-200 p-2"
            >
              {user}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent selecting the user when delete is clicked
                  handleDelete(index);
                }}
                className="bg-red-500 text-white px-2 py-1 rounded ml-1"
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>

      {showDetails && (
        <div className="mt-2 p-2 bg-yellow-100">
          Selected: {selectedUser}
          <p>Name length: {selectedUser.length}</p>
        </div>
      )}
    </div>
  );
}
