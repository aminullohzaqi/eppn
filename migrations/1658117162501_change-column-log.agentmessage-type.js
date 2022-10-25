/* eslint-disable indent */
/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
    pgm.sql('ALTER TABLE log ALTER COLUMN agentmessage TYPE TEXT')
}

exports.down = pgm => {
    pgm.sql('ALTER TABLE log ALTER COLUMN agentmessage TYPE VARCHAR(50)')
}
