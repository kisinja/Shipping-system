"use client";

import { useEffect, useState } from "react";
import {
  FaShip,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaEdit,
  FaCheck,
  FaTimes,
  FaBox,
  FaGlobeAmericas,
  FaClock,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { prismaClient } from "@/utils";
import { Shipment } from "@/lib/generated/prisma";

const statusColors = {
  PENDING: "bg-gray-100 text-gray-800",
  IN_TRANSIT: "bg-yellow-100 text-yellow-800",
  AT_PORT: "bg-indigo-100 text-indigo-800",
  CUSTOMS_HOLD: "bg-red-100 text-red-800",
  DELIVERED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

const statusIcons = {
  PENDING: <FaCalendarAlt className="mr-1" />,
  IN_TRANSIT: <FaShip className="mr-1" />,
  AT_PORT: <FaMapMarkerAlt className="mr-1" />,
  CUSTOMS_HOLD: <FaTimes className="mr-1" />,
  DELIVERED: <FaCheck className="mr-1" />,
  CANCELLED: <FaTimes className="mr-1" />,
};

const AdminShipmentsPage = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/shipments");
        const data = await response.json();
        setShipments(data.shipments);
      } catch (err) {
        console.error("Failed to fetch shipments", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShipments();
  }, []);

  const handleEdit = (shipment) => {
    setEditingId(shipment.id);
    setEditData({
      currentPort: shipment.currentPort,
      status: shipment.status,
      departureDate: shipment.departureDate?.split("T")[0] || "",
      estimatedArrival: shipment.estimatedArrival?.split("T")[0] || "",
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (shipmentId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/shipments/${shipmentId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (!response.ok) throw new Error("Update failed");

      const updatedShipment = await response.json();

      setShipments((prev) =>
        prev.map((s) =>
          s.id === shipmentId ? { ...s, ...updatedShipment.data } : s
        )
      );

      setEditingId(null);
      setEditData({});
      router.refresh();
    } catch (error) {
      console.error("Error updating shipment:", error);
      alert("Failed to update shipment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
          <FaShip className="mr-3 text-blue-600 text-2xl" />
          Shipment Management
        </h1>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 w-full md:w-auto">
          <span className="text-gray-600">Total Shipments:</span>
          <span className="ml-2 font-bold text-blue-600">
            {shipments?.length || 0}
          </span>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          {
            status: "IN_TRANSIT",
            color: "yellow",
            icon: <FaShip className="mr-1" />,
          },
          {
            status: "AT_PORT",
            color: "indigo",
            icon: <FaMapMarkerAlt className="mr-1" />,
          },
          {
            status: "DELIVERED",
            color: "green",
            icon: <FaCheck className="mr-1" />,
          },
          {
            status: "CUSTOMS_HOLD",
            color: "red",
            icon: <FaTimes className="mr-1" />,
          },
        ].map((item) => (
          <div
            key={item.status}
            className={`bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center text-sm font-medium text-gray-500">
              {item.icon}
              {item.status.replace("_", " ")}
            </div>
            <div
              className={`mt-1 text-xl md:text-2xl font-semibold text-${item.color}-600`}
            >
              {shipments?.filter((s) => s.status === item.status).length || 0}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        {isLoading && !shipments.length ? (
          <div className="p-8 text-center text-gray-500">
            Loading shipments...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-4 py-3 md:px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Shipment
                  </th>
                  <th className="px-4 py-3 md:px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Container
                  </th>
                  <th className="px-4 py-3 md:px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 md:px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-4 py-3 md:px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shipments?.map((shipment) => (
                  <tr
                    key={shipment.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 md:px-6">
                      <div className="font-medium text-gray-900 flex items-center">
                        <FaExchangeAlt className="text-green-500 mr-2" />
                        {shipment.shipmentCode}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        ID: {shipment.id.slice(-6)}
                      </div>
                      <div className="mt-2 text-sm">
                        <div className="flex items-center text-gray-700">
                          <FaGlobeAmericas className="mr-2 text-blue-400" />
                          {shipment.origin} → {shipment.destination}
                        </div>
                        {shipment.currentLatitude &&
                          shipment.currentLongitude && (
                            <div className="text-xs text-gray-500 mt-1">
                              GPS: {shipment.currentLatitude.toFixed(4)},{" "}
                              {shipment.currentLongitude.toFixed(4)}
                            </div>
                          )}
                      </div>
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      {shipment.container ? (
                        <div>
                          <div className="font-medium flex items-center">
                            <FaBox className="mr-2 text-indigo-500" />
                            {shipment.container.containerId}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {shipment.container.size} {shipment.container.type}
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">
                          No container
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      <div className="mb-2">
                        {editingId === shipment.id ? (
                          <select
                            name="status"
                            value={editData.status}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                          >
                            {Object.keys(statusColors).map((status) => (
                              <option key={status} value={status}>
                                {status.replace("_", " ")}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span
                            className={`px-2 py-1 inline-flex items-center text-xs leading-4 font-semibold rounded-full ${
                              statusColors[shipment.status]
                            }`}
                          >
                            {statusIcons[shipment.status]}
                            {shipment.status.replace("_", " ")}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-center">
                          <FaClock className="mr-1 text-gray-400" />
                          <span>
                            Departed:{" "}
                            {shipment.departureDate
                              ? new Date(
                                  shipment.departureDate
                                ).toLocaleDateString()
                              : "N/A"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1 text-gray-400" />
                          <span>
                            ETA:{" "}
                            {shipment.estimatedArrival
                              ? new Date(
                                  shipment.estimatedArrival
                                ).toLocaleDateString()
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      {editingId === shipment.id ? (
                        <input
                          type="text"
                          name="currentPort"
                          value={editData.currentPort || ""}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                        />
                      ) : (
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="text-blue-500 mr-2" />
                          <span>{shipment.currentPort || "Unknown"}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      {editingId === shipment.id ? (
                        <div className="flex flex-col space-y-2">
                          <button
                            onClick={() => handleSave(shipment.id)}
                            disabled={isLoading}
                            className="flex items-center justify-center px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors text-sm"
                          >
                            <FaCheck className="mr-1" />
                            {isLoading ? "Saving..." : "Save"}
                          </button>
                          <button
                            onClick={handleCancel}
                            className="flex items-center justify-center px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm"
                          >
                            <FaTimes className="mr-1" />
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(shipment)}
                          className="flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm"
                        >
                          <FaEdit className="mr-1" />
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminShipmentsPage;