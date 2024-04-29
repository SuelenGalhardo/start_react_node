//import React from 'react';
export function Button({title, loading = false, ...rest }){

    return(
    <div className="create">
    <button className="create__button" 
     type="button"
     disabled={loading}
     {...rest}
    
    >
        
        {loading ? 'loading...' : title}  
    </button>
    </div>
    
);
}