import React from 'react';

import { faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

import List from '../../../components/List/index';

import { Container, Title, SkillsContainer } from './styles';

const data = {
  title: 'Frontend',
  list: [
    {
      name: 'HTML',
      number: '90%',
    },
    {
      name: 'HTML',
      number: '90%',
    },
    {
      name: 'HTML',
      number: '90%',
    },
  ],
};

const data1 = {
  title: 'Backend',
  list: [
    {
      name: 'HTML',
      number: '90%',
    },
    {
      name: 'HTML',
      number: '70%',
    },
    {
      name: 'HTML',
      number: '50%',
    },
  ],
};

function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillsContainer>
        <List data={data} icon={faLaptopCode} />
        <List data={data1} icon={faDatabase} />
      </SkillsContainer>
    </Container>
  );
}

export default Skills;
