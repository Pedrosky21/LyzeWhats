export async function POST(req: Request) {
  const formData = await req.formData();

  const response = await fetch("https://lyzewhats-back.onrender.com/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Error en el backend" }), {
      status: 500,
    });
  }

  const data = await response.json();
  return Response.json(data);
}
