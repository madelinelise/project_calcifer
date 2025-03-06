import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../src/components/Layout';

// Fetch all posts data at build time
export async function getStaticProps() {
  // Path to the content directory
  const contentDir = path.join(process.cwd(), 'src/content');

  // Function to get all markdown files recursively
  const getFiles = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getFiles(filePath) : filePath;
    });

  // Get all files and filter only markdown files
  const files = getFiles(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const relativePath = file.replace(contentDir, '').replace(/\.md$/, '');
      const slug = relativePath.split(path.sep).filter(Boolean); // Create slug based on the file path
      const fileContent = fs.readFileSync(file, 'utf-8');
      const { data } = matter(fileContent);
      return { slug, frontmatter: data };
    });

  return {
    props: {
      posts: files,
    },
  };
}

// Component to render all posts on the homepage
export default function Home({ posts }) {
  return (
    <Layout>
      <h2>All Blog Posts</h2>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug.join('/')}>
            <Link href={`/${slug.join('/')}`}>
              {frontmatter.title} {/* No <a> tag */}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
