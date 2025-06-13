"use client";

import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteButton = ({ containerId }: { containerId: string }) => {
  const handleDeleteContainer = async (containerId: string) => {
    try {
      const res = await fetch("/api/containers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ containerId }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete container");
      } else {
        const data = await res.json();
        alert(data.message || "Container deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting container:", error);
      alert("Failed to delete container. Please try again.");
    }
  };

  return (
    <button
      className="text-red-400 hover:text-red-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-50 transition-colors cursor-pointer p-1"
      title="Delete Container"
      onClick={() => handleDeleteContainer(containerId)}
    >
      <FaTrashAlt className="inline-block" />
    </button>
  );
};

export default DeleteButton;
