import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Order Received:", body);
    
    // Simulate order creation
    return NextResponse.json({ 
      success: true, 
      message: "Order placed successfully",
      orderId: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      item: body 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Failed to create order" 
    }, { status: 400 });
  }
}
