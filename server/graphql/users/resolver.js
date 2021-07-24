module.exports = {
  Query: {
    users: async (parent, args, context) => {
      const { db } = context;
      const users = await db.select('*').from('users');
      return users;
    },
  },
};
