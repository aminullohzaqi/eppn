/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.sql('ALTER TABLE server RENAME COLUMN "group" TO "servergroup"')
}

exports.down = pgm => {
    pgm.sql('ALTER TABLE server RENAME COLUMN "servergroup" TO "group"')
}
