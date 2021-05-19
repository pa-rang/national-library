import React from 'react';
import Header from '../components/common/Header';

const userData = {
    id:'1',
    nickname:'안소현',
    photoURl:'/assets/images/simple.svg',
    reservation:1,
};

function HomePage() {
  const {nickname, photoURl, reservation} = userData;
    return (
        <>
        <Header nickname={nickname} photoURl={photoURl} ></Header>
        </>
    );
};

export default HomePage;