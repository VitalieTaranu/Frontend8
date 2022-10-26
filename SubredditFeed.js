import RedditPost from "./RedditPost";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SubredditFeed() {
  const [posts, setPosts] = useState([]);
  // console.log(posts);
  useEffect(() => {
    async function getFeed() {
      try {
        const response = await axios.get(
          `https://www.reddit.com/r/ProgrammerHumor/.json`
        );
        console.log(response);
        setPosts(response.data.data.children);
      } catch (error) {
        // console.log({error});
      }
    }
    getFeed();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <RedditPost
          post={post}
          key={post.data.title}
          index={index}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
}
