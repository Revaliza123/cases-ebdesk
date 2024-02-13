// components/Sidebar.js
import React from 'react';
import logo from '../assets/Vector.png';
import { Link, useNavigate, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faWifi, faDatabase, faServer, faGauge, faFan, faImage, faUser, faIcons, faPager } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 min-h-dvh max-h-full w-1/6 text-white p-4 flex flex-col">
      <div className="mb-7 flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
        <Link to="/" className='hidden md:inline'>Logoipsum</Link>
      </div>
      {/* ... Other menu items ... */}
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faGauge} className="mr-2" />
        <Link to="/dashboard" className='hidden md:inline'>Dashboard</Link>
      </div>
      <div className='mb-4 mt-2 ms-2 font-mono text-slate-400'>
      <h4 className='hidden md:inline'>DATA</h4>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faFan} className="mr-2" />
        <span className="hidden md:inline">Visuakization</span>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faCog} className="mr-2" />
        <span className="hidden md:inline">Case</span>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faServer} className="mr-2" />
        <span className="hidden md:inline">Data Set</span>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faDatabase} className="mr-2" />
        <Link to="/dsource" className='hidden md:inline'>Data Source</Link>

      </div>
      <div className="mb-3 text-slate-400 ms-2">
      <FontAwesomeIcon icon={faWifi} className='mr-2' />
      <span className="hidden md:inline">Connection</span>
      </div>
      <div className='mb-4 mt-2 ms-2 font-mono text-slate-400'>
      <h4 className='hidden md:inline'>ASSETS</h4>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faIcons} className="mr-2" />
        <span className="hidden md:inline">Icon</span>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faImage} className="mr-2" />
        <span className="hidden md:inline">Image</span>
      </div>
      <div className='mb-4 mt-2 ms-2 font-mono text-slate-400'>
      <h4 className='hidden md:inline'>AUTHORIZATION</h4>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        <span className="hidden md:inline">Account</span>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faPager} className="mr-2" />
        <span className="hidden md:inline">Role</span>
      </div>
      <div className="mb-3 text-slate-400 ms-2">
        <FontAwesomeIcon icon={faImage} className="mr-2" />
        <span className="hidden md:inline">Workspace</span>
      </div>
    </div>
  );
}

export default Sidebar;
