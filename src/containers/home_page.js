import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeadlinePost from './headline_post';
import TabBar from './tab_bar';
import {MidlinePosts} from './midline_posts_temp';
import {PostList} from './post_list_temp';
import ResumeTab from './resume_tab';
import Modal from './modal';
import LoginModal from './login_modal';
import styled from 'styled-components';


const ModalBackdrop = styled.div`
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px;
    z-index: 9991;
`; 
const midlineProps = [];
const postListProps = [];
const headlineProps = {
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"350px", 
    imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51R1OY7r4QL.jpg", flex: true},
    textProps: {textFlex: 2, title: "Don't think twice, it's alright",
     content:"When your rooster crows at the break a dawn, look out your window and I'll be gone. You're the reason I'm trav'lin' on. Don't think twice, it's all right"}
}

midlineProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"225px",
     imgUrl:"https://s-media-cache-ak0.pinimg.com/originals/5c/91/a0/5c91a0775997aaedec4e68807b806e03.jpg", flex: false},
    textProps: {textFlex: 2, title: "Manhattan",
     content:"I like to dance all night. It summons the day That's how I play. Yeah that's how I play. I said who are you. No matter who you are. So we dance all night. And dance all day"}
});
midlineProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"225px",
     imgUrl:"http://okp-cdn.okayplayer.com/wp-content/uploads/2017/02/john-mayer-wave-two-copy.jpg", flex: false},
    textProps: {textFlex: 2, title: "Helpless", 
    content:"The same drink that gets me out the door, is the same drink that puts me on the floor.And the new thing I wanna try some more. Is the same mistake I used to make before"}
});
midlineProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"225px",
    imgUrl:"http://www.billboard.com/files/styles/article_main_image/public/media/john-mayer-performance-650-430.jpg", flex: false},
    textProps: {textFlex: 2, title: "In your atmosphere", content:"I don't think I'm gonna go to LA anymore."}
});
//

postListProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"225px",
    imgUrl:"https://images.genius.com/c372bb8d3e7e1f7a689fe4cb562bf7b2.1000x1000x1.jpg", flex: true},
    textProps: {textFlex: 2, title: "Gravity", content:"Oh twice as much ain't twice as good And can't sustain like one half could It's wanting more That's gonna send me to my knees"}
});
postListProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"225px",
    imgUrl:"https://images.8tracks.com/cover/i/008/761/523/IMG_4889-2310.jpg?rect=0,0,1280,1280&q=98&fm=jpg&fit=max&w=640&h=640", flex: true},
    textProps: {textFlex: 2, title: "Empire State of Mind", content:"Yeah, I'm up at Brooklyn, now I'm down in Tribeca Right next to DeNiro, but I'll be hood forever. I'm the new Sinatra and since I made it here I can make it anywhere, yeah, they love me everywhere"}
});
postListProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"225px",
    imgUrl:"https://i1.sndcdn.com/artworks-000064705607-jq0bfe-t500x500.jpg", flex: true},
    textProps: {textFlex: 2, title: "Wish you were here", content:"Did they get you to trade your heros for ghosts. Cold comfort for change. Did you exchange a walk on part in the war for a lead role in a cage ?"}
});
postListProps.push({
    displayProps: { imgFlex: 3, mobileImgWidthHeight: "250px", maxImgWidthHeight:"210px",
    imgUrl:"https://i.ytimg.com/vi/D3Bwx8BxY5k/maxresdefault.jpg", flex: true},
    textProps: {textFlex: 2, title: "Blackbird", content:"Blackbird singing in the dead of night. Take these broken wings and learn to fly! All your life, you've only been waiting for this moment to be free"}
});


class HomePage extends Component{

    renderHomePage(){
        if(this.props.resumeVisible){
           return (<ResumeTab />);
        } else{
            return(
                <div>
                    <HeadlinePost headlineProps={headlineProps}/>
                    {MidlinePosts(midlineProps)}
                    {PostList(postListProps)}
                </div>
            )
        }
    }
    showLoginModal(){
        if(this.props.loginModalVisible){
            return(
                <ModalBackdrop onClick={()=>console.log("FucketyFuckFuck")}>
                    <Modal>
                        <LoginModal/>
                    </Modal>
                </ModalBackdrop>)
            }else   
                return;
    }

    render(){
        return(
            <div>
                <TabBar />
                {this.showLoginModal()}
                {this.renderHomePage()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {resumeVisible: state.displayComps.resumeVisible, 
        loginModalVisible: state.displayComps.loginModalVisible};
}

export default connect(mapStateToProps, null)(HomePage);