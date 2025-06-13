import ContainerAdminTable from "@/components/ContainerAdminTable";
import DeleteButton from "@/components/DeleteButton";
import { prismaClient } from "@/utils";
import React from "react";
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

const AdminContainersPage = async () => {
  const containers = await prismaClient.container.findMany({
    include: {
      shipment: {
        include: {
          Goods: true,
        },
      },
      goods: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!containers) {
    return <div className="p-6">No containers found.</div>;
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
          <FaShip className="mr-3 text-blue-600 text-2xl" />
          Container Management
        </h1>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 w-full md:w-auto">
          <span className="text-gray-600">Total Containers:</span>
          <span className="ml-2 font-bold text-blue-600">
            {containers.length}
          </span>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          {
            status: "AVAILABLE",
            color: "green",
            icon: <FaCheckCircle className="mr-1" />,
          },
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
            status: "MAINTENANCE",
            color: "red",
            icon: <FaTools className="mr-1" />,
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
              {containers.filter((c) => c.status === item.status).length}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <tr>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  #
                </th>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Container
                </th>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Shipment
                </th>
                <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {containers.map((container, i) => {
                const containerOwnerId = container.userId;
                return (
                  <ContainerAdminTable
                    i={i}
                    container={container}
                    key={i}
                    containerOwnerId={containerOwnerId as string}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminContainersPage;
