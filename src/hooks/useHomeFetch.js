import  {useState,useEffect} from 'react';
import API from '../API';
import { Sessionstorage } from '../helpers';

//trạng thái ban đầu khi chưa render
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [search,setSearch] = useState('');  // search( state is init ).
    const [state,setState] = useState(initialState); // page state (in the begin = initialState)
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [isLoadMore,SetIsLoadMore] = useState(false);//set useState() with two props and the init is boolean: false .
 
    //fetch the movie
    const fetchMovies = async(page,search="")=>{
       try{
        setError(false); 
          setLoading(true);
         

          const movies = await API.fetchMovies(search,page);
          

          setState(prev => ({ //setState tra ve 1 oject {...movies,results}, initialState thanh prev
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
    SetIsLoadMore(false)
    
}
//side Effect hook, icludes about side effect, clean up ( in return()), dependecies (in [])
// to initial and search the movie
useEffect( () => { // the effect for fetch and search
  //set the title of page 
  document.title = "React Movie"  

  //check the search if mouting set session storage.
   if(!search){
     const sessionStorage = Sessionstorage('home');

     if(sessionStorage){
       setState(sessionStorage)
       return
     }
   }
  setState(initialState); // when the first mouting is render random array movies.
   
  fetchMovies(1,search); // search state changes will renders new movies in page 1, and the main image will render the fist in new array movies.}
 
},[search]) //if search (is state) changes ( its maybe changed in searchbars) the homepage will fetch the new array movies.

useEffect(()=>{
  if(!isLoadMore) return;
  return fetchMovies(state.page+1,search)
 // SetIsLoadMore(false);
},[isLoadMore,search,state])


//write session
useEffect(() =>{
  if(!search){
  sessionStorage.setItem('home',JSON.stringify(state))}
},[search,state])


return {state,loading,error,setSearch,search,SetIsLoadMore}
}