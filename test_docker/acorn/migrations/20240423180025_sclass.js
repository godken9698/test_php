/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('sclass', function(table) {
  		table.increments('sclassID').primary().comment('The league or cup ID');
  		table.string('color',7).comment('Used for page league display only, can be ignored RGB color code string, e.g. #9933FF');
  		table.specificType('name_E','NCHAR(50)').comment('English full name, e.g. German Bundesliga');
  		table.specificType('name_ES','NCHAR(30)').comment('English short name, e.g. GER D1');
  		table.string('name_S',5).comment('English short name, e.g. B1');
  		table.smallint('kind').comment('1: League 2: Cup');
  		table.smallint('mode').comment('How to play:1: Round 2: Group');
  		table.smallint('count_round').comment('Number of rounds');
  		table.smallint('curr_round').comment('The current round');
  		table.string('curr_matchSeason',10).comment('Current season, e.g. 2019-2020, 2020');
  		table.string('sclass_pic',50).comment('URL of league logo Stitching method：http://zq.win007.com/Image/{parameter url}?win007=sell');
  		table.tinyint('ifstop').comment('Is it the close season? 1: False 2: True');
  		table.tinyint('sclass_type').comment('Please ignore it');
  		table.smallint('count_group').comment('Number of groups');
  		table.tinyint('bf_simply_disp').comment('Is the league important? For reference only, it can be ignored 1: True 0: False');
  		table.smallint('sclass_sequence').comment('Order in leagues. For reference only, it can be ignored');
  		table.smallint('infoID').comment('InfoID in the table 6. SclassInfo');
  		table.tinyint('bf_IfDisp').comment('Deprecated. Please ignore it');
  		table.datetime('modifyTime').comment('');
  		table.string('beginSeason',9).comment('The first season in history');
  		table.integer('subSclassID').comment('ID in the table 29. subsclass');
  		table.bit('ifHaveSub').comment('Does the league have subleagues? 1: True 0: False');
  		table.bit('ifSort').comment('Please ignore it');
  		table.bit('ifHavePaper').comment('Please ignore it');
  		table.bit('ifShowScore').comment('Please ignore it');
  		table.string('rank_matchSeason',10).comment('Please ignore it');

  	});
};

/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  	return knex.schema.dropTable('sclass');
};
