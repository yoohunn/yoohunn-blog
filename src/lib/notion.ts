import { NotionAPI } from 'notion-client';

export async function getNotionPage(id: string) {
  const api = new NotionAPI();
  return api
    .getPage(id)
    .then((value) => value)
    .catch(() => null);
}
