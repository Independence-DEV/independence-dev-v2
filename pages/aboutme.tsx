import { Grid, Container, Title, createStyles } from '@mantine/core';
import { HeaderMiddle } from '../components/HeaderMiddle/HeaderMiddle';
import { ArticleCardImage } from '../components/ArticleCardImage/ArticleCardImage';
import { ArticleCard } from '../components/ArticleCard/ArticleCard';
import { HeroText } from '../components/HeroText/HeroText';
import { FooterLinks } from '../components/FooterLinks/FooterLinks';
import { BadgeCard2 } from '../components/BadgeCard2.tsx/BadgeCard2';
import { StatsCardTool } from '../components/StatsCard/StatsCardTool';
import { StatsCardCertificate } from '../components/StatsCard/StatsCardCertificate';
import { FeaturesTitle } from '../components/FeaturesTitle/FeaturesTitle';

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },
}))

export default function AboutmePage() {

  const { classes } = useStyles();
  const headerMiddleProps = {
    "links": [
      { "link": "/", "label": "Home" },
    ]
  }
  const BadgeCardProps = [{
    "image": "banners/minit_logo.png",
    "title": "Mint IT",
    "country": "apr-may 2022",
    "description": "This project was developed for the Alyra certification (2 months). Mint IT is a Decentralized Application allowing artists to create and manage their NFT collections without writing any code. View the GitHub",
    "badges": [
      { "emoji": "icons/react.png", "label": "React" },
      { "emoji": "icons/truffle.png", "label": "Truffle" },
      { "emoji": "icons/web3js.png", "label": "web3.js" },
      { "emoji": "icons/solidity.png", "label": "Solidity" },
      { "emoji": "icons/tailwindcss.png", "label": "tailwindcss" },
    ]
  },{
    "image": "banners/defiproject.png",
    "title": "DEFI Project",
    "country": "Feb-jun 2022",
    "description": "Protocol DEFI",
    "badges": [
      { "emoji": "icons/react.png", "label": "React" },
      { "emoji": "icons/hardhat.png", "label": "HardHat" },
      { "emoji": "icons/ethersjs.png", "label": "Ethers.js" },
      { "emoji": "icons/solidity.png", "label": "Solidity" },
      { "emoji": "icons/tailwindcss.png", "label": "tailwindcss" },
    ]
  },{
    "image": "banners/gestgym_logo.png",
    "title": "Gest'Gym",
    "country": "sep 2018 - jun 2022",
    "description": "Gest'Gym is a web application that allows gymnastics clubs to manage their members.",
    "badges": [
      { "emoji": "icons/joomla.png", "label": "Joomla" },
      { "emoji": "icons/php.png", "label": "PHP" },
      { "emoji": "icons/mysql.png", "label": "MySQL" },
      { "emoji": "icons/jquery.png", "label": "jQuery" },
    ]
  },{
    "image": "banners/asentinel.png",
    "title": "Software Engineer",
    "country": "sep 2017 - aug 2018",
    "description": "Engineering team of a TEM product (Telecom Expense Management), PHP development, ETL development with Talend Open Studio, Data reporting with SAP Business Objects and Crystal Reports",
    "badges": [
      { "emoji": "icons/sap.png", "label": "SAP Business Objects" },
      { "emoji": "icons/php.png", "label": "PHP" },
      { "emoji": "icons/zend.png", "label": "Zend" },
      { "emoji": "icons/talend.png", "label": "Talend Open Studio" },
      
    ]
  },{
    "image": "banners/orangetv.png",
    "title": "Front-end software engineer",
    "country": "feb 2016 - aug 2017",
    "description": "Interactive services development for Orange TV (Orange Music and Deezer),  STB Orange (set-top box), Java / GWT, JavaScript / AngularJS",
    "badges": [
      { "emoji": "icons/angular.png", "label": "AngularJS" },
      { "emoji": "icons/gwt.png", "label": "gwt" },
    ]
  },{
    "image": "banners/brestmetropole.png",
    "title": "Systems and networks engineer",
    "country": "sep 2012 - aug 2015",
    "description": "As an apprentice in the Infrastructure department and the Systems and Networks team, this experience allowed me to understand system concepts such as: Operating Systems, virtualization, SAN storage, clustering.",
    "badges": [
      { "emoji": "icons/vmware.png", "label": "vmware" },
      { "emoji": "icons/windows.png", "label": "windows server" },
      { "emoji": "icons/redhat.png", "label": "redhat" },
    ]
  },{
    "image": "banners/freelance.png",
    "title": "Web developper Freelance",
    "country": "aug 2021 - now",
    "description": "",
    "badges": [
      { "emoji": "icons/php.png", "label": "PHP" },
      { "emoji": "icons/mysql.png", "label": "MySQL" },
    ]
  },]
  return (
    <>
      <HeaderMiddle {...headerMiddleProps} />
      <Container size="md" px="md">
        <FeaturesTitle />
        <Title mt={10} className={classes.title} >Web3 Projects</Title>
        <Grid mt={10}>
          <Grid.Col xs={12} sm={6} ><BadgeCard2 {...BadgeCardProps[0]} /></Grid.Col>
          <Grid.Col xs={12} sm={6} ><BadgeCard2 {...BadgeCardProps[1]} /></Grid.Col>
        </Grid>
        <Title mt={10} className={classes.title} >Web2 Experiences</Title>
        <Grid mt={10}>
          <Grid.Col xs={12} sm={4} ><BadgeCard2 {...BadgeCardProps[6]} /></Grid.Col>
          <Grid.Col xs={12} sm={4} ><BadgeCard2 {...BadgeCardProps[2]} /></Grid.Col>
          <Grid.Col xs={12} sm={4} ><BadgeCard2 {...BadgeCardProps[3]} /></Grid.Col>
          <Grid.Col xs={12} sm={4} ><BadgeCard2 {...BadgeCardProps[4]} /></Grid.Col>
          <Grid.Col xs={12} sm={4} ><BadgeCard2 {...BadgeCardProps[5]} /></Grid.Col>
        </Grid>
    </Container>
    < FooterLinks />
    </>
  );
}
