import React, { Component } from 'react'
 class Post extends Component {
    state = {
        id: null
      }
      componentDidMount(){
        let id = this.props.match.params.postid;
        this.setState({
          id
        })
      }
      render() {
        return (
          <div className="container">
            <h4>{this.state.id}</h4>
          </div>
        )
      }
    }
    export default Post;