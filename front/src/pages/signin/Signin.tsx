import React from 'react';
import Signin from './components/Signin.Signin';
import { withLoginSoNot } from '../../components/withLogin';

const SigninPage: React.FC = () => {
  return (
    <main style={{ height: '69vh' }}>
      <Signin></Signin>
    </main>
  );
};

export default withLoginSoNot(SigninPage);
