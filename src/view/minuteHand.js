/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const { computeXY, min2deg, perc } = require('../util');
const { color } = require('../settings');
const motor = require('../motor');

function view(vnode) {
  const { cx, cy, r, filter } = vnode.attrs;
  const rotation = min2deg(motor.getMinute());
  const start = computeXY(cx, cy, perc(r, -20), rotation);
  const end = computeXY(cx, cy, perc(r, 88), rotation);
  return m('line', { x1: start.x, y1: start.y, x2: end.x, y2: end.y, filter, style: { stroke: color.minute, 'stroke-width': r / 16 } });
}

module.exports = { view };
