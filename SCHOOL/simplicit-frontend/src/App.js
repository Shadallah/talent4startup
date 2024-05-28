import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useRoutes,
// } from 'react-router-dom';
import ShowSchool from './components/ShowSchool';
import CreateSchool from './components/CreateSchool';
import UpdateSchool from './components/UpdateSchool';
import DeleteSchool from './components/DeleteShool';
import Home from './components/Home';


function App() {
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/schools/create' element={CreateSchool}/>
      <Route path='/schools/details/:id' element={ShowSchool}/>
      <Route path='/schools/update/:id' element={UpdateSchool}/>
      <Route path='/schools/delete/:id' element={DeleteSchool}/>
      
    </Routes>
  );
}

// function AppRoutes(){
//   const Routes = useRoutes(
//     [
//       {path:'/',element:<Home/>},
//       {path:'create/schools',element:<CreateSchool/>},
//       {path:'/schools/details/:id',element:<ShowSchool/>},
//       {path:'/schools/update/:id',element:<UpdateSchool/>}
//     ]
//   )
//   return Routes;
// }
// function App(){
//   return(
//     <Router>
//       <Home/>
//       <ShowSchool/>
//       <UpdateSchool/>
//       <AppRoutes/>
//     </Router>
//   )
// }

export default App;
