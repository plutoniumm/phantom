import Ug from 'uglify-js';

const html: Interchange = {
  atob: async (a: string) => a,
  btoa: async (a: string) => Ug.minify(a)
};

export default html;