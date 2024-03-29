const interchange: Interchange = {
  atob: async (a: string) => await atob(a),
  btoa: async (a: string) => await btoa(a),
};

export default interchange;