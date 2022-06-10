import { Grid, Container } from '@mantine/core';
import { HeaderMiddle } from '../components/HeaderMiddle/HeaderMiddle';
import { ArticleCardImage } from '../components/ArticleCardImage/ArticleCardImage';
import { ArticleCard } from '../components/ArticleCard/ArticleCard';
import { BadgeCard } from '../components/BadgeCard/BadgeCard';
import { FooterLinks } from '../components/FooterLinks/FooterLinks';

export default function AboutmePage() {
  const headerMiddleProps = {
    "links": [
      { "link": "/", "label": "Home" },
      { "link": "/about-me", "label": "About me" }
    ]
  }
  const badgeCardProps = {
    "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "badges": [
      { "emoji": "☀️", "label": "Sunny weather" },
      { "emoji": "🦓", "label": "Onsite zoo" },
      { "emoji": "🌊", "label": "Sea" },
      { "emoji": "🌲", "label": "Nature" },
      { "emoji": "🤽", "label": "Water sports" }
    ]
  }
  const footerLinksProps = {
    "data": [
      {
        "title": "About",
        "links": [
          { "label": "Features", "link": "#" },
          { "label": "Pricing", "link": "#" },
          { "label": "Support", "link": "#" },
          { "label": "Forums", "link": "#" }
        ]
      },
      {
        "title": "Project",
        "links": [
          { "label": "Contribute", "link": "#" },
          { "label": "Media assets", "link": "#" },
          { "label": "Changelog", "link": "#" },
          { "label": "Releases", "link": "#" }
        ]
      },
      {
        "title": "Community",
        "links": [
          { "label": "Join Discord", "link": "#" },
          { "label": "Follow on Twitter", "link": "#" },
          { "label": "Email newsletter", "link": "#" },
          { "label": "GitHub discussions", "link": "#" }
        ]
      }
    ]
  }
  return (
    <>
      <HeaderMiddle {...headerMiddleProps} />
      <Container size="lg" px="lg">
      <Grid>
      <Grid.Col span={4}><BadgeCard {...badgeCardProps} /></Grid.Col>
      <Grid.Col span={4}><BadgeCard {...badgeCardProps} /></Grid.Col>
      <Grid.Col span={4}><BadgeCard {...badgeCardProps} /></Grid.Col>
      <Grid.Col span={4}><BadgeCard {...badgeCardProps} /></Grid.Col>
    </Grid>
    </Container>
    < FooterLinks {...footerLinksProps} />
    </>
  );
}
