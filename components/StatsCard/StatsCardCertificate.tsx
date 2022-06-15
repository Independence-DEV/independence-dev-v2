import React from 'react';
import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper, Image } from '@mantine/core';
import { Certificate } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
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

export function StatsCardCertificate() {
  const { classes } = useStyles();

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <Certificate size={34} />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        Certificates
      </Text>

      <Group position="apart" mt="md">
        <Image src="icons/alyra.png" height={80} width={80} />
        <Text size="sm">Blockchain & smart contracts developer</Text>
        <Text<'a'> className={classes.link} style={{display: "inline"}} component="a" href="https://alyra.fr/decouvrir-la-formation-developpeur-blockchain-alyra/" target='_blank'>More informations</Text>
      </Group>
      <Group position="apart" mt="md">
        <Image src="icons/imt.png" height={80} width={80} />
        <Text size="md">Engineer specialising in: Computer science, Networks and Telecommunications</Text>
        <Text<'a'> className={classes.link} style={{display: "inline"}} component="a" href="https://www.imt-atlantique.fr/en/study/apprenticeship-engineer/science-networks-telecommunications" target='_blank'>More informations</Text>
      </Group>
    </Paper>
  );
}