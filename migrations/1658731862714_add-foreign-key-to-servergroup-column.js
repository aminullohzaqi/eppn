/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.addConstraint('server', 'fk_server.servergroup_servergroup.group_id', 'FOREIGN KEY(servergroup) REFERENCES servergroup(group_id) ON DELETE CASCADE')
}

exports.down = pgm => {
    pgm.dropConstraint('log', 'fk_server.servergroup_servergroup.group_id')
}
