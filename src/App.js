import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import MovieList from './components/movieList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const API_KEY = process.env.REACT_APP_API_KEY; 
const API_URL_BASE = 'https://api.themoviedb.org/3';

function App() {
  const [movies,setMovies]= useState([]);
  const [searchTerm, setSearchTerm] = useState('averages');

  const notifyError = () => toast.error("hãy nhập tên phim");

  const searchMovies=async (title)=>{
    const response=await fetch(`${API_URL_BASE}/search/movie?api_key=${API_KEY}&query=${title}`);
    const data = await response.json();
    console.log(data.results);
    if(data.results && data.results.length>0){
      setMovies(data.results);
    }
    else{
      notifyError();
    }
  }

  useEffect(() => {
    searchMovies(searchTerm); 
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right" // Default position
        autoClose={5000}    // Close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
       <SearchBar onSearch={searchMovies} /> {/* Truyền hàm searchMovies xuống cho SearchBar */}
      <MovieList movies={movies} /> {/* Truyền danh sách phim xuống cho MovieList */}
    </div>
  );
}

export default App;
