export default {
  Query: {
    hello: (_: any, {name}: {name: string}) => {
      if (name) return `hello ${name}`;

      return 'hello world!!';
    }
  }
};
