const precss = require('precss');
const cssnext = require('postcss-cssnext');
const postcssFlexBugFixes = require('postcss-flexbugs-fixes');

const reactToolboxVars = {
  'color-green': 'rgb(80,184,72)',
  'color-primary': 'rgb(20,78,140)',
  'color-primary-dark': 'rgb(7,30,54)',
  'color-accent': 'var(--color-green)',
  'color-accent-dark': 'rgb(42,97,32)',
  'color-red': 'rgb(182,72,72)',
  'color-blue': 'var(--color-primary)',
  'color-yellow': '#FFC400',
  unit: '1rem'
};

module.exports = () => [
  postcssFlexBugFixes,
  cssnext({
    browsers: 'last 2 versions, not ie <= 8',
    features: {
      customProperties: {
        variables: reactToolboxVars
      }
    }
  }),
  precss
];
