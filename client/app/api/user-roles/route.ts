import { getAccessToken } from "@/utils/kinde/getAccessToken";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId } = await request.json(); // ✅ Fix here
  const token = await getAccessToken();

  const { getOrganization } = getKindeServerSession();
  const org = await getOrganization();

  if (!userId || !org?.orgCode) {
    return NextResponse.json(
      { error: "userId and orgCode are required" },
      { status: 400 }
    );
  }

  try {
    const url = `https://savostore.kinde.com/api/v1/organizations/${org.orgCode}/users/${userId}/roles`;

    console.log("Fetching roles from:", url); // ✅ Log URL

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Kinde API error response:", text); // 👈 Debug details
      throw new Error("Failed to fetch user roles");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Role fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user roles" },
      { status: 500 }
    );
  }
}