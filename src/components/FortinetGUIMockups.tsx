import React from 'react';
import { Settings, Plus, Edit, Trash2, Search, Check, AlertTriangle, HelpCircle, HardDrive, Server, Cloud, ChevronDown, Monitor, Shield, FileText, Terminal } from 'lucide-react';

export const FortinetGUI = ({ questionId, codeBlock, game }: { questionId: number, codeBlock?: string, game?: 'fortios' | 'fortimanager' }) => {
  
  // If game is fortimanager, enforce that only questions with actual exhibits show mockups
  if (game === 'fortimanager') {
    const allowedIds = [2, 3, 4, 8, 13, 14, 18, 21, 23, 24, 25, 27, 29, 31, 32, 33];
    if (!allowedIds.includes(questionId)) {
      return null;
    }
  }

  // Q31 (FortiManager specific): Workspace Mode Global Configuration CLI
  if (game === 'fortimanager' && questionId === 31) {
    return (
      <div className="bg-[#1e1e1e] border border-slate-700/80 rounded-lg shadow-lg overflow-hidden w-full max-w-2xl mx-auto mb-6 text-slate-300 font-mono text-xs">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between text-[11px] text-slate-400 font-sans">
              <span className="flex items-center gap-1.5"><Terminal size={14} className="text-slate-400" /> CLI Command Terminal - HQ-FMG-76</span>
              <span className="bg-blue-900/30 text-blue-400 border border-blue-900 px-1.5 py-0.5 rounded text-[9px] font-bold">CONFIG SYSTEM LOG</span>
          </div>
          <div className="p-4 leading-normal font-mono text-[11px] space-y-0.5 select-all text-slate-300">
              <p className="text-slate-500 font-sans italic">// Configuring normal workspace mode from FortiManager CLI:</p>
              <p>FMG-HQ-76 # <span className="text-white font-bold">config system global</span></p>
              <p>(global) # <span className="text-white font-bold">set workspace-mode normal</span></p>
              <p>(global) # <span className="text-white font-bold">end</span></p>
              <p>FMG-HQ-76 #_</p>
          </div>
          <div className="bg-slate-900/50 p-3 border-t border-slate-800 text-[11px] text-slate-400 font-sans flex gap-2">
              <span className="text-slate-300">ℹ️</span>
              <p className="leading-relaxed">
                  Setting the <strong>workspace-mode</strong> option to <strong>normal</strong> locks specific policy blocks and the global ADOM, preventing concurrent access and conflicts during admin sessions.
              </p>
          </div>
      </div>
    );
  }

  // Q2: FortiManager Cluster Settings
  if (questionId === 2) {
    return (
      <div className="bg-slate-100 rounded shadow-2xl border border-slate-300 font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6">
         <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700 flex items-center">
             <Server size={14} className="mr-2 text-blue-600" />
             Cluster Settings
         </div>
         <div className="p-4 grid grid-cols-12 gap-y-3 gap-x-4 bg-white">
             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">Failover Mode</div>
             <div className="col-span-8 flex gap-1">
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 border border-slate-300 rounded cursor-not-allowed">Manual</span>
                 <span className="bg-blue-500 text-white px-3 py-1 border border-blue-600 rounded shadow-inner font-medium">VRRP</span>
             </div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">Operation Mode</div>
             <div className="col-span-8 flex gap-1">
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 border border-slate-300 rounded cursor-not-allowed">Standalone</span>
                 <span className="bg-blue-500 text-white px-3 py-1 border border-blue-600 rounded shadow-inner font-medium">Primary</span>
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 border border-slate-300 rounded cursor-not-allowed">Secondary</span>
             </div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">Monitored Interfaces</div>
             <div className="col-span-8 flex items-center gap-2">
                 <span className="font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded border border-red-200 font-bold">port1 (Failed - Link Down)</span>
                 <span className="font-mono bg-green-100 text-green-700 px-2 py-0.5 rounded border border-green-200 font-bold">port2 (Active)</span>
             </div>

             <div className="col-span-4 text-right pr-2 py-2 text-slate-600">Peer IP and Peer SN</div>
             <div className="col-span-8">
                 <table className="w-full border border-slate-300">
                    <thead className="bg-slate-50 border-b border-slate-300">
                       <tr><th className="text-left p-1.5 font-normal text-slate-500">IP Type</th><th className="text-left p-1.5 font-normal text-slate-500">Peer IP</th><th className="text-left p-1.5 font-normal text-slate-500">Peer SN</th><th className="p-1.5 font-normal text-slate-500 text-center">Action</th></tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td className="p-1.5 border-r border-slate-300"><select className="bg-white border inset-0 w-full p-1"><option>IPv4</option></select></td>
                          <td className="p-1.5 border-r border-slate-300"><input type="text" value="10.0.1.242" className="bg-white border border-slate-300 p-1 w-full" readOnly/></td>
                          <td className="p-1.5 border-r border-slate-300"><input type="text" value="FMG-VM0A169" className="bg-white border border-slate-300 p-1 w-full" readOnly/></td>
                          <td className="p-1.5 text-center flex justify-center gap-2 text-slate-400">✖ ➕</td>
                       </tr>
                    </tbody>
                 </table>
             </div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">Cluster ID</div>
             <div className="col-span-8"><input type="text" value="1" readOnly className="border border-slate-300 p-1 bg-white w-24" /> <span className="text-slate-400 ml-1">(1-64)</span></div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">File Quota</div>
             <div className="col-span-8 flex items-center"><input type="text" value="4096" readOnly className="border border-slate-300 p-1 bg-white w-24" /> <span className="text-slate-400 ml-2">MB (2048-20480)</span></div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">Heart Beat Interval</div>
             <div className="col-span-8 flex items-center"><input type="text" value="10" readOnly className="border border-slate-300 p-1 bg-white w-24" /> <span className="text-slate-400 ml-2">Seconds</span></div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">VRRP Interface</div>
             <div className="col-span-8"><select className="border border-slate-300 p-1 bg-white w-48"><option>port2</option></select></div>

             <div className="col-span-4 text-right pr-2 py-1 text-slate-600">Priority</div>
             <div className="col-span-8 flex items-center"><input type="text" value="1" readOnly className="border border-slate-300 p-1 bg-white w-24" /> <span className="text-slate-400 ml-2">(1-253)</span></div>
         </div>
      </div>
    );
  }

  // Q3: FortiManager Address Object (Per-Device Mapping)
  if (questionId === 3) {
    return (
      <div className="bg-slate-100 rounded shadow-2xl border border-slate-300 font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6">
         <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700">
             Edit Address - LAN
         </div>
         <div className="p-4 bg-white space-y-3">
             <div className="flex"><div className="w-1/3 text-slate-600">Category</div><div className="w-2/3"><select className="w-full border border-slate-300 p-1"><option>Address</option></select></div></div>
             <div className="flex"><div className="w-1/3 text-slate-600">Name</div><div className="w-2/3"><input type="text" value="LAN" readOnly className="w-full border border-slate-300 p-1" /></div></div>
             <div className="flex"><div className="w-1/3 text-slate-600">Type</div><div className="w-2/3"><select className="w-full border border-slate-300 p-1"><option>Subnet</option></select></div></div>
             <div className="flex"><div className="w-1/3 text-slate-600">IP/Netmask</div><div className="w-2/3 flex gap-2"><input type="text" value="172.16.5.0/255.255.255.0" readOnly className="w-full flex-grow border border-slate-300 p-1" /><button className="bg-slate-100 border border-slate-300 px-2 text-slate-600">Resolve from name</button></div></div>
             
             <div className="mt-4 pt-2 border-t border-slate-200 bg-slate-50 p-2">
                 <div className="flex items-center text-slate-700 font-bold mb-2"><ChevronDown size={14} className="mr-1"/> Per-Device Mapping</div>
                 
                 <div className="flex gap-2 mb-2">
                     <button className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-1 flex items-center font-medium"><Plus size={12} className="mr-1"/> Create New</button>
                     <button className="bg-slate-50 border border-slate-300 px-2 py-1 flex items-center text-slate-500"><Edit size={12} className="mr-1"/> Edit</button>
                     <button className="bg-slate-50 border border-slate-300 px-2 py-1 flex items-center text-slate-500"><Trash2 size={12} className="mr-1"/> Delete</button>
                     <div className="ml-auto relative">
                         <input type="text" placeholder="Search..." className="border border-slate-300 p-1 pl-6" />
                         <Search size={12} className="absolute left-2 top-2 text-slate-400" />
                     </div>
                 </div>

                 <table className="w-full border border-slate-300 bg-white">
                    <thead className="bg-slate-100 border-b border-slate-300">
                       <tr><th className="w-8 p-2 border-r border-slate-200"></th><th className="text-left p-2 border-r border-slate-200 font-medium text-slate-600">Mapped Device</th><th className="text-left p-2 font-medium text-slate-600">Details</th><th className="w-8"></th></tr>
                    </thead>
                    <tbody>
                       <tr className="border-b border-slate-100">
                          <td className="p-2 border-r border-slate-200 text-center"><input type="checkbox"/></td>
                          <td className="p-2 border-r border-slate-200"><Monitor size={12} className="inline mr-2 text-slate-400"/>BR1-FGT-1 [root]</td>
                          <td className="p-2">IP/Netmask: 10.10.10.5/255.255.255.255</td>
                          <td></td>
                       </tr>
                       <tr className="border-b border-slate-100 bg-blue-50">
                          <td className="p-2 border-r border-slate-200 text-center"><input type="checkbox"/></td>
                          <td className="p-2 border-r border-slate-200"><Monitor size={12} className="inline mr-2 text-slate-400"/>HQ-NGFW-1 [root]</td>
                          <td className="p-2">IP/Netmask: 172.16.5.20/255.255.255.255</td>
                          <td></td>
                       </tr>
                       <tr className="border-b border-slate-100">
                          <td className="p-2 border-r border-slate-200 text-center"><input type="checkbox"/></td>
                          <td className="p-2 border-r border-slate-200"><Monitor size={12} className="inline mr-2 text-slate-400"/>Remote-Firewall [root]</td>
                          <td className="p-2">IP/Netmask: 21.21.2.5/255.255.255.255</td>
                          <td></td>
                       </tr>
                    </tbody>
                 </table>
             </div>
         </div>
      </div>
    );
  }

  // Q4: Configuration Revision History and Reversion CLI Output
  if (questionId === 4) {
    return (
      <div className="space-y-6 w-full max-w-3xl mx-auto mb-6 text-slate-800">
         {/* Part A: Revision History GUI Mockup */}
         <div className="bg-slate-100 rounded shadow-lg border border-slate-300 font-sans text-xs overflow-hidden text-slate-800">
             <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700 flex justify-between items-center">
                 <span className="flex items-center">
                     <FileText size={14} className="mr-2 text-indigo-600" /> 
                     Configuration Revision History - HQ-FortiGate
                 </span>
                 <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-mono text-[10px]">Revision ID: 9</span>
             </div>
             <div className="p-4 bg-white space-y-3">
                 <div className="grid grid-cols-3 gap-2 border-b pb-2 mb-2 font-semibold text-slate-500">
                     <div>Revision ID</div>
                     <div>Created By / Date</div>
                     <div>Description</div>
                 </div>
                 <div className="grid grid-cols-3 gap-2 py-1 items-center border-b border-slate-100">
                     <div className="font-mono font-bold text-indigo-600">10 (Current)</div>
                     <div>admin -- 2026-05-26 14:10</div>
                     <span className="text-slate-500">Removed Support User configurations</span>
                 </div>
                 <div className="grid grid-cols-3 gap-2 py-1 items-center bg-indigo-50 border border-indigo-200 rounded p-1.5 font-medium">
                     <div className="font-mono font-bold text-indigo-700">9 (Selected)</div>
                     <div>admin -- 2026-05-26 10:30</div>
                     <span className="text-slate-900 font-bold">Configurations related to the user Support (Active)</span>
                 </div>
                 <div className="grid grid-cols-3 gap-2 py-1 items-center border-b border-slate-100 text-slate-450">
                     <div className="font-mono">8</div>
                     <div>system -- 2026-05-25 09:12</div>
                     <span>Auto-backup before security patch</span>
                 </div>
                 <div className="pt-2 flex justify-end gap-2">
                     <button className="bg-slate-100 border border-slate-300 px-3 py-1 text-slate-500 font-medium cursor-not-allowed">Diff Revisions</button>
                     <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded shadow font-medium">Revert Configuration...</button>
                 </div>
             </div>
         </div>

         {/* Part B: CLI Console Output Mockup */}
         <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner border border-slate-700 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto space-y-2">
             <div className="text-slate-500 border-b border-slate-800 pb-1.5 mb-1.5 flex justify-between items-center font-sans">
                 <span>🐚 CLI Console - Revert Task Console log</span>
                 <span className="text-emerald-500 font-bold">● ONLINE</span>
             </div>
             <div className="text-slate-400">HQ-FortiGate # execute revision revert 9</div>
             <div className="text-indigo-400">Reverting database to snapshot of revision 9... Doing partial DB sync.</div>
             <div className="text-slate-400">Comparing config tables... Done.</div>
             <div className="text-emerald-450 font-bold pl-2">dev-db: not modified</div>
             <div className="text-emerald-455 font-bold pl-2">conf: in sync</div>
             <div className="text-emerald-455 font-bold pl-2">cond: OK</div>
             <div className="text-emerald-455 font-bold pl-2">dm: installed</div>
             <div className="text-slate-500 mt-2 italic">// Info: The output showing dev-db as not modified indicates only device-level config has been applied to FortiGate from Device Manager, policy database remains untouched.</div>
         </div>
      </div>
    );
  }

  // Q18: NAT Diagram
  if (questionId === 18) {
    return (
      <div className="my-6">
        <div className="bg-white p-6 rounded shadow-lg border border-slate-200 font-sans mx-auto max-w-3xl flex items-center justify-between relative overflow-hidden">
             
             <div className="flex flex-col items-center z-10">
                 <span className="text-xs font-bold text-slate-500 mb-1">FortiManager VIP</span>
                 <span className="text-blue-600 font-mono text-sm mb-2">100.65.0.120</span>
                 <div className="bg-slate-800 text-white p-4 rounded-lg shadow-md border-b-4 border-slate-600 flex flex-col items-center w-32">
                     <Server size={32} className="text-emerald-400 mb-2"/>
                     <span className="font-bold">FortiManager</span>
                 </div>
                 <span className="text-xs text-slate-400 font-mono mt-2">10.0.13.120/24</span>
             </div>

             <div className="flex-grow flex flex-col items-center justify-center relative h-32 z-0">
                  <div className="w-full h-1 bg-orange-400 absolute top-1/2 -mt-0.5 z-0"></div>
                  <div className="bg-slate-200 px-4 py-2 border-2 border-slate-400 rounded-full z-10 flex flex-col items-center shadow-md">
                      <span className="text-orange-600 font-bold">WAN</span>
                      <Cloud size={24} className="text-slate-500 my-1" />
                      <span className="text-slate-700 font-mono text-xs font-bold">100.65.0.101</span>
                  </div>
                  <div className="absolute bottom-2 text-xs text-slate-500 font-medium bg-white px-2 rounded-full border border-slate-200">NAT Device</div>
             </div>

             <div className="flex flex-col items-center z-10">
                 <span className="text-xs font-bold text-slate-500 mb-1">FortiGate WAN</span>
                 <span className="text-blue-600 font-mono text-sm mb-2">100.65.0.111/24</span>
                 <div className="bg-slate-800 text-white p-4 rounded-lg shadow-md border-b-4 border-slate-600 flex flex-col items-center w-32">
                     <Shield size={32} className="text-red-500 mb-2"/>
                     <span className="font-bold">FortiGate</span>
                 </div>
             </div>
        </div>
        {codeBlock && (
            <div className="bg-[#1e1e1e] p-4 rounded-b border border-t-0 border-[#333] text-[#d4d4d4] font-mono text-sm leading-relaxed overflow-x-auto shadow-inner max-w-3xl mx-auto">
               <span className="text-blue-400">config</span> system admin setting<br/>
               &nbsp;&nbsp;<span className="text-blue-400">set</span> mgmt-addr <span className="text-green-400">100.65.0.120</span><br/>
               <span className="text-blue-400">end</span>
            </div>
        )}
      </div>
    )
  }

  // Q20: Installation Targets
  if (questionId === 20) {
      return (
        <div className="bg-slate-100 rounded shadow-2xl border border-slate-300 font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6">
           <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700">
               Installation Targets Central policy package
           </div>
           <div className="p-0">
               <table className="w-full text-left border-b border-slate-300 bg-white">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                     <tr>
                         <th className="p-2 border-r border-slate-200">Installation Target</th>
                         <th className="p-2 border-r border-slate-200">Config Status</th>
                         <th className="p-2">Policy Package Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="border-b border-slate-100 bg-blue-50/50">
                        <td className="p-2 border-r border-slate-200 font-medium"><Monitor size={12} className="inline mr-2 text-slate-500"/>BR1-FGT-1</td>
                        <td className="p-2 border-r border-slate-200"><Check size={14} className="inline mr-1 text-emerald-500"/> Synchronized</td>
                        <td className="p-2"><HelpCircle size={14} className="inline mr-1 text-slate-400"/> BR1-FGT-1</td>
                     </tr>
                     <tr className="border-b border-slate-100">
                        <td className="p-2 border-r border-slate-200"><Monitor size={12} className="inline mr-2 text-slate-400"/>Local-Firewall</td>
                        <td className="p-2 border-r border-slate-200"><HelpCircle size={14} className="inline mr-1 text-slate-400"/> Unknown</td>
                        <td className="p-2"><AlertTriangle size={14} className="inline mr-1 text-orange-500"/> Central</td>
                     </tr>
                     <tr className="border-b border-slate-100">
                        <td className="p-2 border-r border-slate-200"><Monitor size={12} className="inline mr-2 text-slate-400"/>Remote-Firewall</td>
                        <td className="p-2 border-r border-slate-200"><HelpCircle size={14} className="inline mr-1 text-slate-400"/> Unknown</td>
                        <td className="p-2"><AlertTriangle size={14} className="inline mr-1 text-orange-500"/> Central</td>
                     </tr>
                  </tbody>
               </table>
           </div>
        </div>
      );
  }

  // Q30: Device Revision Diff
  if (questionId === 30) {
      return (
        <div className="bg-slate-100 rounded shadow-2xl border border-slate-300 font-sans text-xs w-full max-w-4xl mx-auto overflow-hidden text-slate-800 mb-6">
           <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700">
               Device Revision Diff wizard
           </div>
           
           <div className="flex border-b border-slate-300 bg-white">
               <div className="w-1/2 border-r border-slate-300 p-3">
                   <div className="flex justify-between mb-2"><span className="text-slate-500">Revision ID:</span> <b>11</b></div>
                   <div className="flex justify-between mb-2"><span className="text-slate-500">Total:</span> <span>12696</span></div>
                   <div className="flex justify-between mb-2"><span className="text-slate-500">Deleted:</span> <span className="text-red-500">0</span></div>
                   
                   <div className="mt-4 bg-slate-50 border border-slate-200 p-2 font-mono text-xs overflow-x-auto text-slate-500">
                        <div className="text-slate-400">8500 end</div>
                        <div className="text-slate-400">8501 config user group</div>
                        <div className="italic text-slate-400">     (...)</div>
                        <div className="text-slate-400">12154 set service "ALL"</div>
                        <div className="text-slate-400">12155 set comments "test"</div>
                   </div>
               </div>
               <div className="w-1/2 p-3">
                   <div className="flex justify-between mb-2"><span className="text-slate-500">Revision ID:</span> <b>9</b></div>
                   <div className="flex justify-between mb-2"><span className="text-slate-500">Total:</span> <span>12704</span></div>
                   <div className="flex justify-between mb-2"><span className="text-slate-500">Added:</span> <span className="text-emerald-500">8</span></div>
                   
                   <div className="mt-4 bg-slate-50 border border-slate-200 p-2 font-mono text-xs overflow-x-auto text-slate-600">
                        <div className="text-slate-400">8500 end</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8501 config user local</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8502  edit "Support"</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8503  set type password</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8504  set two-factor email</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8505  set email-to "support@mail.com"</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8506  next</div>
                        <div className="bg-emerald-100 text-emerald-800 py-0.5">8507 end</div>
                        <div className="text-slate-400">8508 config user group</div>
                   </div>
               </div>
           </div>
           
           <div className="bg-slate-100 p-3 flex justify-center gap-4">
               <button className="bg-emerald-600 text-white px-4 py-1.5 rounded shadow">Save Diff as Script</button>
               <button className="bg-emerald-600 text-white px-4 py-1.5 rounded shadow">Show Full Diff</button>
               <button className="bg-white border border-slate-300 text-slate-600 px-4 py-1.5 rounded shadow-sm">Cancel</button>
           </div>

           {codeBlock && (
             <div className="bg-[#1e1e1e] p-4 text-[#d4d4d4] font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto">
                <span className="text-yellow-400 block mb-2">CLI output</span>
                {codeBlock.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
             </div>
           )}
        </div>
      );
  }

  // Q31: Interface Mapping
  if (questionId === 31) {
      return (
        <div className="bg-slate-100 rounded shadow-2xl border border-slate-300 font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6">
           <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700">
               Import Device - HQ-NGFW-1 - Interface Mapping & Policy
           </div>
           <div className="p-4 bg-white space-y-3 pb-6">
               <div className="text-slate-500 mb-4 bg-blue-50 p-2 border border-blue-100 rounded">Create a new policy package for import.</div>
               <div className="flex"><div className="w-1/4 text-slate-600 font-medium">Policy Package Name</div><div className="w-3/4"><input type="text" value="HQ-NGFW-1" readOnly className="w-2/3 border border-slate-300 p-1 bg-slate-50" /></div></div>
               <div className="flex"><div className="w-1/4 text-slate-600 font-medium">Folder</div><div className="w-3/4"><select className="w-2/3 border border-slate-300 p-1"><option>root</option></select></div></div>
               
               <div className="mt-6 border border-slate-300">
                 <table className="w-full text-left">
                    <thead className="bg-slate-100 border-b border-slate-300 text-slate-600">
                       <tr>
                           <th className="p-2 border-r border-slate-300">Device Interface</th>
                           <th className="p-2 border-r border-slate-300">Mapping Type</th>
                           <th className="p-2">Normalized Interface</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr className="border-b border-slate-200">
                          <td className="p-2 border-r border-slate-300 font-medium"><Monitor size={12} className="inline mr-2 text-slate-400"/>port2</td>
                          <td className="p-2 border-r border-slate-300"><span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Per-Platform</span></td>
                          <td className="p-2"><input type="text" value="LAN" readOnly className="border border-slate-300 p-1 bg-slate-50 w-full" /></td>
                       </tr>
                       <tr className="border-b border-slate-200">
                          <td className="p-2 border-r border-slate-300 font-medium"><Monitor size={12} className="inline mr-2 text-slate-400"/>port4</td>
                          <td className="p-2 border-r border-slate-300"><span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Per-Platform</span></td>
                          <td className="p-2"><input type="text" value="Port4" readOnly className="border border-slate-300 p-1 bg-slate-50 w-full" /></td>
                       </tr>
                       <tr>
                          <td className="p-2 border-r border-slate-300 font-medium"><Monitor size={12} className="inline mr-2 text-slate-400"/>port6</td>
                          <td className="p-2 border-r border-slate-300"><span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">Per-Platform</span></td>
                          <td className="p-2"><input type="text" value="port6" readOnly className="border border-slate-300 p-1 bg-slate-50 w-full" /></td>
                       </tr>
                    </tbody>
                 </table>
               </div>
           </div>
        </div>
      );
  }

  // Q1: SD-WAN Pie chart
    if (questionId === 1) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-inner mb-6 w-full max-w-3xl mx-auto">
                <div className="flex border-b border-slate-300 pb-2 mb-4 space-x-6 text-sm font-semibold">
                    <span className="text-emerald-700 border-b-2 border-emerald-600 pb-1">SD-WAN Zones</span>
                    <span className="text-slate-500">SD-WAN Rules</span>
                    <span className="text-slate-500">Performance SLAs</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-sm">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-red-400">
                         <div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-t-purple-500 border-l-purple-500 transform rotate-45"></div>
                         <div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-b-emerald-500 border-l-emerald-500 transform -rotate-45"></div>
                         <div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-b-yellow-500 border-r-yellow-500 transform -rotate-12"></div>
                         <div className="text-center font-bold text-xl flex flex-col"><span className="text-2xl">4</span><span className="text-[10px] uppercase text-slate-500">SD-WAN<br/>Members</span></div>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                        <div className="text-slate-500 font-bold mb-1 border-b border-slate-200 pb-1">Download</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span> port4</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span> port6</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span> port2</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> port3</div>
                    </div>
                </div>
                <div className="mt-4 border border-slate-300 bg-white rounded">
                    <div className="flex px-4 py-2 border-b border-slate-200 bg-slate-50 font-semibold text-xs text-slate-500">Interface</div>
                    <div className="px-4 py-2 border-b border-slate-200 flex items-center text-sm font-medium"><span className="mr-2 text-slate-400">[-]</span> <span className="text-emerald-600 mr-2 font-bold">+</span> virtual-wan-link</div>
                    <div className="px-4 py-2 border-b border-slate-200 flex items-center text-sm font-medium"><span className="mr-2 opacity-0">[-]</span> <span className="text-red-500 mr-2 font-bold">!</span> Underlay</div>
                    <div className="px-4 py-2 flex items-center text-sm font-medium"><span className="mr-2 text-slate-400">[-]</span> <span className="text-emerald-600 mr-2 font-bold">+</span> overlay</div>
                </div>
            </div>
        );
    }
    
    // Q6: IPsec mismatches
    if (questionId === 6) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-inner flex flex-col md:flex-row gap-4 mb-6 w-full max-w-4xl mx-auto">
                <div className="flex-1 bg-white border border-slate-300 rounded shadow-sm">
                    <div className="bg-slate-200 p-2 text-center font-bold text-xs border-b border-slate-300 text-red-700">HQ-NGFW - Phase 2</div>
                    <div className="p-3 text-xs space-y-3">
                        <div className="font-bold border-b border-slate-200 pb-1 text-slate-600">Phase 2 selectors</div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Local Address</span><span className="font-mono border border-slate-200 px-1 py-0.5 rounded">10.0.11.0/24</span></div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Remote Address</span><span className="font-mono border border-slate-200 px-1 py-0.5 rounded">172.20.1.0/24</span></div>
                        <div className="font-bold border-b border-slate-200 pb-1 mt-2 text-slate-600">Advanced</div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Encryption</span><span className="font-mono bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">AES128  SHA1</span></div>
                    </div>
                </div>
                <div className="flex-1 bg-white border border-slate-300 rounded shadow-sm">
                    <div className="bg-slate-200 p-2 text-center font-bold text-xs border-b border-slate-300 text-orange-700">BR1-FGT - Phase 2</div>
                    <div className="p-3 text-xs space-y-3">
                        <div className="font-bold border-b border-slate-200 pb-1 text-slate-600">Phase 2 selectors</div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Local Address</span><span className="font-mono border border-slate-200 px-1 py-0.5 rounded">172.20.1.0/24</span></div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Remote Address</span><span className="font-mono border border-slate-200 px-1 py-0.5 rounded">10.11.0.0/24</span></div>
                        <div className="font-bold border-b border-slate-200 pb-1 mt-2 text-slate-600">Advanced</div>
                        <div className="flex justify-between items-center"><span className="text-slate-500">Encryption</span><span className="font-mono bg-slate-100 border border-slate-200 px-2 py-0.5 rounded focus:ring focus:ring-red-400">AES256  SHA1</span></div>
                    </div>
                </div>
            </div>
        );
    }

    // Q7: SSL/SSH Inspection Profile
    if (questionId === 7) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-inner mb-6 w-full max-w-3xl mx-auto">
                <div className="border-b border-slate-300 pb-2 mb-4 text-sm font-bold text-slate-700">Edit SSL/SSH Inspection Profile</div>
                <div className="bg-white p-4 rounded shadow-sm space-y-4 text-sm border border-slate-200">
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded">
                        <span className="text-slate-600 w-1/3">Inspection method</span>
                        <div className="flex-1 flex gap-1 font-medium">
                            <span className="bg-white text-slate-500 px-3 py-1 rounded border border-slate-300 text-xs">SSL Certificate Inspection</span>
                            <span className="bg-emerald-600 shadow-inner text-white px-3 py-1 rounded border border-emerald-700 text-xs">Full SSL Inspection</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <span className="text-slate-600 w-1/3 text-xs">CA certificate <span className="text-yellow-500 ml-1">⚠️</span></span>
                        <div className="flex-1"><select className="w-2/3 border border-slate-300 p-1.5 rounded outline-none bg-slate-50 text-xs"><option>Fortinet_CA_SSL</option></select></div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded">
                        <span className="text-slate-600 w-1/3 text-xs">Server certificate SNI check ℹ️</span>
                        <div className="flex-1 flex gap-1 font-medium">
                            <span className="bg-white px-3 py-1 rounded border border-slate-300 text-slate-500 text-xs">Enable</span>
                            <span className="bg-emerald-600 shadow-inner text-white px-3 py-1 rounded border border-emerald-700 text-xs focus:ring-2 ring-emerald-500 ring-offset-1">Strict</span>
                            <span className="bg-white px-3 py-1 rounded border border-slate-300 text-slate-500 text-xs">Disable</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Q8: Closed Network FortiGuard Local FDS Setup
    if (questionId === 8) {
        return (
            <div className="space-y-4 w-full max-w-3xl mx-auto mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* FMG local FDS Server status */}
                    <div className="bg-slate-100 rounded border border-slate-300 font-sans text-xs overflow-hidden text-slate-800 shadow">
                        <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700 flex items-center justify-between">
                            <span className="flex items-center"><Server size={14} className="mr-2 text-indigo-600" /> FortiManager FDS Status</span>
                            <span className="bg-emerald-150 text-emerald-800 px-2 py-0.5 rounded font-mono text-[10px]">Closed Network: Active</span>
                        </div>
                        <div className="p-3 bg-white space-y-2">
                            <div className="flex justify-between border-b pb-1">
                                <span className="text-slate-500">Local FDS Service IP</span>
                                <span className="font-mono font-bold text-slate-705">192.168.1.120</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span className="text-slate-500">IPS Protection Base</span>
                                <span className="font-mono font-bold text-emerald-600">v7.00234 (Active)</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span className="text-slate-500">AV Signatures Base</span>
                                <span className="font-mono font-bold text-emerald-600">v7.00192 (Active)</span>
                            </div>
                            <div className="flex justify-between text-slate-500 pt-1">
                                <span>Serving Service Ports:</span>
                                <span className="font-mono text-indigo-600 font-bold">HTTPS (443) / UDP (8888)</span>
                            </div>
                        </div>
                    </div>

                    {/* FortiGate HQ-NGFW-1 Update failure */}
                    <div className="bg-slate-100 rounded border border-slate-300 font-sans text-xs overflow-hidden text-slate-800 shadow">
                        <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-red-700 flex items-center justify-between">
                            <span className="flex items-center"><Monitor size={14} className="mr-2 text-red-600 animate-pulse" /> HQ-NGFW-1 FortiGuard Sync</span>
                            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-mono text-[10px]">Failed</span>
                        </div>
                        <div className="p-3 bg-white space-y-2">
                            <div className="flex justify-between border-b pb-1">
                                <span className="text-slate-500">Default Anycast Servers</span>
                                <span className="text-red-600 font-bold">Incompatible / Failed</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span className="text-slate-500">IPS Database Version</span>
                                <span className="font-mono text-red-500 font-bold">[unknown]</span>
                            </div>
                            <div className="p-2 bg-amber-50 border border-amber-250 rounded text-[10px] text-amber-850">
                                ⚠️ FortiGate fails to contact default public DNS for rating check. Local Distribution Server is configured, but anycast lookup configuration continues to re-route requests.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Command config console snippet */}
                <div className="bg-[#1e1e1e] p-3 rounded shadow-inner border border-slate-700 text-indigo-300 font-mono text-xs">
                    <span className="text-amber-400 block mb-1"># HQ-NGFW-1 FortiGuard Configuration:</span>
                    <div>config system fortiguard</div>
                    <div className="pl-4">set fortiguard-anycast <span className="text-red-400 font-bold underline">enable</span> <span className="text-slate-500 font-sans italic ml-2">(Default setting: queries anycast servers instead of local FDS!)</span></div>
                    <div className="pl-4">set port 8888</div>
                    <div className="pl-4">set protocol https</div>
                    <div>end</div>
                </div>
            </div>
        );
    }

    // Q16: Run CLI Script - IPsec phase2 mismatch error log
    if (questionId === 16) {
        return (
            <div className="space-y-4 w-full max-w-3xl mx-auto mb-6 text-slate-800">
                <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner border border-slate-700 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto">
                    <div className="text-slate-500 border-b border-slate-800 pb-1.5 mb-1.5 flex justify-between items-center font-sans">
                         <span className="flex items-center"><Terminal size={14} className="mr-2 text-red-500" /> CLI Script Execution Status - Failed</span>
                         <span className="text-red-500 font-bold">RETURN CODE: -23</span>
                    </div>
                    <div className="space-y-1 text-[11px]">
                        <div>HQ-Ngfw-1 # <span className="text-white">config vpn ipsec phase1-interface</span></div>
                        <div>HQ-Ngfw-1 (phase1-interface) # <span className="text-white">edit "VPN-to-Branch"</span></div>
                        <div>HQ-Ngfw-1 (VPN-to-Branch) # <span className="text-slate-400">set interface "port1"</span></div>
                        <div>HQ-Ngfw-1 (VPN-to-Branch) # <span className="text-slate-400">set peertype any</span></div>
                        <div>HQ-Ngfw-1 (VPN-to-Branch) # <span className="text-slate-400">set psksecret "fortinetSecret"</span></div>
                        <div>HQ-Ngfw-1 (VPN-to-Branch) # <span className="text-slate-400">next</span></div>
                        <div>HQ-Ngfw-1 (phase1-interface) # <span className="text-white">end</span></div>
                        <div>HQ-Ngfw-1 # <span className="text-white">config vpn ipsec phase2-interface</span></div>
                        <div>HQ-Ngfw-1 (phase2-interface) # <span className="text-white">edit "VPN-to-Branch-P2"</span></div>
                        <div>HQ-Ngfw-1 (VPN-to-Branch-P2) # <span className="text-red-400">set phase1name "VPN-to-Branch"</span></div>
                        <div className="text-red-500 font-bold bg-red-950/40 p-2 border-l-4 border-red-600 my-2 rounded">
                            config vpn ipsec phase2-interface: [parameter(s) invalid. detail: object mismatch]<br />
                            Command fail. Return code -23
                        </div>
                        <div className="text-yellow-500 italic">
                            ⚠️ Error Note: Directly running the script via CLI bypasses ADOM DB object validation, leading to standard FortiOS transaction mismatch failures when trying to link unpushed profiles.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Q14: System Settings - Meta Fields Configuration
    if (questionId === 14) {
        return (
            <div className="bg-slate-100 rounded-lg border border-slate-300 shadow-md font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6 font-medium">
                <div className="bg-slate-200 border-b border-slate-300 p-2.5 font-bold text-slate-700 flex justify-between items-center">
                    <span className="flex items-center"><Settings size={14} className="mr-2 text-indigo-600" /> System Settings &gt; Meta Fields</span>
                    <span className="bg-indigo-150 text-indigo-800 px-2 py-0.5 rounded font-mono text-[10px]">ADOM-level Attributes</span>
                </div>
                <div className="p-4 bg-white space-y-4">
                    <div className="flex gap-2">
                        <button className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-1 flex items-center font-bold text-[10px] uppercase"><Plus size={12} className="mr-1"/> Add Meta Field</button>
                    </div>
                    <div className="border border-slate-200 rounded overflow-hidden">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-650">
                                <tr>
                                    <th className="p-2 border-r">Field Name</th>
                                    <th className="p-2 border-r">Object Type Associative</th>
                                    <th className="p-2 border-r">Importance Type</th>
                                    <th className="p-2">Length Target</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y font-mono">
                                <tr className="hover:bg-slate-50">
                                    <td className="p-2 border-r text-indigo-900 font-bold">Department</td>
                                    <td className="p-2 border-r text-slate-600 font-sans">Device Manager — Device Table</td>
                                    <td className="p-2 border-r text-amber-600 font-sans font-semibold">⚠️ Optional Attribute</td>
                                    <td className="p-2 text-slate-500">32 Bytes max</td>
                                </tr>
                                <tr className="hover:bg-slate-50 bg-blue-50/40">
                                    <td className="p-2 border-r text-indigo-900 font-bold">Location_ID</td>
                                    <td className="p-2 border-r text-slate-600 font-sans">Policy and Objects — Firewall Address</td>
                                    <td className="p-2 border-r text-red-600 font-sans font-semibold">🚨 Required Attribute</td>
                                    <td className="p-2 text-slate-500">16 Bytes max</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-2 rounded text-[10px] text-blue-900 leading-relaxed font-sans">
                        ℹ️ <strong>Meta Fields Info:</strong> Meta fields are custom mapping attributes. Once defined, they can be inserted directly as custom variable inputs/objects within firewall address configurations, devices, and mappings globally.
                    </div>
                </div>
            </div>
        );
    }

    // Q12: ADOM Revisions Comparison Screen
    if (questionId === 12) {
        return (
            <div className="bg-slate-100 rounded-lg border border-slate-300 shadow-md font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6 font-medium">
                <div className="bg-slate-200 border-b border-slate-300 p-2.5 font-bold text-slate-700 flex justify-between items-center">
                    <span className="flex items-center"><FileText size={14} className="mr-2 text-indigo-600" /> ADOM Revision Management &gt; Database Difference</span>
                    <span className="bg-slate-300 text-slate-700 px-2 py-0.5 rounded font-mono text-[10px]">ADOM_REV_v09</span>
                </div>
                
                <div className="p-4 bg-white space-y-4">
                    {/* Header bar */}
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded border">
                        <div className="flex gap-4">
                            <div><span className="text-slate-500 block text-[9px] uppercase font-bold">Source Snapshot</span> <strong className="font-mono text-xs">ADOM Policies (v09)</strong></div>
                            <div className="text-slate-350 self-center">➔ vs ➔</div>
                            <div><span className="text-slate-500 block text-[9px] uppercase font-bold">Target Database</span> <strong className="font-mono text-xs">Device-Level Local DB</strong></div>
                        </div>
                        <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded font-bold text-[10px] uppercase">Revisions Mapped</span>
                    </div>

                    {/* Diff Terminal */}
                    <div className="bg-slate-900 rounded p-3 font-mono text-[11px] leading-relaxed text-slate-300 shadow-inner">
                        <div className="text-slate-500 border-b border-slate-800 pb-1.5 flex justify-between items-center">
                            <span>Diffing: Policy Packages and Objects Snapshot</span>
                            <span className="text-emerald-500 text-[10px]">MATCH SUCCESSFUL</span>
                        </div>
                        <div className="space-y-0.5 pt-2 font-mono text-[11px]">
                            <div className="text-slate-550">--- ADOM: Site1 Policy Pack [Revision #09_Snapshot]</div>
                            <div className="text-slate-550">+++ Device: HQ-NGFW-1 local database</div>
                            <div className="text-indigo-400">@@ -25,2 +25,4 @@ config firewall policy</div>
                            <div className="text-red-400 bg-red-950/20">-    set srcaddr "Internal_Corporate_Subnet"</div>
                            <div className="text-emerald-400 bg-emerald-950/20">+    set srcaddr "HQ_LAN_Subnet" <span className="text-slate-500 italic">(Updated per-device mapping reference)</span></div>
                            <div className="text-red-400 bg-red-950/20">-    set service "HTTP" "SMTPS"</div>
                            <div className="text-emerald-400 bg-emerald-950/20">+    set service "HTTP_Custom" "HTTPS" "SMTP_Service"</div>
                        </div>
                    </div>

                    {/* Description instruction message */}
                    <div className="bg-indigo-50 border border-indigo-150 p-2.5 rounded text-[11px] text-indigo-950 leading-relaxed font-sans">
                        💡 <strong>Concept Clarification:</strong> ADOM Revisions compare historical saved snapshots of policy templates, rules, and global package levels against the actual, currently modified or stored Device-level databases.
                    </div>
                </div>
            </div>
        );
    }

    // Q10: Run Script - NetFlow object unrecognized on line 4
    if (questionId === 10) {
        return (
            <div className="space-y-4 w-full max-w-3xl mx-auto mb-6 text-slate-800">
                <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner border border-slate-700 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto space-y-3">
                    <div className="text-slate-500 border-b border-slate-800 pb-1.5 flex justify-between items-center font-sans font-medium">
                         <span className="flex items-center"><Terminal size={14} className="mr-2 text-red-400" /> CLI Script Editor: Deploy-NetFlow</span>
                         <span className="bg-red-950 text-red-400 border border-red-900 px-2.5 py-0.5 rounded text-[10px] uppercase font-bold animate-pulse">Error on Line 4</span>
                    </div>

                    {/* Script draft lines */}
                    <div className="font-mono text-[11px] border-b border-slate-800 pb-2 space-y-0.5">
                        <div className="flex"><span className="text-slate-600 w-6">1:</span><span className="text-white">config system netflow</span></div>
                        <div className="flex"><span className="text-slate-600 w-6">2:</span><span className="text-slate-400">&nbsp;&nbsp;&nbsp;&nbsp;set collector-ip 10.200.1.5</span></div>
                        <div className="flex"><span className="text-slate-600 w-6">3:</span><span className="text-slate-400">&nbsp;&nbsp;&nbsp;&nbsp;set collector-port 2055</span></div>
                        <div className="flex bg-red-950/40 border-l-2 border-red-500"><span className="text-red-500 w-6 font-bold">&gt;4:</span><span className="text-red-300 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;set source-ip "port3_ip"</span><span className="text-slate-500 italic ml-2">(Object Unrecognized Error!)</span></div>
                        <div className="flex"><span className="text-slate-600 w-6">5:</span><span className="text-white">end</span></div>
                    </div>

                    {/* Status Console output */}
                    <div className="text-[11px] space-y-1 font-mono">
                        <div className="text-slate-400 italic">Starting Script execution on Device Database [HQ-NGFW-1 (VDOM: root)]...</div>
                        <div>HQ-NGFW-1 # config system netflow</div>
                        <div>HQ-NGFW-1 (netflow) # set collector-ip 10.200.1.5</div>
                        <div>HQ-NGFW-1 (netflow) # set collector-port 2055</div>
                        <div className="text-red-400 font-bold">
                            HQ-NGFW-1 (netflow) # set source-ip "port3_ip"<br />
                            <span className="bg-red-950 px-2 py-0.5 border border-red-900 inline-block mt-1">
                                ❌ value: "port3_ip" - Object unrecognized. (Line 4 execution halted)
                            </span>
                        </div>
                    </div>
                </div>

                {/* Explanation advice box */}
                <div className="bg-amber-50 border border-amber-200 p-3 rounded text-[11.5px] leading-relaxed text-amber-950">
                    💡 <strong>Insight:</strong> To fix this error, the administrator must configure <strong>Metadata Variables</strong> (e.g. <code>$port3_ip</code>) to correctly bind VDOM/interface level mappings on FortiManager script compiler, preventing hardcoded name resolution failures.
                </div>
            </div>
        );
    }

    // Q13: Edit Dynamic IP Pool
    if (questionId === 13) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-inner mb-6 w-full max-w-3xl mx-auto">
                <div className="border-b border-slate-300 pb-2 mb-4 text-sm font-bold text-slate-700">Edit Dynamic IP Pool</div>
                <div className="bg-white p-5 rounded shadow-sm space-y-4 text-sm border border-slate-200">
                    <div className="flex items-center"><span className="text-slate-600 w-1/3">Name</span><div className="flex-1"><input disabled value="Internet-pool" className="w-full border border-slate-200 p-1.5 rounded bg-slate-50 text-slate-500" /></div></div>
                    <div className="flex items-center"><span className="text-slate-600 w-1/3">Type</span><div className="flex-1"><select className="w-full border border-slate-300 p-1.5 rounded outline-none font-medium"><option>One-to-One</option></select></div></div>
                    <div className="flex items-center"><span className="text-slate-600 w-1/3 text-xs">External IP Range ℹ️</span><div className="flex-1"><input disabled value="100.65.0.110-100.65.0.111" className="w-full border border-slate-300 p-1.5 font-mono text-xs rounded bg-white text-slate-800" /></div></div>
                    <div className="mt-4 pt-4 border-t border-slate-200 flex items-center text-xs">
                        <span className="text-slate-500 mr-4">ARP Reply</span>
                        <div className="w-8 h-4 bg-emerald-500 rounded-xl relative">
                            <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Q29: Downloaded Import Report Mockup
    if (questionId === 29) {
        return (
            <div className="space-y-6 w-full max-w-3xl mx-auto mb-6 text-slate-800">
                {/* Visual Downloaded Import Report Terminal / Box */}
                <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner border border-slate-700 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto space-y-2">
                    <div className="text-slate-500 border-b border-slate-800 pb-1.5 mb-1.5 flex justify-between items-center font-sans">
                         <span className="flex items-center">📊 Device Policy Package Import Report</span>
                         <span className="text-amber-500 font-bold">⚠️ COMPLETED WITH WARNINGS</span>
                    </div>
                    <div className="text-slate-400 font-mono text-[11px]">
                        [2026-05-26 15:44:02] Initializing Policy & Object database import for Remote-FortiGate [VDOM: root]<br />
                        [2026-05-26 15:44:03] Connect to Remote-FortiGate device... Successful.<br />
                        [2026-05-26 15:44:04] Fetching active configuration files... Connected.<br />
                        [2026-05-26 15:44:06] Checking ADOM-layer database objects...<br />
                        <span className="text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;- Address [REMOTE_SUBNET] matched globally. No conflict. OK</span><br />
                        <span className="text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;- Service [TCP_8080] imported to ADOM tables. OK</span><br />
                        [2026-05-26 15:44:08] Processing interface mapping alignments...<br />
                        <span className="text-amber-400">&nbsp;&nbsp;&nbsp;&nbsp;- local port3 mapped to ADOM Normalized [WAN]. Binding created.</span><br />
                        <span className="text-red-400">&nbsp;&nbsp;&nbsp;&nbsp;- Warning: local port4 failed mapping target. (No WAN/LAN Normalized map found). Falling back to dynamic interface profile.</span><br />
                        [2026-05-26 15:44:10] Compiling policies into ADOM structures...<br />
                        <span className="text-emerald-400 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;+ Success: Created new Policy Package [Remote-FortiGate_root] in ADOM "My_ADOM" database.</span><br />
                        [2026-05-26 15:44:11] Import sequence processed. Finished with warnings.
                    </div>
                </div>

                {/* ADOM Database visual representation */}
                <div className="bg-slate-100 rounded border border-slate-300 font-sans text-xs overflow-hidden text-slate-800 shadow">
                    <div className="bg-slate-200 border-b border-slate-300 p-2 font-bold text-slate-700 flex justify-between items-center">
                        <span className="flex items-center"><Server size={14} className="mr-2 text-indigo-600" /> ADOM: My_ADOM - Policy Packages Database</span>
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px]">ADOM v7.6</span>
                    </div>
                    <div className="p-3 bg-white">
                        <div className="border border-slate-200 rounded">
                            <div className="bg-slate-50 border-b p-2 font-bold text-slate-600">Policy Package List:</div>
                            <div className="p-2 space-y-1 bg-white font-mono">
                                <div className="p-1 px-2 hover:bg-slate-50 flex items-center justify-between text-slate-500">
                                    <span>📄 HQ-Package</span>
                                    <span className="text-[10px] text-slate-400">Synchronized</span>
                                </div>
                                <div className="p-1 px-2 border-t bg-indigo-50/70 border-indigo-100 rounded text-indigo-900 flex items-center justify-between font-bold">
                                    <span>📄 Remote-FortiGate_root</span>
                                    <span className="bg-indigo-100 text-indigo-700 text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider font-sans">New Package Created</span>
                                </div>
                                <div className="p-1 px-2 border-t hover:bg-slate-50 flex items-center justify-between text-slate-500">
                                    <span>📄 BranchO-Package</span>
                                    <span className="text-[10px] text-slate-400">Synchronized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Q21: Import Device Wizard - Policy and Object Import settings
    if (questionId === 21) {
        return (
            <div className="bg-slate-100 rounded-lg border border-slate-300 shadow-lg font-sans text-xs w-full max-w-3xl mx-auto overflow-hidden text-slate-800 mb-6 font-medium">
                {/* Wizard header */}
                <div className="bg-slate-200 border-b border-slate-300 p-2.5 font-bold text-slate-700 flex items-center justify-between">
                    <span className="flex items-center"><Plus size={14} className="mr-2 text-indigo-600" /> Import Device Wizard</span>
                    <span className="text-[10px] text-slate-500 font-mono">Device: HQ-NGFW-1</span>
                </div>

                {/* Step indicator */}
                <div className="bg-slate-50 border-b border-slate-200 p-2 flex justify-around text-slate-500 font-bold text-[10px] uppercase tracking-wider">
                    <span className="text-slate-400">1. Select Device</span>
                    <span className="text-indigo-600 border-b-2 border-indigo-600 pb-0.5">● 2. Import Options</span>
                    <span className="text-slate-400">3. Import Review</span>
                </div>

                {/* Wizard body options */}
                <div className="p-4 bg-white space-y-4">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded text-[11px] leading-relaxed text-blue-900">
                        Select object integration criteria for the policy database validation. Defaults to dependent items.
                    </div>

                    <div className="space-y-3">
                        <div className="font-semibold text-slate-700 uppercase tracking-wide text-[10px]">Import Option Criteria:</div>

                        <div className="p-3 rounded border border-indigo-200 bg-indigo-50/50 flex items-start gap-3">
                            <input type="radio" checked readOnly className="mt-0.5 focus:ring-0 text-indigo-600" />
                            <div>
                                <div className="font-bold text-slate-900 text-xs">Import only policy dependent objects</div>
                                <div className="text-slate-500 mt-1 leading-snug">
                                    Imports only objects that are actively referenced inside policies of HQ-NGFW-1. Reduces ADOM-layer database size. unreferenced objects will be discarded from the FMG DB.
                                </div>
                            </div>
                        </div>

                        <div className="p-3 rounded border border-slate-200 bg-white hover:bg-slate-50 flex items-start gap-3 cursor-not-allowed">
                            <input type="radio" disabled className="mt-0.5" />
                            <div>
                                <div className="font-bold text-slate-400 text-xs">Import all database objects</div>
                                <div className="text-slate-400 mt-1 leading-snug">
                                    Imports all defined objects from the local FortiGate config table, regardless of reference state.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alert Warning Panel */}
                    <div className="p-3 rounded border border-amber-200 bg-amber-50/60 text-amber-950 flex gap-2">
                        <span className="text-base font-bold">⚠️</span>
                        <div className="space-y-0.5">
                            <div className="font-bold">Object Omission Action Note:</div>
                            <div className="text-[10px] leading-snug">
                                Local unreferenced custom settings (such as custom IPS signatures or security profiles that are not currently mapped to an active firewall rule) will be discarded during import. This might lead to mismatches if policies are re-installed later.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wizard footer */}
                <div className="bg-slate-50 p-2.5 border-t border-slate-200 flex justify-end gap-2 text-[11px]">
                    <button className="bg-slate-100 border border-slate-300 text-slate-500 px-3 py-1 font-medium cursor-not-allowed">Back</button>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded shadow-sm font-bold">Next &gt;</button>
                    <button className="bg-white border border-slate-300 text-slate-600 px-3 py-1 rounded shadow-sm">Cancel</button>
                </div>
            </div>
        );
    }

    // Q32: Run Script on Device Database Mockup
    if (questionId === 32) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-md mb-6 w-full max-w-3xl mx-auto">
                <div className="border-b border-slate-300 pb-2 mb-4 text-xs font-bold text-slate-700 flex justify-between items-center">
                    <span className="flex items-center"><Terminal size={14} className="mr-2 text-indigo-600" /> Run Script Wizard</span>
                    <span className="bg-indigo-150 text-indigo-850 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Script Option selected</span>
                </div>
                
                <div className="bg-white p-5 rounded shadow-sm space-y-4 text-xs border border-slate-200">
                    <div className="flex items-center"><span className="text-slate-600 w-1/3">Script Name</span><div className="flex-1 font-mono font-bold">Modify_DNS_Settings</div></div>
                    
                    <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                        <span className="text-slate-500 font-bold uppercase text-[9px] tracking-wide mb-1">Run Script Target Options:</span>
                        
                        <label className="flex items-start gap-2.5 p-2.5 rounded border border-slate-100 hover:bg-slate-50 cursor-not-allowed">
                            <input type="radio" checked={false} disabled className="mt-0.5" />
                            <div>
                                <span className="font-bold text-slate-500 block">Device Database (offline database updates)</span>
                                <span className="text-slate-400 block text-[10px] mt-0.5">Executes the script commands locally on current offline copy of device configurations in FortiManager.</span>
                            </div>
                        </label>

                        <label className="flex items-start gap-2.5 p-2.5 rounded border-2 border-indigo-500 bg-indigo-50/50 cursor-pointer">
                            <input type="radio" checked={true} readOnly className="mt-0.5 text-indigo-600" />
                            <div>
                                <span className="font-bold text-slate-900 block">Device Database (default choice for offline prep)</span>
                                <span className="text-slate-600 block text-[10px] mt-0.5">Saves all configuration modifications directly on FortiManager's schema files. Mark status as [Modified].</span>
                            </div>
                        </label>

                        <label className="flex items-start gap-2.5 p-2.5 rounded border border-slate-100 hover:bg-slate-50 cursor-not-allowed">
                            <input type="radio" checked={false} disabled className="mt-0.5" />
                            <div>
                                <span className="font-bold text-slate-500 block">Remote FortiGate Directly (via CLI)</span>
                                <span className="text-slate-400 block text-[10px] mt-0.5">Attempts to log into the physical remote live FortiGate terminal and run CLI lines sequentially in real time.</span>
                            </div>
                        </label>
                    </div>

                    {/* Result alert banner showing the offline outcomes */}
                    <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded flex gap-2">
                        <span className="font-bold text-sm">💡</span>
                        <div className="space-y-1">
                            <p className="font-bold">Device Database Run Outcomes:</p>
                            <ul className="list-disc pl-4 space-y-1 text-[10px] text-indigo-950 font-medium leading-relaxed">
                                <li>The target device's FMG database file gets updated, transitioning <strong>Config Status</strong> to <span className="text-amber-705 font-bold">Modified</span>.</li>
                                <li>Modifications must be explicitly pushed to the actual device using the <strong>Install Wizard</strong> to take effect in production.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Q33: diagnose test deploymanager reloadconf error mockup
    if (questionId === 33) {
        return (
            <div className="space-y-4 w-full max-w-3xl mx-auto mb-6 text-slate-800">
                {/* Visual CLI console with diagnose command failure */}
                <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner border border-slate-700 text-slate-350 font-mono text-xs leading-relaxed overflow-x-auto space-y-2">
                    <div className="text-slate-500 border-b border-slate-800 pb-1.5 flex justify-between items-center font-sans font-medium">
                         <span className="flex items-center"><Terminal size={14} className="mr-2 text-indigo-400" /> FortiManager CLI Console</span>
                         <span className="bg-red-950/80 text-red-500 border border-red-900/60 px-2 py-0.5 rounded text-[9px] font-bold">Execution Error</span>
                    </div>
                    <div className="space-y-1 text-[11px]">
                        <div>FortiManager-HQ-76 # <span className="text-white font-bold">diagnose test deploymanager reloadconf 262</span></div>
                        <div className="text-slate-400">Initialize deployment manager reload loader database engine...</div>
                        <div className="text-slate-400">Target identified: Device ID [262], Name [HQ-NGFW-1 (root)]</div>
                        <div className="text-red-400 font-bold bg-slate-900/40 p-2 border-l-2 border-red-500">
                            FMG_DM_ERROR: Device is defined as a Model Device in persistent tables.<br />
                            Primary synchronization tunnel (FGFM) has never succeeded or registered.<br />
                            Unable to fetch current baseline schema files. Reload local cache aborted.
                        </div>
                        <div className="text-slate-500">Command fail. Return status code -55</div>
                    </div>
                </div>

                {/* Insight banner */}
                <div className="p-3 rounded border border-amber-200 bg-amber-50/60 text-amber-950 text-xs leading-relaxed">
                    ⚙️ <strong>Note:</strong> Model devices are offline configuration models. They lack physical device-to-manager SSL tunnel records, making direct configuration reload commands fail until a physical FortiGate device connects and synchronizes successfully.
                </div>
            </div>
        );
    }

    // Q23: FortiToken Mobile copy failed: error -999
    if (questionId === 23) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-805 border border-slate-300 shadow-md mb-6 w-full max-w-3xl mx-auto text-slate-800">
                <div className="border-b border-slate-300 pb-2 mb-4 text-xs font-bold text-slate-705 flex justify-between items-center">
                    <span className="flex items-center"><Shield size={14} className="mr-2 text-rose-600" /> Install Wizard - Push FortiToken Mobile</span>
                    <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Failed</span>
                </div>
                
                <div className="bg-white p-5 rounded border border-slate-200 mt-2 space-y-4">
                    {/* Error Banner */}
                    <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-950 rounded flex items-start gap-2.5">
                        <AlertTriangle className="text-rose-600 flex-shrink-0 mt-0.5" size={16} />
                        <div>
                            <p className="font-bold text-xs">Vdom copy failed: error -999</p>
                            <p className="text-[11px] text-rose-800 mt-1 leading-relaxed">
                                FortiManager failed to apply the token allocation on firewall <strong>HQ-NGFW-1 (vdom: root)</strong>. 
                                Reason: Object 'HR_user' references a static user local mapping which cannot be deployed without variable translation.
                            </p>
                        </div>
                    </div>

                    {/* GUI Visual of the Policy Object */}
                    <div className="border border-slate-200 rounded overflow-hidden">
                        <div className="bg-slate-50 p-2 border-b border-slate-200 text-[10px] font-bold text-slate-650 flex justify-between">
                            <span>User Assignment Scheme</span>
                            <span className="text-rose-600">Local Mapping Detected</span>
                        </div>
                        <div className="p-3 text-[11px] grid grid-cols-3 gap-2">
                            <span className="text-slate-500 font-medium font-sans">User Name:</span>
                            <span className="col-span-2 font-semibold">HR_user</span>
                            
                            <span className="text-slate-500 font-medium font-sans">Two-Factor Auth:</span>
                            <span className="col-span-2 flex items-center gap-1.5 font-sans">
                                <span className="bg-slate-150 px-1.5 py-0.5 rounded text-[9px] font-bold text-slate-700">FortiToken Mobile</span>
                                <span className="font-medium text-slate-500 text-[10px]">Value: FTMXXXXXXXX</span>
                            </span>
                        </div>
                    </div>

                    {/* Hint / Insight box pointing directly to metadata variables correct answer */}
                    <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded text-[11px] flex gap-2">
                        <div className="text-base">💡</div>
                        <p className="leading-relaxed text-amber-950 font-medium">
                            <strong>Architectural Insight:</strong> Centralized policy packages that map identical tokens to different physical users require the use of <strong>metadata variables</strong>. This abstracts the unique per-device token values during push campaigns.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Q24: Device Database status mockup
    if (questionId === 24) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-md mb-6 w-full max-w-3xl mx-auto">
                <div className="border-b border-slate-300 pb-2 mb-4 text-xs font-bold text-slate-700 flex justify-between items-center">
                    <span className="flex items-center"><HardDrive size={14} className="mr-2 text-indigo-600" /> Device Manager &gt; Managed Devices</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Modified Status</span>
                </div>

                <div className="bg-white rounded overflow-hidden border border-slate-200 shadow-sm">
                    {/* Device Grid Header */}
                    <table className="w-full text-left border-collapse text-[11px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                                <th className="p-2.5">Device Name</th>
                                <th className="p-2.5">Platform</th>
                                <th className="p-2.5">Config Status</th>
                                <th className="p-2.5">DB Status</th>
                                <th className="p-2.5">Cond / Revision</th>
                                <th className="p-2.5">Template Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                                <td className="p-2.5 font-bold text-slate-900 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    HQ-NGFW-1
                                </td>
                                <td className="p-2.5 text-slate-500">FortiGate-100F</td>
                                <td className="p-2.5">
                                    <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded text-[10px]">Modified</span>
                                </td>
                                <td className="p-2.5 font-mono text-slate-600 font-medium">modified</td>
                                <td className="p-2.5">
                                    <span className="font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-[10px]">cond: pending</span>
                                </td>
                                <td className="p-2.5">
                                    <span className="font-mono text-indigo-700 font-semibold">template:[modified]default</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-3 bg-indigo-50 border border-indigo-150 rounded space-y-1.5 text-xs text-indigo-950">
                    <p className="font-bold flex items-center gap-1"><Check size={14} className="text-indigo-600" /> CLI Diagnostics Output Reference:</p>
                    <div className="bg-[#1e1e1e] text-slate-350 font-mono text-[10px] p-2.5 rounded border border-slate-800 leading-normal">
                        FMG-HQ-76 # <span className="text-white font-bold">diagnose dvm device list HQ-NGFW-1</span><br />
                        name: HQ-NGFW-1 | ostype: fos | vdom: root<br />
                        conn-status: up | <strong className="text-amber-400 font-mono">config-status: modified</strong> | <strong className="text-amber-400 font-mono">cond: pending</strong><br />
                        assigned-template: default (assigned <strong>status: modified</strong>)
                    </div>
                </div>
            </div>
        );
    }

    // Q25: Policy Packages Double Assignment Error Mockup
    if (questionId === 25) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-md mb-6 w-full max-w-3xl mx-auto">
                <div className="border-b border-slate-300 pb-2 mb-4 text-xs font-bold text-slate-705 flex justify-between items-center">
                    <span className="flex items-center"><FileText size={14} className="mr-2 text-indigo-600" /> Policy & Objects &gt; Policy Packages</span>
                    <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Duplicate Package Attempt</span>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border border-slate-200 text-xs space-y-3.5">
                    <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded border border-slate-200">
                        <div>
                            <span className="text-slate-500 font-bold block text-[9px] uppercase tracking-wide">Target Package selected</span>
                            <span className="font-bold text-slate-900 text-xs text-indigo-700">Central_Policy_Pack</span>
                        </div>
                        <div className="text-right">
                            <span className="text-slate-500 font-bold block text-[9px] uppercase tracking-wide">Current Target Device</span>
                            <span className="font-mono font-bold text-slate-800">BR1-FGT-1</span>
                        </div>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 flex gap-2.5">
                        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                        <div>
                            <p className="font-bold text-xs">Policy Package Assignment Conflict Detected:</p>
                            <p className="text-[10.5px] text-amber-900 mt-1 leading-normal">
                                Device <strong>BR1-FGT-1</strong> is currently assigned to policy package <strong>Branch_Local_Pack</strong>. 
                                FortiManager only permits a single policy package to be actively mapped to any device interface at any given time.
                            </p>
                        </div>
                    </div>

                    <div className="border border-slate-200 rounded overflow-hidden">
                        <div className="bg-slate-50 p-2 border-b border-slate-200 text-[10px] font-bold text-slate-500">ASSIGNMENT MANAGER MATRIX</div>
                        <table className="w-full text-left text-[11px]">
                            <thead>
                                <tr className="border-b border-slate-100 text-slate-500 bg-slate-50/50">
                                    <th className="p-2">Device</th>
                                    <th className="p-2">Current Mapped Package</th>
                                    <th className="p-2">Requested Target Package</th>
                                    <th className="p-2 text-right">Supported Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-100">
                                    <td className="p-2 font-bold font-sans">BR1-FGT-1</td>
                                    <td className="p-2 text-slate-600">Branch_Local_Pack (active)</td>
                                    <td className="p-2 text-indigo-600 font-semibold font-sans">Central_Policy_Pack</td>
                                    <td className="p-2 text-right">
                                        <span className="bg-red-50 text-red-750 border border-red-200 px-1.5 py-0.5 rounded text-[9px] font-bold font-sans">Replace Current Mapping</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    // Q27: After moving ISFW device to a new ADOM mockup
    if (questionId === 27) {
        return (
            <div className="bg-slate-100 rounded-lg p-4 font-sans text-slate-800 border border-slate-300 shadow-md mb-6 w-full max-w-3xl mx-auto">
                <div className="border-b border-slate-300 pb-2 mb-4 text-xs font-bold text-slate-700 flex justify-between items-center">
                    <span className="flex items-center"><Monitor size={14} className="mr-2 text-indigo-600" /> Device Manager &gt; Managed Devices</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Moved Device State</span>
                </div>
                
                <p className="text-[11px] text-slate-600 mb-3 leading-relaxed font-sans">
                    Visual status of the security appliance <strong>ISFW</strong> in the destination ADOM database right after the administrative move:
                </p>

                <div className="bg-white rounded overflow-hidden border border-slate-205 shadow-sm">
                    <table className="w-full text-left border-collapse text-[11px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                                <th className="p-2.5">Device Name</th>
                                <th className="p-2.5">ADOM Database</th>
                                <th className="p-2.5">Config Status</th>
                                <th className="p-2.5 text-blue-600 font-bold">Policy Status (pkg)</th>
                                <th className="p-2.5">Connection Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-slate-50/50">
                                <td className="p-2.5 font-bold text-slate-900 flex items-center gap-1.5 font-sans">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                                    ISFW
                                </td>
                                <td className="p-2.5 font-mono text-slate-500">Internal_Appliance_ADOM</td>
                                <td className="p-2.5">
                                    <span className="bg-emerald-50 text-emerald-800 font-medium px-1.5 py-0.5 rounded text-[10px] font-sans">Synchronized</span>
                                </td>
                                <td className="p-2.5">
                                    <span className="font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-1 rounded text-[11px]">pkg: [never-installed]</span>
                                </td>
                                <td className="p-2.5 text-slate-600 font-medium font-sans">Connected</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-3 bg-blue-50 border border-blue-150 rounded text-[11px] text-blue-950 leading-relaxed font-sans font-medium">
                    ℹ️ <strong>Status Insight:</strong> Moving a device between ADOMs leaves the device-level configurations intact (Synchronized), but completely clears any policy package associations. It enters the destination ADOM with a <strong>never-installed</strong> status until a package is constructed and deployed.
                </div>
            </div>
        );
    }

  // Default fallback for any other question that has a codeBlock
  if (codeBlock) {
      return (
         <div className="bg-[#1e1e1e] p-4 rounded border border-red-900/50 mb-6 text-red-400 font-mono text-sm leading-relaxed overflow-x-auto shadow-inner w-full max-w-4xl mx-auto">
            {codeBlock.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
            ))}
         </div>
      );
  }

  return null;
}
