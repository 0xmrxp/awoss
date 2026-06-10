"use client";

import { useState, useEffect } from "react";
import { getUserCollections, addRepoToCollection } from "@/app/collections/actions";

interface Collection {
  id: number;
  name: string;
}

export function AddToCollection({ repoFullName, repoId }: { repoFullName: string; repoId: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [notes, setNotes] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getUserCollections().then((data) => {
        setCollections(data as Collection[]);
        setLoading(false);
      });
    }
  }, [isOpen]);

  const handleAdd = async () => {
    if (!selectedId) return;
    
    setAdding(true);
    setMessage(null);
    
    try {
      const result = await addRepoToCollection(selectedId, repoFullName, repoId, notes);
      if (result?.error) {
        setMessage({ type: "error", text: result.error });
      } else {
        setMessage({ type: "success", text: "Added to collection!" });
        setTimeout(() => setIsOpen(false), 1500);
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to add repository" });
    } finally {
      setAdding(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Add to Collection
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
            <h3 className="font-bold text-xl mb-1">Add to Collection</h3>
            <p className="text-sm text-gray-500 mb-6">
              Adding <span className="font-mono font-bold text-black">{repoFullName}</span>
            </p>
            
            {loading ? (
              <div className="py-10 text-center text-gray-500">Loading collections...</div>
            ) : collections.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-gray-500 mb-4">You don't have any collections yet.</p>
                <a 
                  href="/collections/new" 
                  className="text-black font-bold hover:underline"
                >
                  Create one first →
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Collection</label>
                  <div className="grid gap-2 max-h-48 overflow-y-auto pr-2">
                    {collections.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedId(c.id)}
                        className={`p-3 text-left border rounded-lg transition-all ${
                          selectedId === c.id 
                            ? "border-black bg-gray-50 ring-1 ring-black" 
                            : "hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <span className="font-medium">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-black"
                    placeholder="Why are you adding this repository?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                  />
                </div>

                {message && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}>
                    {message.text}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      setMessage(null);
                      setSelectedId(null);
                      setNotes("");
                    }}
                    disabled={adding}
                    className="flex-1 py-2 border rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAdd}
                    disabled={!selectedId || adding}
                    className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {adding ? "Adding..." : "Add to Collection"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
