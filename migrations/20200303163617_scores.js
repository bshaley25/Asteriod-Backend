
exports.up = function(knex) {
    return knex.schema.createTable('scores', (score) => {
        score.increments('id')
        score.integer('score')
    })
};

exports.down = function(knex) {    
    return knex.schema.dropTable('scores');
};
