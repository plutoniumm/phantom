import CleanCSS from 'clean-css';

const interchange: Interchange = {
  atob: async (a: string) => new CleanCSS({
    format: 'beautify',
  }).minify(a).styles,
  btoa: async (a: string) => new CleanCSS().minify(a).styles,
};