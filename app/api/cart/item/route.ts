import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface CartItem {
  productId: number;
  title: string;
  price: number;
  image: string;
}

export async function POST(req: NextRequest) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const cookieStore = cookies();
    const product: CartItem = await req.json();
    let cartId = cookieStore.get("cartId")?.value;

    if (!cartId) {
      const res = await fetch(`${baseUrl}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.id) {
        cookieStore.set("cartId", data.id);
        cartId = data.id;
      }
    }

    const res = await fetch(`${baseUrl}/api/cart/${cartId}/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product.productId,
        quantity: 1,
        image_url: product.image,
        price: product.price,
        title: product.title,
      }),
    });

    const data = await res.json();

    if (data.id) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(null, { status: 400 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(null, { status: 500, statusText: error.message });
  }
}
