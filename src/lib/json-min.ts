const jeson: Interchange = {
  atob: async (a: string) => JSON.stringify(JSON.parse(a), null, 2),
  btoa: async (a: string) => JSON.stringify(JSON.parse(a))
};

export default jeson;