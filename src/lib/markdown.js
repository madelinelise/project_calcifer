import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

/**
 * Gets all the Markdown filenames (slugs) in the content directory.
 * This can be used to generate a list of posts for indexing or querying.
 *
 * @returns {string[]} Array of filenames (slugs) without extensions.
 */
export function getPostSlugs() {
  return fs.readdirSync(contentDirectory);
}

/**
 * Retrieves the content of a specific post by its slug.
 * This function reads the Markdown file, extracts metadata and content,
 * and converts the content to HTML.
 *
 * @param {string} slug - The slug of the post (without file extension).
 * @returns {Object} The post content and metadata.
 * @returns {string} return.slug - The slug of the post.
 * @returns {Object} return.metadata - The frontmatter metadata (e.g., title, date).
 * @returns {string} return.content - The HTML content of the post.
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    metadata: data,
    content: contentHtml,
  };
}

/**
 * Retrieves all the posts in the content directory, converting each to HTML.
 * This is useful for generating a list of posts, such as on the homepage or a blog index.
 *
 * @returns {Array<Object>} Array of all posts, with metadata and HTML content.
 */
export function getAllPosts() {
  return getPostSlugs().map((slug) => getPostBySlug(slug.replace(/\.md$/, '')));
}
