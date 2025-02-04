import { useStoryblokApi } from "@storyblok/astro";

export default async function (): Promise<{ label: string, link: string, items: { label: string, link: string }[] }[]> {
  const storyblokApi = useStoryblokApi();

  const results = await storyblokApi.getAll('cdn/stories', {
    version: import.meta.env.DEV ? "draft" : "published",
    content_type: 'navigation',
  })
  if (results.length !== 1) {
    throw new Error('There should only be one navigation story');
  }

  const navigation = results[0];
  const items = navigation.content.items;

  return items.map((item: any) => ({
    label: item.label as string,
    link: item.page.cached_url === 'home' ? '/' : `/${item.page.cached_url}` as string,
    items: item.items?.map((item: any) => ({
      label: item.label as string,
      link: item.page.cached_url === 'home' ? '/' : `/${item.page.cached_url}` as string,
    })) ?? [],
  }))
}
