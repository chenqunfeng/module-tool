import * as assert from 'assert';
import { describe } from 'mocha';
import { add } from '../src/index';

describe('Add', function () {
  it('should return 2 when 1 plus 1', function () {
    assert.equal(2, add(1, 1));
  });
});
