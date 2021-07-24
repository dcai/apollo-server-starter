exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('uuid').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('avatar').notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('phone');
    table.string('street');
    table.string('city');
    table.string('country');
    table.text('bio');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
