import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout';
import RecentPostsByTag from '../components/RecentPostsByTag';
import RecentPostsBySection from '../components/RecentPostsSection';

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
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)); // Sort posts by date

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
      <RecentPostsBySection heading="Technology" tags={["tech", "javascript", "nextjs"]} posts={posts} />
      <RecentPostsBySection heading="Finance" tags={["1", "2", "3"]} posts={posts} />
      <RecentPostsBySection heading="Health" tags={["1", "2", "3"]} posts={posts} />
    </Layout>
  );
}
