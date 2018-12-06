const buildWithdrawBalance = require('../src/utils/transactionBuilder')
  .buildWithdrawBalance;
const buildUnfreezeBalance = require('../src/utils/transactionBuilder')
  .buildUnfreezeBalance;
const buildFreezeBalance = require('../src/utils/transactionBuilder')
  .buildFreezeBalance;
const byteArray2hexStr = require('../src/utils/bytes').byteArray2hexStr;
const buildVote = require('../src/utils/transactionBuilder').buildVote;
const assert = require('assert');

const toRawHex = tx => byteArray2hexStr(tx.getRawData().serializeBinary());

describe('transactionBuilder', () => {
  it('build voteContract', async () => {
    const tx = buildVote('TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx', {
      TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx: 100,
    });
    assert.strict.equal(
      toRawHex(tx),
      '5A6A080412660A30747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E566F74655769746E657373436F6E747261637412320A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E0012190A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E001064',
    );
  });

  it('build freeze (bandwidth default)', async () => {
    const tx = buildFreezeBalance(
      'TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx',
      100000000,
      3,
    );
    assert.strict.equal(
      toRawHex(tx),
      '5A58080B12540A32747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E467265657A6542616C616E6365436F6E7472616374121E0A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E001080C2D72F1803',
    );
  });

  it('build freeze (bandwidth explicit)', async () => {
    const tx = buildFreezeBalance(
      'TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx',
      100000000,
      3,
      'BANDWIDTH',
    );
    assert.strict.equal(
      toRawHex(tx),
      '5A58080B12540A32747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E467265657A6542616C616E6365436F6E7472616374121E0A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E001080C2D72F1803',
    );
  });

  it('build freeze (energy explicit)', async () => {
    const tx = buildFreezeBalance(
      'TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx',
      100000000,
      3,
      'ENERGY',
    );
    assert.strict.equal(
      toRawHex(tx),
      '5A5A080B12560A32747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E467265657A6542616C616E6365436F6E747261637412200A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E001080C2D72F18035001',
    );
  });

  it('build unfreeze (bandwidth default)', async () => {
    const tx = buildUnfreezeBalance('TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx');
    assert.strict.equal(
      toRawHex(tx),
      '5A53080C124F0A34747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E556E667265657A6542616C616E6365436F6E747261637412170A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E00',
    );
  });

  it('build unfreeze (bandwidth explicit)', async () => {
    const tx = buildUnfreezeBalance(
      'TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx',
      'BANDWIDTH',
    );
    assert.strict.equal(
      toRawHex(tx),
      '5A53080C124F0A34747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E556E667265657A6542616C616E6365436F6E747261637412170A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E00',
    );
  });

  it('build unfreeze (energy explicit)', async () => {
    const tx = buildUnfreezeBalance(
      'TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx',
      'ENERGY',
    );
    assert.strict.equal(
      toRawHex(tx),
      '5A55080C12510A34747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E556E667265657A6542616C616E6365436F6E747261637412190A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E005001',
    );
  });

  it('build withdraw', async () => {
    const tx = buildWithdrawBalance('TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx');
    assert.strict.equal(
      toRawHex(tx),
      '5A53080D124F0A34747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E576974686472617742616C616E6365436F6E747261637412170A154169D78AAC0544126C5199CFF1E1BDC94B15FE9E00',
    );
  });
});
