import React from 'react';

const Home = () => {
  const user: any = {
    name: 'marco'
  };
  const name: string = user?.name;
  return <div>{name}</div>;
};

export default Home;
