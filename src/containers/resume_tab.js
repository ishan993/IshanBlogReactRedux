import React, {Component} from 'react';
import styled from 'styled-components';
import ReactPDF from 'react-pdf';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const ResumeTabWrapper = styled(ReactPDF)`
    align-self: center;
    width: auto;
    margin: auto;
    margintop: 40px;
    display: inline-block;
    background: papayawhip;
`;
class ResumeTab extends Component{

    render(){
        return(
            <Wrapper>
                <ResumeTabWrapper file="/static/IshanVadwala.pdf" scale={1.5}/>
            </Wrapper>
        );
    }
}
export default ResumeTab;