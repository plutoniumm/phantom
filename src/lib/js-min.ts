import estree from "prettier/plugins/estree";
import babel from "prettier/plugins/babel";
import { format } from 'prettier/standalone';
import { minify } from "terser";

const interchange: Interchange = {
  atob: async (a: string) => format(a, {
    parser: "babel", plugins: [babel, estree]
  }),
  // TODO: add error if minify fails
  btoa: async (a: string) => minify(a).then((res) => res?.code || a),
};

export default interchange;