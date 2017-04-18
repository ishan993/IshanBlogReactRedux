export default ()=>{
    if(process.env.NODE_ENV === 'production'){
        return({
            name: 'Ishan',
            ROOT_URL: 'https://ishan-blog-backend.herokuapp.com'
        });
    }else{
        return({
            name: 'dumbfuck',
            ROOT_URL: 'localhost:3000'
        });
    }
}