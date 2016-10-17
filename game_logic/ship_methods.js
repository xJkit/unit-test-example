function checkForShip(player, coord) {
  if (coord == player.ships[0].loc){
    console.log('coord:', coord)
    console.log('player.ships[0].loc:', player.ships[0].loc)
    return true
  } else {
    return false
  }
}

module.exports.checkForShip = checkForShip;
