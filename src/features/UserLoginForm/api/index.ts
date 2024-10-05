import { request } from '@/shared/api/backend';

export const auth_api = {
  getTokens: request.post()
}