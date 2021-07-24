const faker = require('faker');
const R = require('ramda');

const tableName = 'users';

exports.seed = function (knex) {
  return knex(tableName)
    .del()
    .then(function () {
      const ids = R.range(1, 5);
      const users = R.map((id) => {
        return {
          id,
          uuid: faker.datatype.uuid(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: faker.phone.phoneNumber(),
          street: faker.address.streetName(),
          city: faker.address.city(),
          country: faker.address.country(),
          bio: faker.lorem.paragraph(),
        };
      }, ids);
      return knex(tableName).insert(users);
    });
};
