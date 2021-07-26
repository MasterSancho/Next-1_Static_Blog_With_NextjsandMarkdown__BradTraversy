import fs from 'fs';
import path from 'path';
import matter from'gray-matter

export default function PostPage() {
 return <div>post</div>;
}

export async function getStaticPaths() {
 const files = fs.readdirSync(path.join('posts'));

 const paths = files.map((filename) => ({
  params: {
   slug: filename.replace('.md', ''),
  },
 }));

 return {
  paths,
  fallback: false,
 };
}

export async function getStaticProps({ params: { slug } }) {
 const markdownWithMeta = fs.readFileSync(
  path.join('posts', slug + '.md'),
  'utf-8'
 );

 return {
  props: {},
 };
}
