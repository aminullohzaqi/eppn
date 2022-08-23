/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.createTable('log', {
        log_id: {
            type: 'VARCHAR(50)',
            primaryKey: true
        },
        servername: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        agentstatus: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        agentmessage: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        timestamp: {
            type: 'VARCHAR(100)'
        }
    })
}

exports.down = pgm => {
    pgm.dropTable('log')
}
