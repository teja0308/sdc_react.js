const useGetPath = () =>{
    localStorage.setItem("path","/panda");
    const path = localStorage.getItem("path");
    return {path}
}

export default useGetPath;