/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  	return knex.schema.createTable('schedule', function(table) {
	    table.increments('scheduleID').primary().comment('The match ID');
	    table.integer('sclassID').comment('The league or cup ID');
	    table.string('matchSeason',10).comment('Season, e.g. 2019-2020, 2020');
	    table.smallint('round').comment('League round or cup stage, e.g. 10');
	    table.string('grouping',10).comment('Cup group, e.g. A');
	    table.integer('homeTeamID').comment('');
	    table.integer('guestTeamID').comment('');
	    table.bit('neutrality').comment('Is it a neutral venue?');
	    table.datetime('matchTime').comment('Start time of the match');
	    table.datetime('matchTime2').comment('Start time of the second half');
	    table.smallint('matchState').comment('Match status: 0: Not started -1: Finished');
	    table.smallint('weatherIcon').comment('1: sunny 2: Roughly sunny 3: with clouds 4: Cloudy 5: light rain 6: Heavy rain 7: Snow 8: Thunderstorm 9: Regional thunderstorms 10: Foggy 11: Light rain 12: Cloudy 13: Thunderstorm');
	    table.string('temperature',10).comment('e.g. 14℃～15℃');
	    table.string('tv',100).comment('Please ignore it');
	    table.string('umpire',50).comment('Please ignore it');
	    table.integer('visitor').comment('Is there lineup data for the match?1: true');
	    table.smallint('homeScore').comment('');
	    table.smallint('guestScore').comment('');
	    table.smallint('homeHalfScore').comment('Home score of the first half');
	    table.smallint('guestHalfScore').comment('Guest score of the first half');
	    table.smallint('home_Red').comment('');
	    table.smallint('guest_Red').comment('');
	    table.smallint('home_Yellow').comment('');
	    table.smallint('guest_Yellow').comment('');
	    table.datetime('bf_changetime').comment('Please ignore it');
	    table.tinyint('shangpan').comment('Please ignore it');
	    table.string('grouping2',1).comment('Group Name, e.g. A');
	    table.string('explain_en',255).comment('Special case description of the match, e.g. Match end up with [0-3], due to (Torpedo-MAZ Minsk) withdraw from the match');
	    table.bit('bfShow').comment('Please ignore it');
	    table.integer('subSclassId').comment('ID in the table 29. subsclass');
	    table.specificType('explainlist', 'NVARCHAR(100)').comment('Return to Extra time, Penalty kicks, etc. e.g. ; | 2; | 4; 3 | 90,2-1; 3-3; 1,2-1; 1-3; 2 The meaning is as follows: [2;] Which team kicks off first 1: Home team 2: Away team [4; 3] corners Home team corners; away team corners [90,2-1] regular time score Regular time (minutes), home team score-away team score [3-3] Two round score Home team score-away team score [1,2-1] Extra time score 1: Extra time status - 1: 120 minutes (the regular match extra time ends); - 2: Extra time (indoor / beach football extra time ends); - 3: The match is extratime. 2-1: Home team score-away team score (ordinary games include regular time, beach foot, indoor foot, etc. do not include regular time.) [1-3] Penalty shootout score Home team score-away team score [2] The winner 1: Home team 2: Away team.');
	    table.specificType('home_OrderEn', 'NVARCHAR(15)').comment('The ranking of the team in the league, home team');
	    table.specificType('guest_OrderEn', 'NVARCHAR(15)').comment('The ranking of the team in the league, away team');
	    table.integer('venuesID').comment('Please ignore it');
	    table.bit('isGuessRed').comment('Please ignore it');
	    table.bit('isLive').comment('Please ignore it');
	    table.tinyint('homeCorner').comment('');
	    table.tinyint('homeCornerHalf').comment('Home corner in the first half');
	    table.tinyint('guestCorner').comment('');
	    table.tinyint('guestCornerHalf').comment('Guest corner in the first half');
  	});
};

/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  	return knex.schema.dropTable('schedule');
};
