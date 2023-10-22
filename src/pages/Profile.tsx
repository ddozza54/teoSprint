import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../constants/path';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  width: 274px;
  height: 72px;
  background-color: gray;
`;
const ProjectName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 48px;
`;
const ProfileImage = styled.image`
  display: flex;
  width: 300px;
  height: 300px;
  border: 1px solid lightgray;
  border-radius: 50%;
  margin: 25px 0;
  background-image: url('src/assets/face.svg');
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
const ProfileName = styled.div`
  font-size: 40px;
`;
const InputName = styled.input`
  width: 100%;
  height: 57px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-left: 10px;
`;
const SubmitBtn = styled.button`
  width: 50%;
  height: 10%;
  padding: 13px;
  margin-top: 10px;
  border-radius: 60px;
  font-size: 36px;
  border: none;
  cursor: pointer;
`;

const Profile = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (name === '') {
      localStorage.setItem('name', '무명');
    } else {
      localStorage.setItem('name', name);
    }
    navigate(`/${PATH.CATEGORIES}`);
  };

  return (
    <Container>
      <Logo />
      <Wrapper>
        <ProjectName>프로필</ProjectName>
        <ProfileImage />
        <ProfileName>이름</ProfileName>
        <InputName
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SubmitBtn onClick={handleSubmit}>시작하기</SubmitBtn>
      </Wrapper>
    </Container>
  );
};

export default Profile;