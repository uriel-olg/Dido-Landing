import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "3eaw5xaq",
  dataset: "production",
  apiVersion: "2026-08-28",
  useCdn: false,
})
