import { configure } from '@storybook/react';

function loadStories() {
  require('../src/Bulma/stories');
}

configure(loadStories, module);
