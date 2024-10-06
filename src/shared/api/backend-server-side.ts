import "server-only";

import { getSession } from "../session/server-side";

async function getAccessToken() {
  const session = await getSession();
  return session?.access;
}

export const request = {
  get: async (url: string) => {
    const accessToken = await getAccessToken();
    return await fetch(url, {
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(`Request error: ${error}`);
      });
  },

  post: async <T>(url: string, data: T) => {
    const accessToken = await getAccessToken();
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(`Request error: ${error}`);
      });
  },
};
