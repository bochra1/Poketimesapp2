import {React, Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Home extends Component{ 
   render() {
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
            <Link to={'/' + post.id}>
              <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
           
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );
  return (
    <div>
      <div className="container">
        <h4 className="center">Home</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      {postList}
      </div>
    </div>
  )
}}
const mapStateToProps = (state, ownProps) => {
  return { posts: state.posts}
}

export default connect(mapStateToProps) (Home) ;