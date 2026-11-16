export const nav=[{to:'/',label:'Home'},{to:'/about',label:'About'},{to:'/services',label:'Services'},{to:'/hse',label:'HSE & QA'},{to:'/projects',label:'Projects'},{to:'/contact',label:'Contact'}];
export const contact={
 head:'Plot 163b, Road 12, Federal Housing Estate (Agip Estate), Rumueme, Port Harcourt, Rivers State, Nigeria',
 branch:'No. 67 Usman Jikan Toro Street, Unguwan Dosa, Kaduna, Kaduna State, Nigeria',
 phones:['+2348091100233','+2348032846837','+2348035071951'],
 email:'info@petroxella.com', // provisional, pending client confirmation
 whatsapp:'2348091100233'};
export const rc='1144557';
export interface Service{id:string;no:string;title:string;summary:string;items:string[];image:string}
export const services:Service[]=[
{id:'oil-gas',no:'01',title:'Oil & Gas',summary:'Facilities, pipelines, tank farms and offshore/onshore support.',image:'/petroxella-img/1.jpeg',items:['Engineering, Procurement, Construction and Installation (EPCI)','Petroleum Product Marketing','Pipeline and Flowline Construction','Tank Farm Operations and Maintenance','Offshore and Onshore Support','Corrosion Analysis']},
{id:'logistics-marine',no:'02',title:'Logistics & Marine',summary:'Vessels, product supply and marine and land transportation.',image:'/petroxella-img/2.jpeg',items:['Vessel Chartering and Management','Petroleum and Petrochemical Product Supply','Marine and Land Transportation','Shipping','Chandelling']},
{id:'environment-civil',no:'03',title:'Environment & Civil Engineering',summary:'Marine civil works, land and environmental services.',image:'/petroxella-img/3.jpeg',items:['Dredging','Jetty and Ramp Construction','Piling','Shore Protection','Land Reclamation','Environmental Remediation','Waste Management']},
{id:'power-renewables',no:'04',title:'Power & Renewables',summary:'Power equipment and solar and hydro solutions.',image:'/petroxella-img/4.jpeg',items:['Transformers','Substations','Generating Sets and Turbines','Inverters','Solar Panels and Photovoltaic Systems','Small-Scale Hydro','Electrical Cables and Materials']},
{id:'technical-supply',no:'05',title:'Technical & Industrial Supply',summary:'Industrial equipment and instrumentation supply.',image:'/petroxella-img/5.jpeg',items:['Gyro Marine Stabilizers','Instrumentation','Compressors','Heat Exchangers','Measuring Instruments','Corrosion-Preventing Paints','Valves and Fittings']},
{id:'manpower-community',no:'06',title:'Manpower & Community',summary:'People, training and community-facing services.',image:'/petroxella-img/6.jpeg',items:['Technical Recruitment','Training','Community Relations Services','General Contracting']}];
export const stats=[{to:10,suffix:'+',label:'Years of experience'},{to:100,suffix:'%',label:'Nigerian ownership'}];
export const compliance=['NCDMB','CASHES','SON','DPR'];
export const localStd=['FMOE','SON','DPR'];
export const intlStd=['APHA','ASTM','API','FAO','UNESCO','WHO','UNEP'];
export interface Project{id:string;name:string;sector:string;location:string;description:string;image?:string;placeholder:boolean}
// PLACEHOLDERS ONLY: replace with real case studies supplied by client.
export const projects:Project[]=[
{id:'sample-1',name:'Sample Project Name',sector:'Oil & Gas',location:'Location TBC',description:'Placeholder description. Real scope to be supplied by Petroxella.',image:'/petroxella-img/7.jpeg',placeholder:true},
{id:'sample-2',name:'Sample Project Name',sector:'Logistics & Marine',location:'Location TBC',description:'Placeholder description. Real scope to be supplied by Petroxella.',image:'/petroxella-img/8.jpeg',placeholder:true},
{id:'sample-3',name:'Sample Project Name',sector:'Environment & Civil',location:'Location TBC',description:'Placeholder description. Real scope to be supplied by Petroxella.',image:'/petroxella-img/9.jpeg',placeholder:true},
{id:'sample-4',name:'Sample Project Name',sector:'Power & Renewables',location:'Location TBC',description:'Placeholder description. Real scope to be supplied by Petroxella.',image:'/petroxella-img/10.jpeg',placeholder:true}];
