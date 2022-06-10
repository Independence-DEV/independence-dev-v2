import React, { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, useMantineColorScheme } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { BrandTwitter, BrandYoutube, BrandGithub } from 'tabler-icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { IndependenceDEVLogo } from '../../shared/IndependenceDEVLogo';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} mb={30}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

       <IndependenceDEVLogo />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon<'a'> component="a" size="lg" target='_blank' href="https://twitter.com/DevIndependence" color="blue">
            <BrandTwitter size={20} />
          </ActionIcon>
          <ActionIcon<'a'> component="a" size="lg" target='_blank' href="https://www.youtube.com/c/IndependenceDEV" variant="hover" color="red">
            <BrandYoutube size={20} />
          </ActionIcon>
          <ActionIcon<'a'> component="a" size="lg" target='_blank' href="https://github.com/Independence-DEV" variant="hover" color="gray">
            <BrandGithub size={20} />
          </ActionIcon>
          <ActionIcon
              onClick={() => toggleColorScheme()}
              size="xs"
              ml="md"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
              })}
            >
              {colorScheme === 'dark' ? (
                <SunIcon width={20} height={20} />
              ) : (
                <MoonIcon color="gray" width={20} height={20} />
              )}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}