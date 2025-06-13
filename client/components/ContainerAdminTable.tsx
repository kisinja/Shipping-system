"use client";

import { Container } from "@/prisma/generated";
import React, { useEffect } from "react";
import DeleteButton from "./DeleteButton";
import {
  FaShip,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExchangeAlt,
  FaCheckCircle,
  FaTools,
  FaClock,
} from "react-icons/fa";
import { getAccessToken } from "@/utils/kinde/getAccessToken";

const statusColors = {
  AVAILABLE: "bg-green-100 text-green-800",
  BOOKED: "bg-blue-100 text-blue-800",
  IN_TRANSIT: "bg-yellow-100 text-yellow-800",
  READY_FOR_SHIPMENT: "bg-purple-100 text-purple-800",
  AT_PORT: "bg-indigo-100 text-indigo-800",
  DELIVERED: "bg-teal-100 text-teal-800",
  MAINTENANCE: "bg-red-100 text-red-800",
};

const statusIcons = {
  AVAILABLE: <FaCheckCircle className="mr-1" />,
  BOOKED: <FaCalendarAlt className="mr-1" />,
  IN_TRANSIT: <FaShip className="mr-1" />,
  READY_FOR_SHIPMENT: <FaBoxOpen className="mr-1" />,
  AT_PORT: <FaMapMarkerAlt className="mr-1" />,
  DELIVERED: <FaCheckCircle className="mr-1" />,
  MAINTENANCE: <FaTools className="mr-1" />,
};

const ContainerAdminTable = ({
  container,
  containerOwnerId,
  i,
}: {
  container: Container;
  containerOwnerId: string;
  i: number;
}) => {
  const [owner, setOwner] = React.useState(null);

  useEffect(() => {
    const getCurrentUser = async (id: string) => {
      const token = await getAccessToken();

      const res = await fetch(
        `https://savostore.kinde.com/api/v1/user?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("Error fetching user data:", data);
        throw new Error("Failed to fetch user");
      }

      setOwner(data);
    };

    if (!containerOwnerId) {
      getCurrentUser(containerOwnerId).catch((error) => {
        console.error("Error fetching container owner:", error);
      });
    }
  }, [containerOwnerId]);


  return (
    <tr key={container.id} className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-4 md:px-6 whitespace-nowrap text-sm font-medium text-gray-900">
        {(i += 1)}
      </td>
      <td className="px-4 py-4 md:px-6">
        <div className="font-medium text-gray-900">{container.containerId}</div>
        <div className="text-xs text-gray-500">
          ID: {container.id.slice(-6)}
        </div>
      </td>
      <td className="px-4 py-4 md:px-6">
        <div className="font-medium text-sm">{container.size} sqft</div>
        <div className="text-xs text-gray-500">{container.type}</div>
        <div className="mt-1">
          {container.goods.length > 0 ? (
            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
              {container.goods.length} items
            </span>
          ) : (
            <span className="text-gray-400 text-xs">Empty</span>
          )}
        </div>
      </td>
      <td className="px-4 py-4 md:px-6">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-2 text-sm" />
          <span className="text-sm">{container.currentPort}</span>
        </div>
        {container.shipment?.currentPort && (
          <div className="text-xs text-gray-500 mt-1">
            Shipment: {container.shipment.currentPort}
          </div>
        )}
      </td>
      <td className="px-4 py-4 md:px-6">
        <span
          className={`px-2 py-1 inline-flex items-center text-xs leading-4 font-semibold rounded-full capitalize ${
            statusColors[container.status]
          }`}
        >
          {statusIcons[container.status]}
          {container.status.replace("_", " ")}
        </span>
        <div className="text-xs text-gray-500 mt-1">
          {new Date(container.updatedAt).toLocaleDateString()}
        </div>
      </td>
      <td className="px-4 py-4 md:px-6">
        {container.shipment ? (
          <div>
            <div className="font-medium flex items-center text-sm">
              <FaExchangeAlt className="text-green-500 mr-2" />
              {container.shipment.shipmentCode}
            </div>
            <div className="text-xs text-gray-500">
              {container.shipment.origin} → {container.shipment.destination}
            </div>
            {container.shipment.estimatedArrival && (
              <div className="text-xs mt-1 flex items-center">
                <FaClock className="mr-1 text-gray-400" />
                ETA:{" "}
                {new Date(
                  container.shipment.estimatedArrival
                ).toLocaleDateString()}
              </div>
            )}
          </div>
        ) : (
          <span className="text-gray-400 text-sm">No shipment</span>
        )}
      </td>
      <td className="px-4 py-4 md:px-6 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <DeleteButton containerId={container.id} />
        </div>
      </td>
    </tr>
  );
};

export default ContainerAdminTable;
