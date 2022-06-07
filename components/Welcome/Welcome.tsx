import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Independence DEV
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This website is under construction and will be released soon. You can follow me on{' '}
        <Anchor href="https://www.youtube.com/c/IndependenceDEV" size="lg">
          my YouTube channel
        </Anchor>
        . Stay tuned!
      </Text>
    </>
  );
}
