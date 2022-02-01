import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

const Blog = ({ dataBlog }: BlogProps) => {
  return (
    <Layout pageTitle='Blog'>
      <div>Blog Page</div>
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog: dataBlog,
    },
  };
}
