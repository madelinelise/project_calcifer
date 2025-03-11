import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout';

// Fetch all posts at build time
export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), 'src/content');

  // Function to get all markdown files recursively
  const getFiles = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getFiles(filePath) : filePath;
    });

  // Get all markdown files and extract metadata
  const files = getFiles(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fileContent = fs.readFileSync(file, 'utf-8');
      const { data } = matter(fileContent);
      return { slug: file.replace(contentDir, '').replace(/\.md$/, '').split(path.sep).filter(Boolean), frontmatter: data };
    });

  // Filter posts that include the requested tag
  const tag = params.tag.toLowerCase();
  const filteredPosts = files
    .filter(({ frontmatter }) => frontmatter.tags?.map(t => t.toLowerCase()).includes(tag))
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .slice(0, 5); // Get top 5 recent posts

  return {
    props: {
      tag,
      posts: filteredPosts,
    },
  };
}

// Generate static paths for all tags
export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const getFiles = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getFiles(filePath) : filePath;
    });

  const files = getFiles(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fileContent = fs.readFileSync(file, 'utf-8');
      const { data } = matter(fileContent);
      return data.tags || [];
    });

  const uniqueTags = [...new Set(files.flat().map(tag => tag.toLowerCase()))];

  return {
    paths: uniqueTags.map(tag => ({ params: { tag } })),
    fallback: false,
  };
}

// Component to render tag-specific view
export default function TagPage({ tag, posts }) {
  return (
    <Layout>
      <h1>{tag}"</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map(({ slug, frontmatter }) => (
            <li key={slug.join('/')}>
              <Link href={`/${slug.join('/')}`}>
                {frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </Layout>
  );
}
