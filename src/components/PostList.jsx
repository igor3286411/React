import Post from './Post'

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((post) =>{
                return <Post post={post} key={post.id} />
            })}
        </div>
    )
}

export default PostList;