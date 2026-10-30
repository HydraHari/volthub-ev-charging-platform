import { useEffect,useState } from 'react';
import { Zap,MapPin,Wallet,Activity,ArrowUpRight,MoreHorizontal } from 'lucide-react';
import { AreaChart,Area,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid } from 'recharts';
import { energyData } from '../data/mockData';
import { api } from '../services/api';
import StatCard from '../components/StatCard';
export default function Dashboard() {
 const [stations,setStations]=useState([]),[sessions,setSessions]=useState([]);
 useEffect(()=>{api.get('stations').then(setStations).catch(()=>{});api.get('sessions').then(setSessions).catch(()=>{});},[]);
 const active=stations.filter(s=>s.status==='Occupied').length;
 return <div className="page">
  <div className="page-heading"><div><div className="eyebrow">OVERVIEW</div><h1>Good morning, Admin <span>✦</span></h1><p>Here's what's happening across your charging network today.</p></div><button className="btn btn-primary" onClick={()=>window.dispatchEvent(new CustomEvent('navigate',{detail:'Stations'}))}>＋ Add station</button></div>
  <div className="stats-grid">
   <StatCard label="Total stations" value={stations.length||'—'} change="+12.8%" note="vs last month" icon={MapPin}/>
   <StatCard label="Active sessions" value={active||'0'} change="+8.2%" note="vs yesterday" icon={Zap} tone="green"/>
   <StatCard label="Energy delivered" value="8,420 kWh" change="+18.4%" note="this week" icon={Activity} tone="purple"/>
   <StatCard label="Revenue" value="₹2.40L" change="+6.5%" note="this month" icon={Wallet} tone="amber"/>
  </div>
  <div className="dashboard-grid"><section className="panel chart-panel"><div className="panel-head"><div><h2>Energy consumption</h2><p>Weekly energy delivery across the network</p></div><button className="select-like">This week⌄</button></div><div className="chart-legend"><span/> Energy delivered <b>8,420 kWh</b></div><div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={energyData}><defs><linearGradient id="energyFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#32d6a0" stopOpacity={.25}/><stop offset="100%" stopColor="#32d6a0" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#202a3a" vertical={false}/><XAxis dataKey="day" stroke="#738096" tickLine={false} axisLine={false}/><YAxis stroke="#738096" tickLine={false} axisLine={false}/><Tooltip contentStyle={{background:'#111b2b',border:'1px solid #29364a',borderRadius:10}}/><Area type="monotone" dataKey="energy" stroke="#32d6a0" strokeWidth={3} fill="url(#energyFill)"/></AreaChart></ResponsiveContainer></div></section>
  <section className="panel network-panel"><div className="panel-head"><div><h2>Network health</h2><p>Live station availability</p></div><MoreHorizontal size={20}/></div><div className="health-ring"><div><strong>{stations.length?Math.round(stations.filter(s=>s.status==='Available').length/stations.length*100):'—'}%</strong><small>Available</small></div></div><div className="health-list"><div><i className="dot green-dot"/>Available <b>{stations.filter(s=>s.status==='Available').length}</b></div><div><i className="dot amber-dot"/>Occupied <b>{active}</b></div><div><i className="dot red-dot"/>Maintenance <b>{stations.filter(s=>s.status==='Maintenance').length}</b></div></div></section></div>
  <section className="panel"><div className="panel-head"><div><h2>Recent charging sessions</h2><p>Latest activity across your network</p></div><button className="text-btn" onClick={()=>window.dispatchEvent(new CustomEvent('navigate',{detail:'Sessions'}))}>View all <ArrowUpRight size={15}/></button></div><div className="table-wrap"><table><thead><tr><th>STATION</th><th>VEHICLE</th><th>ENERGY</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>{sessions.map(s=><tr key={s.id}><td>{s.station}</td><td>{s.vehicle}</td><td>{s.energy} kWh</td><td>₹{s.amount}</td><td><span className={`status ${s.status==='Charging'?'occupied':'available'}`}>{s.status}</span></td></tr>)}</tbody></table></div></section>
 </div>
}