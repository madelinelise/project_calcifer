import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Get all possible paths for static generation
export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'src/content');

  const getFiles = (dir) => {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getFiles(filePath) : filePath;
    });
  };

  const files = getFiles(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const relativePath = file.replace(contentDir, '').replace(/\.md$/, '');
      const slug = relativePath.split(path.sep).filter(Boolean); // Convert path to array
      return { params: { slug } };
    });

  return { paths: files, fallback: false };
}

// Fetch the content of a specific markdown file
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'src/content', ...params.slug) + '.md';
  
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content: marked(content),
      slug: params.slug.join('/'),
    },
  };
}

// Blog post page component
export default function BlogPost({ frontmatter, content }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p><strong>Date:</strong> {frontmatter.date}</p>
      <p><strong>Tags:</strong> {frontmatter.tags?.join(', ')}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
