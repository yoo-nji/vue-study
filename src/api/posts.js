//axios
const posts = [
  { id: 1, title: 'Post 1', content: 'Post 1 content', createdAt: '2024-08-01' },
  { id: 2, title: 'Post 2', content: 'Post 2 content', createdAt: '2024-08-02' },
  { id: 3, title: 'Post 3', content: 'Post 3 content', createdAt: '2024-08-03' },
  { id: 4, title: 'Post 4', content: 'Post 4 content', createdAt: '2024-08-04' },
  { id: 5, title: 'Post 5', content: 'Post 5 content', createdAt: '2024-08-05' },
];

export function getPosts() {
  return posts;
}