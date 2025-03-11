import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("dev");

    // Test the connection by listing collections
    const collections = await db.listCollections().toArray();

    return Response.json({
      status: "success",
      message: "Connected to MongoDB successfully",
      collections: collections.map((c) => c.name),
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return Response.json(
      {
        status: "error",
        message: "Failed to connect to MongoDB",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
