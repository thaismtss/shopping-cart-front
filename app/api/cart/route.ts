import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface CartItem {
  product_id: number;
  title: string;
  price: number;
  image_url: string;
  quantity: number;
}

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const cookieStore = cookies();
    const cartId = cookieStore.get("cartId")?.value;

    const res = await fetch(`${baseUrl}/api/cart/${cartId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const mappedCartItems = data.cart_items.map((item: CartItem) => ({
      productId: item.product_id,
      title: item.title,
      price: item.price,
      image: item.image_url,
      quantity: item.quantity,
    }));

    return NextResponse.json({
      cartItems: mappedCartItems,
      subtotal: data.subtotal,
      totalCartItems: data.total_items,
    });
  } catch (error: any) {
    return NextResponse.json(null, { status: 500, statusText: error.message });
  }
}
