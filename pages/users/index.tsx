import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import styles from '../../styles/Users.module.css';

interface UserProps {
  dataUsers: Array<any>;
}

const Users = ({ dataUsers }: UserProps) => {
  const router = useRouter();
  console.log('dataUsers', dataUsers);
  return (
    <Layout pageTitle='Users'>
      <div>User Page</div>
      {dataUsers.map((user) => {
        return (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className={styles.card}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
