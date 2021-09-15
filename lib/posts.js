export function getSortedPostsData() {
  // Get file names under /posts
  const allPostsData = [
    {
      id: 'ssg-ssr',
      title: 'When to Use Static Generation v.s. Server-side Rendering',
      date: '2020-01-02'
    },
    {
      id: 'pre-rendering',
      title: 'Two Forms of Pre-rendering',
      date: '2020-01-03'
    },
  ];
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
  return [
    {
      params: {
        id: 'ssg-ssr'
      }
    },
    {
      params: {
        id: 'pre-rendering'
      }
    }
  ];
}

export function getPostData(id) {

  const allPostsData = {
    'ssg-ssr': {
      id: 'ssg-ssr',
      title: 'When to Use Static Generation v.s. Server-side Rendering',
      date: '2020-01-02',
    },
    'pre-rendering': {
      id: 'pre-rendering',
      title: 'Two Forms of Pre-rendering',
      date: '2020-01-03'
    },
  };

  // Combine the data with the id
  return allPostsData[id];
}