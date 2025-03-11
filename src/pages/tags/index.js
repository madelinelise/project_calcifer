import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';

// Fetch all tags at build time
export async function getStaticProps() {
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
    props: {
      tags: uniqueTags,
    },
  };
}

// Component to render all tags
export default function TagsPage({ tags }) {
  return (
    <Layout>
      <h2>All Tags</h2>
      <ul>
        {tags.map(tag => (
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
