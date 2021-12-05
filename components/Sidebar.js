import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <span>Logout</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="w-5 h-5" />
          <span>Search</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="w-5 h-5" />
          <span>Your Library</span>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="w-5 h-5" />
          <span>Create Playlist</span>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="w-5 h-5" />
          <span>Liked Songs</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="w-5 h-5" />
          <span>Your Episodes</span>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
        <p className="cursor-pointer hover:text-white">Playlists</p>
      </div>
    </div>
  );
};

export default Sidebar;
