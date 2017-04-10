import React, {Component} from 'react';
import styled from 'styled-components';
import CreatePost from './create_post';


export default class ShowPost extends Component{

    render(){
        return(
            <div>
                <CreatePost />
            </div>
        );
    }

}