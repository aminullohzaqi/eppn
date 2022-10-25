/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.createTable('group', {
        group_id: {
            type: 'INTEGER',
            primaryKey: true
        },
        groupname: {
            type: 'VARCHAR(100)',
            notNull: true
        }
    })
}

exports.down = pgm => {
    pgm.dropTable('group')
}
