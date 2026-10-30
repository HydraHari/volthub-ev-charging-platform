import {useEffect,useState} from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Stations from './pages/Stations';
import GenericPage from './pages/GenericPage';
export default function App(){
 const [activePage,setActivePage]=useState('Dashboard');
 useEffect(()=>{const handler=e=>setActivePage(e.detail);window.addEventListener('navigate',handler);return()=>window.removeEventListener('navigate',handler)},[]);
 const pages={Sessions:<GenericPage resource="sessions" title="Charging sessions" description="Monitor live charging activity and completed sessions." columns={['station','vehicle','energy','amount','status']}/>,Bookings:<GenericPage resource="bookings" title="Bookings" description="Review upcoming charging reservations." columns={['customer','station','date','time','status']}/>,Analytics:<div className="page"><div className="page-heading"><div><div className="eyebrow">PERFORMANCE</div><h1>Analytics</h1><p>Network energy and revenue performance.</p></div></div><div className="panel analytics-note"><h2>Weekly energy delivered</h2><p>8,420 kWh</p><small>Mock analytics data for portfolio demonstration.</small></div></div>,Alerts:<GenericPage resource="alerts" title="Alerts & notifications" description="Network events and operational notices." columns={['title','detail','level','time']}/>,Settings:<div className="page"><div className="page-heading"><div><div className="eyebrow">PREFERENCES</div><h1>Settings</h1><p>VoltHub workspace configuration.</p></div></div><section className="panel settings-panel"><h2>Network settings</h2><p>Workspace: VoltHub Demo Network</p><p>API endpoint: http://localhost:5000</p><p>Environment: Local development</p></section></div>};
 return <div className="app-shell"><Sidebar activePage={activePage} setActivePage={setActivePage}/><main className="main-area"><Navbar title={activePage}/>{activePage==='Dashboard'?<Dashboard/>:activePage==='Stations'?<Stations/>:pages[activePage]}</main></div>
}