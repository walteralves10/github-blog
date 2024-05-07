import { css } from 'styled-components'

export const defaultTheme = {
  blue: '#3294f8',
  'base-title': '#E7EDF4',
  'base-subtitle': '#C4D4E3',
  'base-text': '#AFC2D4',
  'base-span': '#7B96B2',
  'base-label': '#3A536B',
  'base-border': '#1C2F41',
  'base-post': '#112131',
  'base-profile': '#0B1B2B',
  'base-background': '#071422',
  'base-input': '#040F1A',

  titleL: css`
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: bold;
  `,
  titleM: css`
    font-size: 1.25rem;
    line-height: 160%;
    font-weight: bold;
  `,
  titleS: css`
    font-size: 1.125rem;
    line-height: 160%;
    font-weight: bold;
  `,

  textM: css`
    font-size: 1rem;
    line-height: 160%;
    font-weight: 400;
  `,
  textS: css`
    font-size: 0.875rem;
    line-height: 160%;
    font-weight: 400;
  `,

  link: css`
    font-size: 0.75rem;
    line-height: 160%;
    font-weight: bold;
  `,
}
