import React from 'react';
import { Settings, Plus, Edit, Trash2, Search, Check, AlertTriangle, HelpCircle, HardDrive, Server, Cloud, ChevronDown, Monitor } from 'lucide-react';

export const FortinetGUI = ({ questionId, codeBlock }: { questionId: number, codeBlock?: string }) => {
  
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
                 <span className="bg-blue-500 text-white px-3 py-1 border border-blue-600 rounded shadow-inner font-medium">Standalone</span>
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 border border-slate-300 rounded cursor-not-allowed">Primary</span>
                 <span className="bg-slate-100 text-slate-500 px-3 py-1 border border-slate-300 rounded cursor-not-allowed">Secondary</span>
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
