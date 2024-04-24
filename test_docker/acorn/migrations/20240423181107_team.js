/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  	return knex.schema.createTable('team', function(table) {
  		table.increments('teamID').primary().comment('');
  		table.smallint('kind').comment('Deprecated. Please ignore it');
  		table.smallint('sClassID').comment('The league or cup ID');
  		table.specificType('name_E','NCHAR(50)').comment('English name');
  		table.string('found_date',20).comment('e.g. 1984 or 1890-9-6');
  		table.integer('capacity').comment('e.g. 99354');
  		table.string('flag',50).comment('URL of team logo Stitching method：http://zq.win007.com/Image/team/{parameter url}?win007=sell');
  		table.string('address',150).comment('e.g. Avda. Aristides Maillol s/n，ES-08028 BARCELONA');
  		table.string('url',80).comment('Official website');
  		table.string('guestPoloShirt',50).comment('Please ignore it');
  		table.string('homePoloShirt',50).comment('Please ignore it');
  		table.datetime('modifyTime').comment('');
  		table.specificType('introduceEn','VARCHAR(255)').comment('Introduction to the team');
  		table.specificType('areaEn','VARCHAR(30)').comment('e.g. Barcelona');
  		table.integer('venuesID').comment('Please ignore it');
  		table.tinyint('conference').comment('Division of the team in their league 0: No conference 1: east 2: west');
  		table.bit('isNational').comment('Is it a national team?');


  	});
};

/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('team');
};
