import { useNavigate } from 'react-router-dom';

import Logo from '@/shared/_assets/logo.png';

import { Button } from '@/shared';

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-10'>
      <div>
        <img src={Logo} alt='moijo-logo' />
      </div>
      <div className='flex gap-3'>
        <Button onClick={() => navigate('/login')}>로그인</Button>
        <Button onClick={() => navigate('/signup')}>회원가입</Button>
      </div>
    </div>
  );
};
