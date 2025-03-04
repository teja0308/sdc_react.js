const pathss = () => {
    const encodedPath = "L25leHQtY2hhbGxlbmdlL2NvbXBsZXRlP2tleT1wdXp6bGU3";
    
    const decodePath = () => {
        return atob(encodedPath);
    };
    const pat = decodePath();
    return { pat };
};

export default pathss;