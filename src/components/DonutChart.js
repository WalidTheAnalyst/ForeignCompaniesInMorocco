import React from 'react';
import { origins } from '../data';

export default function DonutChart() {
  const total = origins.reduce((s, o) => s + o.value, 0);
  const cx = 70, cy = 70, r = 52, stroke = 20;
  const circ = 2 * Math.PI * r;

  let offset = 0;
  const slices = origins.map(o => {
    const pct  = o.value / total;
    const dash = pct * circ;
    const gap  = circ - dash;
    const sl   = { ...o, dash, gap, offset };
    offset += pct;
    return sl;
  });

  return (
    <div className="donut-wrap">
      <svg className="donut-svg" width="140" height="140" viewBox="0 0 140 140">
        {/* background ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1e2438" strokeWidth={stroke} />

        {slices.map((s, i) => (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={`${s.dash} ${s.gap}`}
            strokeDashoffset={-s.offset * circ}
          />
        ))}

        {/* center labels — rotated back to normal reading */}
        <text
          x={cx} y={cy - 6}
          textAnchor="middle"
          fill="#f0ece2"
          fontFamily="Cormorant Garamond, serif"
          fontSize="22"
          fontWeight="600"
          transform={`rotate(90 ${cx} ${cy})`}
        >{total}</text>
        <text
          x={cx} y={cy + 12}
          textAnchor="middle"
          fill="#5c5748"
          fontFamily="DM Mono, monospace"
          fontSize="7"
          transform={`rotate(90 ${cx} ${cy})`}
        >FIRMS</text>
      </svg>

      <div className="donut-legend">
        {origins.map((o, i) => (
          <div className="legend-row" key={i}>
            <span className="legend-dot" style={{ background: o.color }} />
            {o.label}
            <span className="legend-val">{o.value} &nbsp;({Math.round(o.value / total * 100)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
