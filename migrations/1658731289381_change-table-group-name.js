/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.sql('ALTER TABLE "group" RENAME to "servergroup"')
}

exports.down = pgm => {
    pgm.sql('ALTER TABLE "servergroup" RENAME to "group"')
}
