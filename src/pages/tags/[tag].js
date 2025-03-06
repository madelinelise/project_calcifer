import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content');

// Function to check if a file is a markdown file
const isMarkdownFile = (file) => file.endsWith('.md');

export async function getStaticProps({ params }) {
  const { tag } = params;
  const files = fs.readdirSync(contentDir);

  // Filter out directories and keep only markdown files
  const filteredFiles = files.filter(file => {
    const filePath = path.join(contentDir, file);
    return isMarkdownFile(file) && fs.lstatSync(filePath).isFile();
  });

  const filteredPosts = filteredFiles.filter(file => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(fileContent);
    return data.tags && data.tags.includes(tag);
  });

  const posts = filteredPosts.map(file => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data, content } = matter(fileContent);
    return { ...data, content };
  });

  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(contentDir);

  // Filter out directories and keep only markdown files
  const markdownFiles = files.filter(file => {
    const filePath = path.join(contentDir, file);
    return isMarkdownFile(file) && fs.lstatSync(filePath).isFile();
  });

  const tags = markdownFiles.flatMap(file => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(fileContent);
    return data.tags || [];
  });

  const uniqueTags = [...new Set(tags)];

  const paths = uniqueTags.map(tag => ({
    params: { tag },
  }));

  return { paths, fallback: false };
}

export default function TagPage({ posts }) {
  return (
    <div>
      <h1>Posts Tagged</h1>
      {posts.length ? (
        posts.map(post => (
          <div key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </div>
  );
}
