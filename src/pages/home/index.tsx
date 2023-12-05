import {FiImage} from "react-icons/fi";
import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";

export interface PostProps {
    id: string;
    email: string;
    content: string;
    createdAt: string;
    uid: string;
    profileUrl?: string;
    likes?: string[];
    likeCount?: number;
    comments?: any;
}

const posts: PostProps[] = [
    {
        id: "1",
        email: "test@test.com",
        content: "내용",
        createdAt: "2023-08-30",
        uid: "123123"
    },
    {
        id: "2",
        email: "test@test.com",
        content: "내용",
        createdAt: "2023-08-30",
        uid: "123123"
    },
    {
        id: "3",
        email: "test@test.com",
        content: "내용",
        createdAt: "2023-08-30",
        uid: "123123"
    },
]

export default function HomePage() {
    const handleFileUpload = () => {
    }

    function handleDelete() {

    }

    return (
        <div className="home">
            <div className="home__title">Home</div>
            <div className="home__tabs">
                <div className="home__tab home__tab--active">For you</div>
                <div className="home__tab">Following</div>
            </div>
            <form className="post-form">
                <textarea className="post-form__textarea" required name="content" id="content"
                          placeholder="What is happening?"/>
                <div className="post-form__submit-area">
                    <label htmlFor="file-input" className="post-form__file">
                        <FiImage className="post-form__file-icon"/>
                    </label>
                    <input type="file" name="file-input" accept="image/*" onChange={handleFileUpload}
                           className="hidden"/>
                    <input type="submit" value="Tweet" className="post-form__submit-btn"/>
                </div>
            </form>
            <div className="post">
                {posts?.map((post) => (
                    <div className="post__box" key={post?.id}>
                        <Link to={`/posts/${post?.id}`}>
                            <div className="post__box-profile">
                                <div className="post__flex">
                                    {post?.profileUrl ?
                                        (<img src={post?.profileUrl} alt="profile" className="post__box-profile-img"/> ):
                                        (<FaUserCircle className="post__box-profile-icon"/>)}
                                    <div className="post__email">{post?.email}</div>
                                    <div className="post_createdAt">{post?.createdAt}</div>
                                </div>
                                <div className="post__box-content">{post.content}</div>
                            </div>
                        </Link>
                        <div className="post__box-footer">
                            {/* post.uid === user.uid 일 떄 */}
                            <>
                                <button type="button" className="post__delete" onClick={handleDelete}>Delete</button>
                                <button type="button" className="post__update"><Link to={`/posts/edit/${post?.id}`}>Edit</Link></button>
                            </>
                            <button type="button" className="post__likes">
                                <AiFillHeart/>
                                {post?.likeCount || 0}
                            </button>
                            <button type="button" className="post__comments">
                                <FaRegComment />
                                {post?.comments?.length || 0}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}