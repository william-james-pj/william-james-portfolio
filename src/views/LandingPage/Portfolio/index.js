import React, { useState, useEffect } from 'react';
import { db, storage } from '../../../services/firestore';

import SliderItem from '../../../components/SliderItem';

import {
  Container,
  Title,
  PortfolioContainer,
  Button,
  ButtonLink,
} from './styles';

function Portfolio() {
  const [maxItems, setMaxItems] = useState(4);
  const [isLoading, setLoading] = useState(true);
  const [firebaseData, setFirebaseData] = useState([]);

  const handle = () => {
    setMaxItems(maxItems + 2);
  };

  const fetchData = async () => {
    try {
      let items = [];
      const response = db.collection('Portfolio');
      const data = await response.get();
      await data.docs.forEach((documentSnapshot) => {
        items.push({
          title: documentSnapshot.data().title,
          description: documentSnapshot.data().description,
          demo: documentSnapshot.data().demo,
          link: documentSnapshot.data().link,
          img: documentSnapshot.data().img,
        });
      });
      await fetchImg(items);
      setFirebaseData(items);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const fetchImg = async (items) => {
    try {
      await Promise.all(
        items.map(async (item) => {
          let starsRef = storage.ref('Portfolio/' + item.img);
          await starsRef
            .getDownloadURL()
            .then((url) => {
              item.img = url;
            })
            .catch(() => {
              return null;
            });
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Container></Container>;

  return (
    <Container id="portfolio">
      <Title>Portfolio</Title>
      <PortfolioContainer>
        {firebaseData.slice(0, maxItems).map((item, index) => {
          return <SliderItem item={item} key={item.title + index} />;
        })}
      </PortfolioContainer>
      <Button>
        {maxItems <= firebaseData.length ? (
          <ButtonLink onClick={handle}>Mostrar mais</ButtonLink>
        ) : null}
      </Button>
    </Container>
  );
}

export default Portfolio;
