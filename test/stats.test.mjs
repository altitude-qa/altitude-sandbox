import { test } from 'node:test';
import assert from 'node:assert/strict';
import { p95, mean } from '../src/stats.mjs';

test('p95 of one to a hundred is 95', () => {
  const xs = Array.from({ length: 100 }, (_, i) => i + 1);
  assert.equal(p95(xs), 95);
});
test('mean of one to nine is five', () => {
  assert.equal(mean([1,2,3,4,5,6,7,8,9]), 5);
});
test('p95 of an empty list is zero', () => {
  assert.equal(p95([]), 0);
});
