exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'WebPT1'},
        {name: 'Web1'},
        {name: 'WebPT2'}
      ]);
    });
};