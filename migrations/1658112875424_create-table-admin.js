/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.createTable('admin', {
        admin_id: {
            type: 'INTEGER',
            primaryKey: true
        },
        adminname: {
            type: 'VARCHAR(100)',
            notNull: true
        },
        email: {
            type: 'VARCHAR(100)',
            notNull: true
        },
        whatsapp: {
            type: 'VARCHAR(50)',
            notNull: true
        }
    })
}

exports.down = pgm => {
    pgm.dropTable('admin')
}
