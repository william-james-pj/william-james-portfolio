import React from 'react';

import {
  faLaptopCode,
  faDatabase,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

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
      number: '80%',
    },
    {
      name: 'Reactjs',
      number: '60%',
    },
  ],
};

const data1 = {
  title: 'Backend',
  list: [
    {
      name: 'Nodejs',
      number: '50%',
    },
  ],
};

const data2 = {
  title: 'DataBase',
  list: [
    {
      name: 'Firebase',
      number: '60%',
    },
    {
      name: 'MySQL',
      number: '70%',
    },
    {
      name: 'MongoDB',
      number: '50%',
    },
  ],
};

function Skills() {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <SkillsContainer>
        <List data={data} icon={faLaptopCode} />
        <List data={data1} icon={faTerminal} />
        <List data={data2} icon={faDatabase} />
      </SkillsContainer>
    </Container>
  );
}

export default Skills;
