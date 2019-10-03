/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {

    let totalHours = (knowsProgramming == true) ? 800 : 1300;
    let weeks = 0;


    if (focus == "family") weeks = totalHours / config.family;

    if (focus == "friends") weeks = totalHours / config.friends;

    if (focus == "normal_life") weeks = totalHours / config.normal_life;

    if (focus == "profession") weeks = totalHours / config.profession;

    if (focus == "carrier") weeks = totalHours / config.carrier;

    if (focus == "top_peformance") weeks = totalHours / config.top_peformance;

    return Math.ceil(weeks);
};