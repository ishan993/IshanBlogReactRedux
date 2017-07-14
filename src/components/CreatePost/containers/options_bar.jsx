import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { uploadImage, addMarkdownLink, addMarkdownFormatting } from '../../../actions/index';
import { FullWidthWrapper, FlexItem, ArrowDiv, ReusableInputField, DropdownDiv, DropdownContent,
     FileInputConcealer } from '../../reuseable_components';

const OptionsMenuBar = styled(FullWidthWrapper)`
    height: auto;
    display: flex;
    border-top: .3pt solid lightgrey;
    border-bottom: .3pt solid lightgrey;
`;
const OptionsItem = styled(FlexItem)`
    color: grey;
    position: relative;
    padding-right:5px;
    border-bottom: 3px solid ${props => props.isActive ? 'lightseagreen' : 'white'};
    &:hover{
        border-bottom: 3px solid lightseagreen;
    }
`;
const DropdownInputField = styled(ReusableInputField)`
    line-height: 1.2rem;
    font-size: .8rem;
    margin: 0;
    padding:5px;
    margin-bottom:4px;
`;
const SmallButton = styled.button`
    font-height: 1.3rem;
    font-size: .8rem;
    color: grey;
    border: .3pt solid lightseagreen;
    display: inline-block;
    background: white;
    margin:2px;
    font-weight: 200;
`;
const InlineLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: .8rem;
`;

class OptionsBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false,
      markdownText: '',
      markdownURL: '',
      boldButton: false,
      codeButton: false,
      italicButton: false,
    };
  }

  handleFile(event, bool) {
    this.props.uploadImage({
      file: event.target.files[0],
      isPostTitleImage: bool,
      content: this.props.postContent,
    });
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addLink() {
    this.props.addMarkdownLink({
      markdownText: this.state.markdownText,
      markdownURL: this.state.markdownURL,
      content: this.props.content,
    });
    this.setState({ markdownText: '', markdownURL: '' });
  }
  render() {
    return (
      <OptionsMenuBar>
        <OptionsItem>
          <InlineLabel onClick={() => { this.toggleDropdown(); }}>
            <img src="/static/link.png" alt={'Link'} />
              Add a link
          </InlineLabel>
          <DropdownDiv showDropdown={this.state.showDropdown}>
            <ArrowDiv />
            <DropdownContent>
              <DropdownInputField
                placeholder="Enter URL"
                name="markdownURL"
                onChange={event => this.handleChange(event)}
                value={this.state.markdownURL}
              />
              <DropdownInputField
                placeholder="Enter Text"
                name="markdownText"
                onChange={event => this.handleChange(event)}
                value={this.state.markdownText}
              />
              <SmallButton onClick={() => { this.addLink(); this.toggleDropdown(); }}>
                Add
              </SmallButton>
              <SmallButton onClick={() => { this.toggleDropdown(); }}>
                Cancel
              </SmallButton>
            </DropdownContent>
          </DropdownDiv>
        </OptionsItem>
        <OptionsItem>
          <InlineLabel>
            <img src="/static/file-image.png" alt="file" />
            <FileInputConcealer
              type="file"
              onChange={event => this.props.uploadImage({
                file: event.target.files[0],
                isPostTitleImage: false,
                content: this.props.content,
              })}
            />
              Add an image to the post
            </InlineLabel>
        </OptionsItem>
        <OptionsItem
          onClick={() => {
            this.props.addMarkdownFormatting({ formatting: 'BOLD', content: this.props.content });
            this.setState({ boldButton: !this.state.boldButton });
          }}
          isActive={this.state.boldButton}
          name="boldButton"
        >
          <img src="/static/format-bold.png" alt="bold" />
        </OptionsItem>
        <OptionsItem
          onClick={() => {
            this.props.addMarkdownFormatting({ formatting: 'ITALIC', content: this.props.content });
            this.setState({ italicButton: !this.state.italicButton });
          }}
          isActive={this.state.italicButton}
          name="italicButton"
        >
          <img src="/static/format-italic.png" alt="italic" />
        </OptionsItem>
        <OptionsItem
          name="codeButton"
          onClick={() => {
            this.props.addMarkdownFormatting({
              formatting: 'CODE',
              content: this.props.content
            });
            this.setState({ codeButton: !this.state.codeButton });
          }}
          isActive={this.state.codeButton}
        >
          <img src="/static/code-braces.png" alt="code" />
        </OptionsItem>
      </OptionsMenuBar>
    );
  }
}
export default connect(null, { uploadImage, addMarkdownLink, addMarkdownFormatting })(OptionsBar);
