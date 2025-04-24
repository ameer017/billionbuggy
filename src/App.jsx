import Counter from "./Counter";
import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";

export default function App() {
  return (
    <div className="w-full border-2 p-4 flex flex-col gap-3 items-center justify-between h-[100vh] ">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      <ProfileEditor />
      <UserList />
      <Counter />

      <footer className="mt-8 p-4 bg-gray-500 text-white text-center w-full ">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
