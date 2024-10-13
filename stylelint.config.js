/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-recommended-scss',
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['text-stroke'],
      },
    ],
  },
};
