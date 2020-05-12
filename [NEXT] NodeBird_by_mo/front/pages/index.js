//메인 화면
import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
// import { LOG_IN, LOG_OUT } from '../reducers/user';
import { loginAction, logoutAction } from "../reducers/user";

// const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [{
//         User: {
//             id: 'id몽땅',
//             nickname: '몽땅이',
//         },
//         content: 'Movie : About Time',
//         img: 'https://i.pinimg.com/originals/01/78/9c/01789c4656b4348a2e501089288eeb51.jpg',
//     }],
// };

const Home = ({}) => {
  // const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "LOG_IN_REQUEST",
    });
  }, []);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

function* generator() {}

export default Home;
