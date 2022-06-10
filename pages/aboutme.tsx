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
    </Container>
    < FooterLinks {...footerLinksProps} />
    </>
  );
}
