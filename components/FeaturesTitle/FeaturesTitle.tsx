import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
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
}));

const features = [
  {
    icon: Stack3,
    title: 'Full Stack',
    description: 'Thanks to my different experiences, I have a complete understanding of how applications are built. I am therefore able to build full-stack applications.',
  },
  {
    icon: Certificate,
    title: 'Certified',
    description:
      'Blockchain & smart contracts developer from Alyra',
  },
  {
    icon: FileCode,
    title: 'Adaptive ',
    description: 'blablabla',
  },
  {
    icon: MapPinOff,
    title: 'Remote',
    description:
      'I am based in Estonia but I have a setup that allows me to work for anyone around the world.',
  }
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'violet', to: 'violet' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Your next Web3 developer!
          </Title>
          <Text color="dimmed">
            Hi,
          </Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}