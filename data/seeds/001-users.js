exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
    .then(async function () {
      await knex('users').insert([
        { id: 1, username: 'briana', password: 'lambda1' },
        { id: 2, username: 'martin', password: '23569lambda' },
        { id: 3, username: 'eddie', password: 'howdylambda55' }
      ]);
    });
};
