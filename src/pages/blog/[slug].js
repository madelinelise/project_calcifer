import { getPostBySlug, getPostSlugs } from '@/lib/markdown';

/**
 * Fetches the data for a specific post based on the slug.
 * The function retrieves the Markdown content, converts it to HTML,
 * and returns it as props to the component.
 *
 * @param {Object} params - The dynamic parameters for the page.
 * @param {string} params.slug - The slug of the post (from URL).
 * @returns {Object} The post data.
 * @returns {Object} return.post - The post data, including metadata and content.
 * @returns {string} return.post.slug - The slug of the post.
 * @returns {Object} return.post.metadata - The frontmatter metadata (title, date, etc.).
 * @returns {string} return.post.content - The HTML content of the post.
 */
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

/**
 * Retrieves the paths for all available posts based on the slugs.
 * This function is used by Next.js to determine which paths should be pre-rendered.
 *
 * @returns {Object} The paths for the static generation of posts.
 * @returns {Array<Object>} return.paths - Array of paths (slug) for dynamic pages.
 * @returns {boolean} return.fallback - Whether or not to use fallback mode for static generation.
 */
export async function getStaticPaths() {
  const paths = getPostSlugs().map((slug) => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

/**
 * Blog post component that renders the content of a specific post.
 * The component receives the post data (metadata and content) from getStaticProps
 * and renders the post on the page.
 *
 * @param {Object} post - The post data to render.
 * @param {Object} post.metadata - The metadata of the post (e.g., title, date).
 * @param {string} post.content - The HTML content of the post.
 * @returns {JSX.Element} The rendered blog post.
 */
export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.metadata.title}</h1>
      <p>{post.metadata.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
