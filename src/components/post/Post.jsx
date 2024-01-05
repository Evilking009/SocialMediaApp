import { MoreVert } from '@material-ui/icons';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ post: { photo, date, like, comment, desc, userId } }) => {

    // Show ProfilePicture & Username in Post according to Post.id === user.id
    const user = Users.filter(u => u.id === userId)[0];

    const [likePost, setLikePost] = useState(like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLikePost(like => isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} className='postProfileImg' alt="" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img className='postImg' src={photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="./assets/heart.png" alt="" />
                        <img className='likeIcon' src="./assets/like.png" alt="" onClick={likeHandler} />
                        <span className="postlikeCounter">{likePost} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post