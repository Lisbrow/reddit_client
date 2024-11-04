import { getCachedData, setCachedData } from "../utils/cache";

export const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit) => {
  const cacheKey = `posts_${subreddit}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  const posts = json.data.children.map((post) => post.data);
  setCachedData(cacheKey, posts);
  return posts;
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const cacheKey = `comments_${permalink}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  const comments = json[1].data.children.map((comment) => comment.data);
  setCachedData(cacheKey, comments);
  return comments;
};
