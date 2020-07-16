
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name").unique().notNullable()
      tbl.string("instructions") 
  })
  .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").unique().notNullable()
  })
  .createTable("recipe_ingredients", tbl => {
      tbl.increments(); 
      tbl.integer("recipe_id").unsigned().notNullable().references("recipes.id")
      tbl.integer("ingredient_id").unsigned().notNullable().references("ingredients.id")
      tbl.integer("quantity").notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")

};
