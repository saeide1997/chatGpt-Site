import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
  return <div className='flex justify-center items-center h-screen'>

    <SignIn path="sign-in" />
    </div>;
};

export default LoginPage;