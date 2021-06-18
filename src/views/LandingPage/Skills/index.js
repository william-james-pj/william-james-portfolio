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
      name: 'CSS',
      number: '90%',
    },
    {
      name: 'JS',
      number: '90%',
    },
  ],
};

const data1 = {
  title: 'Backend',
  list: [
    {
      name: 'Firebase',
      number: '90%',
    },
    {
      name: 'Nodejs',
      number: '70%',
    },
    {
      name: 'MySQL',
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
