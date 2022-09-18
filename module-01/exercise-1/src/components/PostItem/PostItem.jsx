const PostItem = ({ post, key }) => {

  return (
    <li key={key}>
      <h2 >{post.title}</h2>
      <p >{post.text}</p>
      <span>{post.author}</span>
      <span>{post.publishDate}</span>
    </li>
  );
}

export default PostItem;