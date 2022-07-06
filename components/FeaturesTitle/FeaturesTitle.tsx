import React from 'react';
import {createStyles, Title, SimpleGrid, Text, ThemeIcon, Grid, Col, Anchor} from '@mantine/core';
import { Certificate, MapPinOff, Stack3, FileCode } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export function FeaturesTitle() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Your next Web3 developer!
          </Title>
          <Text color="dimmed">During the summer of 2021, I discovered decentralized finance. Since then, I have been training in Web3 by writing smart contracts, and doing a DEFI project with a dApp. I am ready to work with a team/company that has a long term vision and that proposes stimulating projects. You can see the languages/technologies I am comfortable with from my past experiences.</Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          <div key="Full Stack">
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'violet', to: 'violet' }}
      >
        <Stack3 size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        Full Stack
      </Text>
      <Text color="dimmed" size="sm">Thanks to my different experiences, I have a complete understanding of how applications are built. I am therefore able to build full-stack applications.</Text>
          </div>
    <div key="Certified">
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'violet', to: 'violet' }}
      >
        <Certificate size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        Certified
      </Text>
      <Text color="dimmed" size="sm">
      Blockchain & smart contracts developer from <Anchor href="https://alyra.fr/decouvrir-la-formation-developpeur-blockchain-alyra/" target="_blank">Alyra</Anchor>.
      <br />
      Engineer specialising in: Computer science, Networks and Telecommunications from <Anchor href="https://www.imt-atlantique.fr/en/study/apprenticeship-engineer/science-networks-telecommunications" target="_blank">IMT Atlantique</Anchor>.
      </Text>
    </div>
    <div key="Adaptive">
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'violet', to: 'violet' }}
      >
        <FileCode size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
      Adaptive
      </Text>
      <Text color="dimmed" size="sm">
      I can quickly adapt to a new work environment and new technologies.
      </Text>
    </div>
    <div key="Remote">
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'violet', to: 'violet' }}
      >
        <MapPinOff size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
      Remote
      </Text>
      <Text color="dimmed" size="sm">
      I am based in Estonia but I have a setup that allows me to work for anyone around the world.
      </Text>
    </div>
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
