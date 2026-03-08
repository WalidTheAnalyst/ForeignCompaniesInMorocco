import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import DonutChart from './DonutChart';
import { companies, regions, sectors, timelineItems, alerts } from '../data';

/* ── helpers ── */
function boldify(text, bold) {
  if (!bold) return text;
  const parts = text.split(bold);
  return parts.map((p, i) =>
    i < parts.length - 1
      ? <React.Fragment key={i}>{p}<strong>{bold}</strong></React.Fragment>
      : p
  );
}

export default function Dashboard() {
  const [search, setSearch]       = useState('');
  const [statusFilter, setStatus] = useState('all');
  const [barWidths, setBarWidths] = useState({});

  // Animate region bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const w = {};
      regions.forEach(r => { w[r.name] = r.pct + '%'; });
      setBarWidths(w);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  const filtered = companies.filter(c => {
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.sector.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q) ||
      c.origin.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const chips = [
    { label:'All',          val:'all' },
    { label:'Confirmed',    val:'confirmed' },
    { label:'Planned',      val:'planned' },
    { label:'Rumored',      val:'rumored' },
  ];

  return (
    <div className="shell">

      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">
            <div className="logo-icon">🇲🇦</div>
            <span className="logo-name">InvestWatch</span>
          </div>
          <div className="logo-sub">Morocco Entry Radar</div>
        </div>

        <div className="nav-section">
          <div className="nav-label">Intelligence</div>
          <a className="nav-item active" href="#dashboard">
            <span className="icon">◉</span> Dashboard
          </a>
          <a className="nav-item" href="#tracker">
            <span className="icon">🏢</span> Company Tracker
            <span className="nav-badge">47</span>
          </a>
          <a className="nav-item" href="#signals">
            <span className="icon">📡</span> Live Signals
            <span className="nav-badge">3</span>
          </a>
          <a className="nav-item" href="#map">
            <span className="icon">🗺</span> Region Map
          </a>
        </div>

        <div className="nav-section">
          <div className="nav-label">Analysis</div>
          <a className="nav-item" href="#sectors">
            <span className="icon">📊</span> Sector Deep Dive
          </a>
          <a className="nav-item" href="#timeline">
            <span className="icon">📅</span> Entry Timeline
          </a>
          <a className="nav-item" href="#origins">
            <span className="icon">🌐</span> Country Origins
          </a>
          <a className="nav-item" href="#volume">
            <span className="icon">💰</span> Investment Volume
          </a>
        </div>

        <div className="nav-section">
          <div className="nav-label">Tools</div>
          <a className="nav-item" href="#alerts">
            <span className="icon">🔔</span> Alert Rules
          </a>
          <a className="nav-item" href="#reports">
            <span className="icon">📋</span> Reports
          </a>
          <a className="nav-item" href="#settings">
            <span className="icon">⚙️</span> Settings
          </a>
        </div>

        <div className="sidebar-footer">
          <span className="status-dot" />
          Live data sync active<br />
          <span style={{ marginTop: 4, display: 'block' }}>Last update: 08 Mar 2026</span>
        </div>
      </aside>

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <div className="topbar-title">Foreign Entry <span>Radar</span></div>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search company, sector, region…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {chips.map(c => (
          <button
            key={c.val}
            className={`chip${statusFilter === c.val ? ' active' : ''}`}
            onClick={() => setStatus(c.val)}
          >{c.label}</button>
        ))}
        <div className="topbar-date">Q1 · 2026</div>
      </header>

      {/* ── MAIN ── */}
      <main className="main">

        {/* KPI Row */}
        <div className="kpi-row">
          {[
            { cls:'gold',  icon:'🏢', label:'New Entries · 12 months', val:'47',   delta:'up',   dtext:'▲ +18% vs prior year' },
            { cls:'terra', icon:'📋', label:'Planned Openings',         val:'29',   delta:'up',   dtext:'▲ +11 new signals' },
            { cls:'teal',  icon:'💵', label:'Est. Capital Inflow',      val:'$8.3B',delta:'up',   dtext:'▲ +34% YoY' },
            { cls:'blue',  icon:'🌐', label:'Source Countries',         val:'31',   delta:'down', dtext:'▼ GCC +8, EU –2' },
          ].map((k, i) => (
            <div key={i} className={`kpi-card ${k.cls}`}>
              <div className="kpi-icon">{k.icon}</div>
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value">{k.val}</div>
              <div className={`kpi-delta ${k.delta}`}>{k.dtext}</div>
            </div>
          ))}
        </div>

        {/* Table + Regions */}
        <div className="two-col">
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Company Entry Feed</div>
                <div className="card-subtitle">Foreign firms entering Morocco · sorted by recency</div>
              </div>
              <div className="card-actions">
                <button className="btn-ghost">Export CSV</button>
                <button className="btn-ghost">Filter ▾</button>
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Origin</th>
                    <th>Sector</th>
                    <th>Region</th>
                    <th>Investment</th>
                    <th>Status</th>
                    <th>Date Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, i) => (
                    <tr key={i}>
                      <td className="company-name">{c.name}</td>
                      <td><span className="flag">{c.flag}</span>{c.origin}</td>
                      <td><span className={`sector-tag tag-${c.tag}`}>{c.sector}</span></td>
                      <td>{c.region}</td>
                      <td className="investment-val">{c.invest}</td>
                      <td><span className={`status-badge status-${c.status}`}>{c.statusLabel}</span></td>
                      <td style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-3)' }}>{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right panel */}
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">By Region</div>
                <div className="card-subtitle">Entry concentration</div>
              </div>
            </div>
            <div className="region-list">
              {regions.map((r, i) => (
                <div className="region-item" key={i}>
                  <span className="region-label">{r.name}</span>
                  <div className="region-bar-wrap">
                    <div className="region-bar" style={{ width: barWidths[r.name] || '0%' }} />
                  </div>
                  <span className="region-count">{r.count}</span>
                </div>
              ))}
            </div>

            <div className="card-header" style={{ borderTop:'1px solid var(--border)', borderBottom:'none', paddingTop:14 }}>
              <div>
                <div className="card-title">Sectors</div>
                <div className="card-subtitle">Active attraction zones</div>
              </div>
            </div>
            <div className="sector-grid">
              {sectors.map((s, i) => (
                <div className="sector-item" key={i}>
                  <span className="sector-name">{s.name}</span>
                  <span className="sector-num">{s.count}</span>
                  <div className="sector-mini-bar">
                    <div className="sector-mini-fill" style={{ width: Math.round(s.count / 12 * 100) + '%', background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="three-col">

          {/* Timeline */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Entry Timeline</div>
              <div className="card-subtitle" style={{ marginLeft:'auto' }}>Upcoming &amp; recent</div>
            </div>
            <div className="timeline">
              {timelineItems.map((t, i) => (
                <div className="tl-item" key={i} style={{ animationDelay: `${0.1 * i}s` }}>
                  <div className={`tl-dot ${t.dot}`}>●</div>
                  <div>
                    <div className="tl-date">{t.date}</div>
                    <div className="tl-event">
                      <strong>{t.bold}</strong>{t.text.replace(t.bold, '')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Origin Mix */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Origin Mix</div>
              <div className="card-subtitle" style={{ marginLeft:'auto' }}>By region of origin</div>
            </div>
            <DonutChart />
          </div>

          {/* Alerts */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Intelligence Alerts</div>
              <span className="nav-badge" style={{ fontSize:'0.6rem', padding:'3px 9px' }}>3 new</span>
            </div>
            <div className="alert-list">
              {alerts.map((a, i) => (
                <div className="alert-item" key={i}>
                  <span className="alert-icon">{a.icon}</span>
                  <div>
                    <div className="alert-msg">{boldify(a.msg, a.bold)}</div>
                    <div className="alert-time">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
