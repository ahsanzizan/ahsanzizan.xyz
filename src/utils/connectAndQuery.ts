import connectDB from "../lib/mongoose";

export async function connectAndQuery(queryFn: () => Promise<any>) {
    await connectDB();
    return queryFn();
}