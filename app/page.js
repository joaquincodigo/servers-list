"use client";
import ServersTable from "../components/ServersTable";
import { react, useState } from "react";
import useFetchServers from "../hooks/useFetchServers";

export default function Home() {
  const { serversData, isLoading, error } = useFetchServers();

  return (
    <>
      <header className="bg-blue-300">
        Banner
        <div>Filler Content</div>
        <div>Filler Content</div>
      </header>
      <div className="ContentContainer flex flex-row w-full bg-violet-500">
        <aside className="bg-teal-300 flex-1 flex flex-col">
          <div className="bg-violet-600 mx-3 mt-3">
            Advertisement 1 Advertisement 1 Advertisement 1 Advertisement 1
            Advertisement 1 Advertisement 1 Advertisement 1 Advertisement 1
            Advertisement 1
          </div>
          <div className="bg-violet-600 mx-3 mt-3">
            Advertisement 2 Advertisement 2 Advertisement 2 Advertisement 2
            Advertisement 2 Advertisement 2 Advertisement 2 Advertisement 2
            Advertisement 2
          </div>
          <div className="bg-violet-600 mx-3 mt-3">
            Advertisement 3 Advertisement 3 Advertisement 3 Advertisement 3
            Advertisement 3 Advertisement 3 Advertisement 3 Advertisement 3
            Advertisement 3
          </div>
        </aside>
        <main className="flex-grow">
          <div className="bg-slate-600 sticky top-0">
            <div>FilterBar</div>
            <div>FillerConter</div>
          </div>
          <ServersTable
            servers={serversData}
            // filters={filters}
            // onFilterChange={handleFilterChange}
            // onSortChange={handleSortChange}
          />
        </main>
        <aside class="bg-green-300 flex-1">Right Sidebar</aside>
      </div>
      <footer className="bg-slate-300">Footer</footer>
    </>
  );
}
