"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useUserRole from "@/hooks/useUserRole";
import { generateContainerId } from "@/utils";

const CreateContainerForm: React.FC = () => {
  const userRole = useUserRole();
  const containerId = generateContainerId();

  const [formData, setFormData] = useState({
    containerId: containerId,
    size: "",
    type: "",
    currentPort: "",
    status: "AVAILABLE",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("/api/containers/create", formData);
      setMessage({ text: "Container created successfully!", type: "success" });
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      if (response.status === 200 || response.status === 200) {
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);

        setFormData({
          containerId: generateContainerId(),
          size: "",
          type: "",
          currentPort: "",
          status: "AVAILABLE",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage({
        text: error.response?.data?.message || "Something went wrong",
        type: "error",
      });
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  if (userRole !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-teal-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-40"></div>

        {/* Main form container */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20"
        >
          <div className="flex items-center mb-8">
            <div className="mr-4">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Create New Container
              </h2>
              <p className="text-blue-600">
                SavoStore Shipping Management System
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <input
                type="text"
                name="containerId"
                placeholder=" "
                value={formData.containerId}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 peer transition-all"
                required
                disabled={containerId ? true : false}
              />
              <div className="absolute right-5 top-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="size"
                placeholder=" "
                value={formData.size}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 peer transition-all"
                required
              />
              <label className="absolute left-5 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
                Size (e.g., 20ft, 40ft)
              </label>
              <div className="absolute right-5 top-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="type"
                placeholder=" "
                value={formData.type}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 peer transition-all"
                required
              />
              <label className="absolute left-5 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
                Type (e.g., Dry, Reefer)
              </label>
              <div className="absolute right-5 top-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="currentPort"
                placeholder=" "
                value={formData.currentPort}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 peer transition-all"
                required
              />
              <label className="absolute left-5 top-3 text-gray-500 pointer-events-none transition-all duration-200 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
                Current Port (e.g., MBS)
              </label>
              <div className="absolute right-5 top-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 appearance-none transition-all text-gray-500"
              >
                <option value="AVAILABLE">Available</option>
                <option value="BOOKED">Booked</option>
                <option value="IN_TRANSIT">In Transit</option>
                <option value="AT_PORT">At Port</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
              <div className="absolute right-5 top-4 pointer-events-none text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create Container
                </>
              )}
            </button>

            {message && (
              <div
                className={`mt-4 p-4 rounded-xl border-2 ${
                  message.type === "success"
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-red-50 border-red-200 text-red-700"
                } text-center font-medium flex items-center justify-center gap-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    message.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      message.type === "success"
                        ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        : "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    }
                    clipRule="evenodd"
                  />
                </svg>
                {message.text}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContainerForm;
