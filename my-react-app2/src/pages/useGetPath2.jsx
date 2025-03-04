const useGetPath2 = () =>{
    localStorage.setItem("path2","/hidden-treasure");
    const path2 = localStorage.getItem("path2");
    return {path2};
}

export default useGetPath2;