players = [4, 7, 9], trainers = [8, 2, 5, 8]

var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => (a - b));
    trainers.sort((a, b) => (a - b));
    let i = 0, j = 0, counter = 0;

    while (i < players.length && j < trainers.length){
        if(players[i] <= trainers[j]){
            ++counter;
            ++i;
        }
        ++j
    }
    return counter;
};

console.log(matchPlayersAndTrainers(players,trainers))