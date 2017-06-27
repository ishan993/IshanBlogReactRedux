////////////////////////////////////////
//Actions related to posts
///////////////////////////////////////

//Submit newPost form
export function submitNewPost(values){
    console.log("Submitting form w/ values: "+values);
    let submit = request.post("http://localhost:3000/createpost")
                        .send(values);
    return function(dispatch){
        submit.then((response)=>{
            console.log("I got my response here:"+JSON.stringify(response));
        }).catch(error=>{
            console.log("ERROR_ACTIONS_SUBMIT_NEW_POST"+JSON.stringify(error));
        })
    }
        
}

export const testToken = ()=>{
    let req = request.get(`${ROOT_URL}/hello`);

    req.then(()=>{
        
    });

}

//Fetch new post for ShowPost
export function fetchPostWithId(id){
    let fetch = request.get(`${ROOT_URL}/fetchpost/${id}`);

    return function(dispatch){
        fetch.then((response)=>{
            console.log("ACTION-->FETCHPOST-->SUCCESS_RESPONSE"+JSON.parse(response.text).postTitle);
            dispatch({type: FETCH_POST, payload: JSON.parse(response.text)})
        }).catch((error)=>{
            console.log("ACTION-->FETCHPOST-->ERROR_RESPONSE"+JSON.stringify(error));
        });
    }
}
//Add a link to content
export function addMarkdownLink(props){
    console.log()
    console.log("ACTIONS-->"+MARKDOWN_LINK_ADDED);
    return function(dispatch){
        dispatch(change('newPost', "postContent", props.content
                    +" "+"["+props.markdownText+"](//"+props.markdownURL+")"));
    }
}
//Add markdown for Bold, Italic & code
export function addMarkdownFormatting(props){
    var formattingString='';
    switch(props.formatting){
        case 'BOLD':
            formattingString = '**';
            return function(dispatch){
                dispatch(change('newPost', "postContent", props.content+" "+formattingString));
            }   
            break;
        case 'CODE':
            formattingString = '```';
            return function(dispatch){
                dispatch(change('newPost', "postContent", props.content+"\n"+formattingString));
            }
                break;
        case 'ITALIC':
            formattingString = '*';
            return function(dispatch){
                dispatch(change('newPost', "postContent", props.content+" "+formattingString));
            }
            break;
        default:
            break;
    }
}