import Fuse from 'fuse.js'

export function search (options: any, query: string) {
  if (!query) return [];
  const fuse = new Fuse(options, {
    keys: ['id']
  })

  return fuse.search(query);
};

export const options = Object.freeze([
  { id: "", name: ["", ""] },
  { id: "base64", name: ["Base64", "String"] },
  { id: "json-min", name: ["JSON Minified", "JSON Formatted"] },
  { id: "js-min", name: ["JS Minified", "JS Formatted"] },
  { id: "css-min", name: ["CSS Minified", "CSS Formatted"] },
]);