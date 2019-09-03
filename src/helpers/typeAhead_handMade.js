const typeAheadMatches = (wordToFind) => {
    const usersAll = [
        "ESL_SC2",
        "cretetion",
        "freecodecamp",
        "storbeck",
        "habathcx",
        "OgamingSC2",
        "RobotCaleb",
        "noobs2ninjas",
        "Orange_HS",
        "Rainbow6",
        "Ninja",
        "MOONMOON_OW"
      ];

      const regex = new RegExp(wordToFind, 'gi');
      const matches = usersAll.filter(user => user.match(regex));

 return matches;
}

export default typeAheadMatches;