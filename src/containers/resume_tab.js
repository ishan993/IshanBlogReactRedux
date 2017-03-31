import React, {Component} from 'react';
import styled from 'styled-components';

const ResumeTabWrapper = styled.div`
    width: 80%;
    margin: auto;
    margintop: 40px;

    @media only screen and (min-width: 768px) {
        margin-top: 65px;
        margin: auto;
        display: flex;
    }
`;

const ResumeImg = styled.img`
    margin: auto;
    height: 60%;
    width: 60%;
`;

class ResumeTab extends Component{

    render(){
        return(
            <ResumeTabWrapper>
                <ResumeImg src='./static/resume.png'/>
            </ResumeTabWrapper>
        );
    }
}
export default ResumeTab;