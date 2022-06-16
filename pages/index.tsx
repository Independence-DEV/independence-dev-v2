import { Grid, Container } from '@mantine/core';
import { HeaderMiddle } from '../components/HeaderMiddle/HeaderMiddle';
import { ArticleCardImage } from '../components/ArticleCardImage/ArticleCardImage';
import { ArticleCard } from '../components/ArticleCard/ArticleCard';
import { BadgeCard } from '../components/BadgeCard/BadgeCard';
import { FooterLinks } from '../components/FooterLinks/FooterLinks';
import { useEffect } from "react";
import React from 'react';

export default function HomePage() {
  
  interface BadgeCardProps {
    id: string,
    image: string;
    title: string;
    country: string;
    description: string;
    url: string;
  }

  const [articles, setArticles] = React.useState<BadgeCardProps[]>([]);

  const headerMiddleProps = {
    "links": [
      { "link": "/", "label": "Home" }
    ]
  }

  useEffect(() => {
    callAPI();
  }, [])


  const callAPI = async () => {
  
		try {
      const badgeCardProps: BadgeCardProps[] = [];
			const res = await fetch(
				`https://dev.to/api/articles?username=devindependence`
			);
			const data = await res.json();

      data.forEach(function (value: any) {
        const item : BadgeCardProps = {
          "id" : value["id"],
          "image": value["cover_image"],
          "title": value["title"],
          "country": value["tags"],
          "description": value["description"],
          "url": value["url"],
        };
        badgeCardProps.push(item);
      })
      setArticles(badgeCardProps);
		} catch (err) {
			console.log(err);
		}
	};

  const items = articles.map((article) => (
    <Grid.Col xs={12} sm={4} key={article.id}><BadgeCard {...article} /></Grid.Col>
  ));

  return (
    <>
      <HeaderMiddle {...headerMiddleProps} />
        <Container size="md" px="md">
          <Grid>
            {items}
            </Grid>
      </Container>
    < FooterLinks />
    </>
  );
}
