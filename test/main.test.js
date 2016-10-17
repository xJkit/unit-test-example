// import {expect} from 'chai'
const {expect} = require('chai')

/****** Test suite ******/
//sanity check
describe('Mocha', () => {
  //--- test spec ---
  it('should run by npm succesfully', () => {
    expect(true).to.be.ok
  })
})


// Test practices

const add2number = (a,b) => a + b
const capitalName = (name) => {
  if (!name || typeof (name) != 'string'){
    return ''
  } else {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  }
}

describe('函數 add2number 基本功能測試：', () => {
  it('測試兩數字相加', () => {
    expect(add2number(3,4)).to.be.equal(7)
    expect(add2number(1,2)).to.be.a('number')
  })
})

describe('函數 capitalName 基本功能測試', () => {
  it('首位字母是否變成大寫', () => {
    expect(capitalName("joey")).to.be.equal("Joey")
  })
  it('亂給參數應該回傳空白字元', () => {
    // give a number
    expect(capitalName(1234)).to.be.equal('')
    //give a null
    expect(capitalName(null)).to.be.equal('')
    //give undefined
    expect(capitalName(undefined)).to.be.equal('')
    //give nothing
    expect(capitalName()).to.be.equal('')
  })

})
