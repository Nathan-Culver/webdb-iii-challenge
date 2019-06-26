exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Harry', cohort_id: 1},
        {name: 'Ron', cohort_id: 2},
        {name: 'Hermine', cohort_id: 3}
      ]);
    });
};