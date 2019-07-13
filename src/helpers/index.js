export function makeRequest(url: string): Promise<void> {
  return fetch(url).then(response => response.json())
}
