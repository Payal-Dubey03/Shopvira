import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Mock Add to Cart:", body);
    
    // Simulate a successful addition
    return NextResponse.json({ 
      success: true, 
      message: "Product added to cart successfully",
      item: body 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Failed to process request" 
    }, { status: 400 });
  }
}
