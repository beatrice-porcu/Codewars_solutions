/**Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!' */

function boredom(staff) {
  let cumulativeScore = 0;
  Object.values(staff).forEach((v) => {
    switch (v) {
      case "accounts":
        cumulativeScore += 1;
        break;
      case "finance":
        cumulativeScore += 2;
        break;
      case "canteen":
        cumulativeScore += 10;
        break;
      case "regulation":
        cumulativeScore += 3;
        break;
      case "trading":
        cumulativeScore += 6;
        break;
      case "change":
        cumulativeScore += 6;
        break;
      case "IS":
        cumulativeScore += 8;
        break;
      case "retail":
        cumulativeScore += 5;
        break;
      case "cleaning":
        cumulativeScore += 4;
        break;
      case "pissing about":
        cumulativeScore += 25;
        break;
      default:
        cumulativeScore += 0;
        break;
    }
  });
  return cumulativeScore <= 80
    ? "kill me now"
    : cumulativeScore < 100
    ? "i can handle this"
    : "party time!!";
}
