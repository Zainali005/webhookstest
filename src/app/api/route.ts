import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, response: NextResponse) {
    console.log("req",req);
    
  return new Response(JSON.stringify({msg:"success"}), { status: 200 });
}
