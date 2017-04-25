export const UPDATE_LOADING_GRAPHIC_VISIBLE = 'UPDATE_LOADING_GRAPHIC_VISIBLE';

export const toggleLoadingGraphicAction = (isLoading)=>{
    if(isLoading)
        return({type: UPDATE_LOADING_GRAPHIC_VISIBLE, payload: true});
    else    
        return({type: UPDATE_LOADING_GRAPHIC_VISIBLE, payload: false})
}