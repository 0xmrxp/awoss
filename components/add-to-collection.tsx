"use client";

import { useState } from "react";

export function AddToCollection({ repoFullName, repoId }: { repoFullName: string; repoId: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        Add to Collection
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">Add to Collection</h3>
            
            <p className="text-sm text-gray-600 mb-4">
              Select a collection to add <span className="font-mono">{repoFullName}</span>
            </p>

            <div className="space-y-2 mb-6">
              {/* This will be populated from database later */}
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                Best React Libraries
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                Production Go Tools
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button 
                className="flex-1 py-2 bg-black text-white rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}