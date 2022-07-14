import React from 'react';
import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
    },

    title: {
      fontWeight: 400,
      marginBottom: theme.spacing.xl * 1.5,
    },

    control: {
      ref: control,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },

    itemOpened: {
      [`& .${control}`]: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },
    },
  };
});

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        <Accordion.Item label="How to contact me ?">You can contact me by mail contact@independence-dev.com or on twitter @geof_dev</Accordion.Item>
        <Accordion.Item label="What is my price ?">Let's talk about that in private :)</Accordion.Item>
      </Accordion>
    </Container>
  );
}
