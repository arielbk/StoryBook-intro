import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import Button from '../components/Button.styled';
import Counter from '../components/Counter';
import Box from '../components/Box';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('primary', () => <Button primary onClick={action('clicked')}>Primary Button</Button>);

storiesOf('The Web', module)
  .add('Box', () => <Box title="normal box">This is a box is a box is a box</Box>)
  .add('Stretch box', () => <Box title="stretch box" stretch>This is a box is a box is a box with a stretch</Box>)
  .add('Box with attitude', () => <Box title="special box" withAttitude>This is a box is a box with some other stuff</Box>)
  .add('Counter', () => <Counter />)

