import { Button } from "@/components/ui/button";

function Sidebar() {
  return (
    <aside className="w-72 bg-[#171717] border-r border-zinc-800 flex flex-col">
      <div className="p-4">
        <Button className="w-full">
          + New Chat
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-3">
        <p className="text-zinc-400 text-sm mb-3">
          Recent Chats
        </p>

        <div className="space-y-2">
          <div className="rounded-lg p-3 hover:bg-zinc-800 cursor-pointer">
            Chat 1
          </div>

          <div className="rounded-lg p-3 hover:bg-zinc-800 cursor-pointer">
            Chat 2
          </div>

          <div className="rounded-lg p-3 hover:bg-zinc-800 cursor-pointer">
            Chat 3
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 p-4">
        Settings
      </div>
    </aside>
  );
}

export default Sidebar;