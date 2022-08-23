/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.addConstraint('log', 'fk_log.servername_server.server_id', 'FOREIGN KEY(servername) REFERENCES server(server_id) ON DELETE CASCADE')
}

exports.down = pgm => {
    pgm.dropConstraint('log', 'fk_log.servername_server.server_id')
}
