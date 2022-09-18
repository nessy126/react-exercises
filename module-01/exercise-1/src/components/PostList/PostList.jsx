import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';


const PostList = ({ postList }) => {

  return (
    <>
      <h2 className='post-list-title'>Post List</h2>
      <ul className="post-list">
        {postList.map(post => {
        return <PostItem key={post._id} post={post} />

        })}
      </ul></>
  );
}

PostList.protoTypes = {
  postList: PropTypes.arrayOf(PropTypes.object)
}

export default PostList;

