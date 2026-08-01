import { dbConnect } from "@/connect";

const connectResult = dbConnect();

if (!connectResult.ok) {
  throw connectResult.error;
}

export const db = connectResult.data;
