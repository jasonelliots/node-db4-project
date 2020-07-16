
exports.up = function(knex) {
    return knex.schema
    .createTable("recipe_steps", tbl => {
        tbl.increments();
        tbl.integer("recipe_id").unsigned().notNullable().references("recipes.id")
        tbl.string('description')
      })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
};
