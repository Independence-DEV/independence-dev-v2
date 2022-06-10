import React from 'react';
import { BrandYoutube } from 'tabler-icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import internal from 'stream';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  id: string,
  image: string;
  title: string;
  country: string;
  description: string;
  url: string;
}

export function BadgeCard({ id, image, title, description, country, url }: BadgeCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={140} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{country}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button component="a" href={url} target="_blank" radius="md" style={{ flex: 1 }}>
          Read this post
        </Button>
        <ActionIcon variant="default" radius="md" size={36} disabled>
          <BrandYoutube size={18} className={classes.like} />
        </ActionIcon>
      </Group>
    </Card>
  );
}