import React from 'react';
import Layout from '../../components/Layout';

interface UserProps {
  dataUsers: Array<any>;
}

const Users = ({ dataUsers }: UserProps) => {
  console.log('dataUsers', dataUsers);
  return (
    <Layout pageTitle='Users'>
      <div>User Page</div>
      {dataUsers.map((user) => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
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
