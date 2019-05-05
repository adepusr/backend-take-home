import assert from 'assert';
import { contains } from '../../util';

describe('util', function () {
  describe('contains', function(){
    var p1 = { name: 'p1', sku: 'sku1' };
    var p2 = { name: 'p1', sku: 'sku2' };
    
    it('should return true if contains matched atribute', function(){
      var isPresent = contains([p1, p2], 'sku', 'sku1');
      assert.equal(isPresent, true);
    });
    it('should return false if not contains matched atribute', function(){
      var isPresent = contains([p1, p2], 'sku', 'sku3');
      assert.equal(isPresent, false);
    });

  });
});