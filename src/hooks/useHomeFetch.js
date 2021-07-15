import  {useState,useEffect} from 'react';
import API from '../API';

//trạng thái ban đầu khi chưa render
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [ state,setState] = useState(initialState);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    //fetch the movie
    const fetchMovies = async(page,searchTerm="")=>{
       try{
          setLoading(true);
          setError(false);

          const movies = await API.fetchMovies(searchTerm,page);
          

          setState(prev => ({
            // thao tác vs arr ( mảng ) , ... định nghĩa mảng movies vs các thành phần riêng lẻ.
            ...movies,
            
            // trả về kết quả là mảng các movies lần lựa theo từng trang từ 1 -> 500, nếu ko loading nữa trả về mảng movie đã load.
            results:
            page > 1? [...prev.results,...movies.results] : [...movies.results]

          }))

    }catch(error){
        setError(true)
    }

    setLoading(false)
}

//side Effect hook, icludes about side effect, clean up ( in return()), dependecies (in [])
useEffect( () => {
    fetchMovies(1)
},[]) 

return {state,loading,error}
}