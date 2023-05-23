import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'c05d200643db7e95bd85ab9870cda83544076c2e', queries });
export default client;
  