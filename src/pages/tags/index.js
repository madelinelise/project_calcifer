import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import Link from 'next/link';

// Fetch tags data at build time
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
      const fileContent = fs.readFileSync(file, 'utf-8');
      const { data } = matter(fileContent);
      return data;
    });

  // Extract all tags and get unique ones
  const tags = files
    .flatMap(file => file.tags || []) // Get tags from each post
    .filter((tag, index, self) => self.indexOf(tag) === index); // Remove duplicates

  return {
    props: {
      tags,
    },
  };
}

export default function Tags({ tags }) {
  return (
    <Layout>
      <h2>All Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
