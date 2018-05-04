import { configure } from '@storybook/react';
import '../../src/theme/index.css';

const req = require.context('../../src/app/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
