//import { DocumentsPanel } from '@/components/DocumentsPanel';
//import { PortSchedule } from '@/components/PortScedule';
import { ShipmentTracker } from '@/components/ShipmentTracker';
import { StatusTimeline } from '@/components/StatusTimeline';
//import { notFound } from 'next/navigation';

type ParamsProps = Promise<{
    id: string;
}>;

export default async function TrackingPage(
    { params }: { params: ParamsProps }
) {
    const shipmentId = (await params).id;
    console.log(shipmentId);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const shipmentRes = await fetch(`${baseUrl}/api/shipments/${shipmentId}`, {
        cache: 'no-store', // optionally disable caching if needed
    });
    const shipment = await shipmentRes.json();
    console.log(shipment);
    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <ShipmentTracker shipmentId={shipmentId} />
                <StatusTimeline logs={shipment?.logs || []} />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* <DocumentsPanel shipmentId={shipmentId} /> */}
                {/* <ContainerDetails containerId={shipment.containerId} /> */}
                {/* <PortSchedule shipment={shipment} /> */}
            </div>
        </div>
    );
};