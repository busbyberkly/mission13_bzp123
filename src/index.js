import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MovieCollection from './pages/MovieCollection';
import Podcasts from './pages/Podcasts';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <BrowserRouter>
            
      <Routes>
                
        <Route path="/" element={<Layout />}>
                    
          <Route index element={<Home />} />
                    
          <Route path="movies" element={<MovieCollection />} />
                    
          <Route path="podcast" element={<Podcasts />} />
                             
        </Route>
              
      </Routes>
          
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
