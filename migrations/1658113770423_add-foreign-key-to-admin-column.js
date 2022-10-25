/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.addConstraint('server', 'fk_server.admin_admin.admin_id', 'FOREIGN KEY(admin) REFERENCES admin(admin_id) ON DELETE CASCADE')
}

exports.down = pgm => {
    pgm.dropConstraint('server', 'fk_server.admin_admin.admin_id')
}
