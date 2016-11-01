import fetch from 'isomorphic-fetch';

export function apiGetSettings() {
  return fetch(
    `http://${window.location.host}/api/settings`, // complete path, including query string
    {
      method: 'GET',
      type: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
