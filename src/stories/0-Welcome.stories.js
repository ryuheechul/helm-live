import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Box, Link } from '@chakra-ui/core'

const Welcome = ({showApp}) => (
  <>
    <Box>
      This is a custom welcome message using Chakra UI
    </Box>
    <Link onClick={showApp} color="teal.500">
      Let's go to see the button
    </Link>
  </>
)

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
