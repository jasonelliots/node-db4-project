
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "gumbo", instructions: "1 mix ferociously" },
        {name: "pizza", instructions: "1 make dough 2 add cheese" },
      ]);
    });
};
