// const {expect} = require('chai')
//
// describe('checkForShip', () => {
//   const checkForShip = require('../game_logic/ship_methods').checkForShip
//
//   player = {
//     ships: [
//       {
//         loc: [0,0]
//       }
//     ]
//   }
//   console.log('player.ships[0].loc: ', player.ships[0].loc)
//   it('是否正確回報「沒有船」... 當你給的座標沒有打到。', () => {
//     expect( checkForShip(player, [9,9]) ).to.be.false
//     expect( checkForShip(player, [9,8]) ).to.be.false
//   })
//
//   it('是否正確回報「擊中！」 ... 當你的座標猜中目標位置', () => {
//     expect( checkForShip(player, [0,0]) ).to.be.true
//   })
// })
