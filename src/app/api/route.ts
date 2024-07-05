
export async function POST(req: Request, response: Response) {

    const reqBody = await req.json();
    console.log("reqBody",reqBody);
  return new Response(JSON.stringify({msg:"success"}), { status: 200 });
}
