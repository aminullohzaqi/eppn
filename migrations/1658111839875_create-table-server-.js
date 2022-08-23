/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.createTable('server', {
        server_id: {
            type: 'VARCHAR(50)',
            primaryKey: true
        },
        hostname: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        displayname: {
            type: 'VARCHAR(100)',
            notNull: true
        },
        group: {
            type: 'INTEGER',
            notNull: true
        },
        agentstatus: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        agentmessage: {
            type: 'TEXT',
            notNull: true
        },
        admin: {
            type: 'INTEGER',
            notNull: true
        },
        statusupdate: {
            type: 'VARCHAR(100)',
            notNull: true
        }
    })
}

exports.down = pgm => {
    pgm.dropTable('server')
}
