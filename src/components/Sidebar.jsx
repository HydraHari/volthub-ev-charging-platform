import { LayoutDashboard, MapPin, Zap, CalendarDays, ChartNoAxesCombined, Bell, Settings, PlugZap } from 'lucide-react';
const items = [
 ['Dashboard',LayoutDashboard],['Stations',MapPin],['Sessions',Zap],['Bookings',CalendarDays],
 ['Analytics',ChartNoAxesCombined],['Alerts',Bell],['Settings',Settings]
];
export default function Sidebar({activePage,setActivePage}) {
 return <aside className="sidebar">
  <div className="brand"><div className="brand-mark"><PlugZap size={22}/></div><div><b>VoltHub</b><small>EV NETWORK PLATFORM</small></div></div>
  <div className="nav-label">WORKSPACE</div>
  <nav>{items.map(([label,Icon])=><button key={label} className={`nav-item ${activePage===label?'active':''}`} onClick={()=>setActivePage(label)}><Icon size={18}/><span>{label}</span>{label==='Alerts'&&<i className="nav-dot"/>}</button>)}</nav>
  <div className="sidebar-bottom"><div className="online"><span/>All systems operational</div><div className="user"><div className="avatar">HD</div><div><b>Admin User</b><small>Network administrator</small></div></div></div>
 </aside>
}