"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  ContainerIcon,
  ShipWheelIcon,
  PortIcon,
  LoadingSpinner,
  PackageIcon,
  PackageCheckIcon,
  ShoppingCartIcon,
  ShipIcon,
} from "@/components/Icons";
import { Container } from "@/types/container";
import { bookContainer } from "@/app/dashboard/bookings/new/actions";
import ContainerDetailsModal from "./ContainerDetailsModal";

interface ContainerCardProps {
  container: Container;
  loading?: string | null;
  setLoading?: (id: string | null) => void;
  setMessage?: (
    message: { text: string; type: "success" | "error" } | null
  ) => void;
  onBookingSuccess?: () => void;
}

const ContainerCard: React.FC<ContainerCardProps> = ({
  container,
  loading: propLoading,
  setLoading: propSetLoading,
  setMessage: propSetMessage,
  onBookingSuccess: propOnBookingSuccess,
}) => {
  const router = useRouter();
  const [internalLoading, setInternalLoading] = React.useState<string | null>(
    null
  );
  const [internalMessage, setInternalMessage] = React.useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Use props if provided, otherwise use internal state
  const loading = propLoading !== undefined ? propLoading : internalLoading;
  const setLoading = propSetLoading || setInternalLoading;
  const setMessage = propSetMessage || setInternalMessage;
  const onBookingSuccess = propOnBookingSuccess || (() => {});

  const statusColors = {
    AVAILABLE: "bg-emerald-500",
    BOOKED: "bg-gradient-to-r from-cyan-600 to-blue-700",
    IN_TRANSIT: "bg-indigo-500",
    READY_FOR_SHIPMENT: "bg-green-700",
    AT_PORT: "bg-amber-500",
    MAINTENANCE: "bg-slate-500",
  };

  const handleBooking = async (containerId: string) => {
    setLoading(containerId);
    setMessage(null);

    try {
      const response = await bookContainer(containerId);
      if (response.success) {
        setMessage({ text: "Container booked successfully!", type: "success" });
        onBookingSuccess();
      } else {
        setMessage({
          text: "Failed to book the container. Please try again.",
          type: "error",
        });
      }
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        text:
          error instanceof Error ? error.message : "An unknown error occurred",
        type: "error",
      });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setLoading(null);
    }
  };

  const handleAddGoods = () => {
    router.push(
      `/dashboard/goods/add?containerId=${container.id}&shipmentId=${container.shipmentId}`
    );
  };

  const confirmContainerReadiness = async () => {
    try {
      const res = await axios.get(`/api/containers/${container.id}/ready`);
      if (res.data.success) {
        setMessage({
          type: "success",
          text: "Container marked as ready for shipment!",
        });
        onBookingSuccess();
      } else {
        setMessage({ type: "error", text: res.data.message });
      }
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", text: "Failed to confirm readiness." });
    } finally {
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer">
        <div
          className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white ${
            statusColors[container.status as keyof typeof statusColors] ||
            "bg-amber-500"
          }`}
        >
          {container.status.replace("_", " ")}
        </div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-teal-100 mr-4">
              <ContainerIcon className="w-6 h-6 text-cyan-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-800" onClick={() => setIsModalOpen(true)}>
              {container.containerId}
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <ShipWheelIcon className="w-5 h-5 text-slate-500 mr-2" />
              <span className="text-sm font-medium text-slate-600">
                {container.size} • {container.type}
              </span>
            </div>

            <div className="flex items-center">
              <PortIcon className="w-5 h-5 text-slate-500 mr-2" />
              <span className="text-sm font-medium text-slate-600">
                Currently at {container.currentPort}
              </span>
            </div>

            {container.goods && container.goods.length > 0 && (
              <div className="flex items-center">
                <PackageIcon className="w-5 h-5 text-slate-500 mr-2" />
                <span className="text-sm font-medium text-slate-600">
                  Contains {container.goods.length} item
                  {container.goods.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>

          {container.status === "AVAILABLE" && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => handleBooking(container.id)}
                disabled={loading === container.id}
                className={`w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 transition-all duration-200 shadow-md ${
                  loading === container.id
                    ? "opacity-80 cursor-not-allowed"
                    : ""
                }`}
              >
                {loading === container.id ? (
                  <>
                    <LoadingSpinner className="animate-spin h-4 w-4" />
                    Processing...
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon className="w-5 h-5" />
                    Book this container
                  </>
                )}
              </button>
            </div>
          )}

          {container.status === "BOOKED" && (
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={handleAddGoods}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-md"
              >
                <PackageIcon className="w-5 h-5" />
                Add Goods
              </button>

              {container.goods && container.goods.length > 0 ? (
                <button
                  onClick={confirmContainerReadiness}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-md"
                >
                  <PackageCheckIcon className="w-5 h-5" />
                  Confirm Readiness
                </button>
              ) : (
                <div className="text-center py-2 px-4 text-sm text-amber-600 bg-amber-50 rounded-lg border border-amber-100">
                  Add goods before confirming readiness
                </div>
              )}
            </div>
          )}

          {container.status === "READY_FOR_SHIPMENT" && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white bg-green-600">
                <ShipIcon className="w-5 h-5" />
                Ready for Departure
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ContainerDetailsModal
          container={container}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ContainerCard;
