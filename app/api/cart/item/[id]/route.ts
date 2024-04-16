import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const cookieStore = cookies();
    const cartId = cookieStore.get("cartId")?.value;
    const { id } = params;

    const res = await fetch(`${baseUrl}/api/cart/${cartId}/item/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.message) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(null, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(null, { status: 500, statusText: error.message });
  }
}

export async function PATCH(
  req: NextResponse,
  { params }: { params: { id: string } }
) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const cookieStore = cookies();
    const cartId = cookieStore.get("cartId")?.value;
    const { id } = params;
    const product = await req.json();

    const res = await fetch(`${baseUrl}/api/cart/${cartId}/item/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    if (data.message) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(null, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(null, { status: 500, statusText: error.message });
  }
}
