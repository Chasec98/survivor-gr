import { useStoryblokApi } from "@storyblok/astro";
import type { Page } from "../types/page";

export default async function (): Promise<Page[]> {
  const storyblokApi = useStoryblokApi();

  const results = await storyblokApi.getAll('cdn/stories', {
    version: import.meta.env.DEV ? "draft" : "published",
    content_type: 'page',
  })

  return results.map((result) => {
    if (typeof result.full_slug !== 'string') {
      throw new Error('full_slug is not a string');
    }

    return {
      slug: result.full_slug,
    }
  });
}
