import {lazy,Suspense} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {MotionConfig} from 'framer-motion';
import Layout from './components/Layout';
const Home=lazy(()=>import('./pages/Home'));const About=lazy(()=>import('./pages/About'));const Services=lazy(()=>import('./pages/Services'));
const Hse=lazy(()=>import('./pages/Hse'));const Contact=lazy(()=>import('./pages/Contact'));
const Projects=lazy(()=>import('./pages/Projects'));const ProjectDetail=lazy(()=>import('./pages/Projects').then(m=>({default:m.ProjectDetail})));
export default function App(){return <MotionConfig reducedMotion="user"><BrowserRouter><Suspense fallback={<div className="min-h-screen bg-navy"/>}><Routes><Route element={<Layout/>}>
 <Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="services" element={<Services/>}/><Route path="hse" element={<Hse/>}/>
 <Route path="projects" element={<Projects/>}/><Route path="projects/:id" element={<ProjectDetail/>}/><Route path="contact" element={<Contact/>}/></Route></Routes></Suspense></BrowserRouter></MotionConfig>}
