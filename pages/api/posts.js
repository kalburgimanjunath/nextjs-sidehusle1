// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  const posts = [
    {
      id: 1,
      title: 'topic 1',
      description:
        'lorem pasam lorem pasam lorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasam',
      author: 1,
      created_at: '10-10-2023',
    },
    {
      id: 1,
      title: 'topic 2',
      description:
        'lorem pasam lorem pasam lorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasamlorem pasam',
      author: 1,
      created_at: '10-10-2023',
    },
  ];
  res.status(200).json({ posts: posts });
};
