import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

import DataQualification from '../../../components/DataQualification';

import {
  Container,
  Title,
  QualificationContainer,
  Tabs,
  Button,
  Icon,
  Sections,
  Content,
} from './styles';

const education = [
  {
    title: 'Técnico de Informática',
    where: 'ETEC São Roque',
    date: '2018 - 2019',
  },
  {
    title: 'Engenharia de Computação',
    where: 'Facens',
    date: '2020 - 2025',
  },
];

const work = [
  {
    title: 'A procura da primeira oportunidade',
    where: '',
    date: '~',
  },
];

function Qualification() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Title>Qualificação</Title>
      <QualificationContainer>
        <Tabs>
          <Button onClick={handleClick} active={active}>
            <Icon>
              <FontAwesomeIcon icon={faGraduationCap} size="sm" />
            </Icon>
            Educação
          </Button>
          <Button onClick={handleClick} active={!active}>
            <Icon>
              <FontAwesomeIcon icon={faBriefcase} size="sm" />
            </Icon>
            Trabalho
          </Button>
        </Tabs>

        <Sections>
          <Content active={!active}>
            {education.map((item, index) => {
              return (
                <DataQualification
                  key={item.title + index}
                  data={item}
                  right={index}
                  last={++index === education.length}
                />
              );
            })}
          </Content>
          <Content active={active}>
            {work.map((item, index) => {
              return (
                <DataQualification
                  key={item.title + index}
                  data={item}
                  right={index}
                  last={++index === work.length}
                />
              );
            })}
          </Content>
        </Sections>
      </QualificationContainer>
    </Container>
  );
}

export default Qualification;
