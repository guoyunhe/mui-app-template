import i18next from 'i18next';
import ky from 'ky';

const apiTokenStorageKey = 'api_token';
let apiToken = localStorage.getItem(apiTokenStorageKey);

export function setApiToken(token: string) {
  apiToken = token;
  localStorage.setItem(apiTokenStorageKey, token);
}

export function removeApiToken() {
  apiToken = null;
  localStorage.removeItem(apiTokenStorageKey);
}

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        if (apiToken) {
          request.headers.set('Authorization', apiToken);
          request.headers.set('X-Language', i18next.language);
        }
      },
    ],
  },
});

export default api;
