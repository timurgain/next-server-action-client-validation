import { request } from "@/shared/api/backend-server-side";
import { Credentials, Tokens } from "../types";

export const auth_api = {
  getTokens: async (data: Credentials): Promise<Tokens> => {

    // Real backend request
    // return request.post('/api/auth/', data)

    // Mock backend request
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          access: "mock_access_token",
          refresh: "mock_refresh_token",
        });
      }, 1000)
    );
  },
};
