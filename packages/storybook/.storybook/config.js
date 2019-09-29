import {addParameters, configure} from '@storybook/react';
import {themes} from '@storybook/theming';

addParameters({
  options: {
    theme: themes.light,
  }
});

const comps = require.context('crale-components/src', true, /.stories.jsx$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
