
export function Button({title, loading = false, ...rest }){

    return(
  
    <button className="create__button" 
     type="button"
     disabled={loading}
     {...rest}
    
    >
        
        {loading ? 'loading...' : title}  
    </button>
  
    
);
}
// teste 