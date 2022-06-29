export const getPosts = async (prisma) => {
    const posts = await prisma.post.findMany({
      where: {},
      orderBy: [
        {
          id: 'desc',
        },
      ],
      include: {
        author: true,
      }
    })
  
    return posts

  }


  export const getSubreddits =async (name , prisma)=>{ 
    const subreddits = await prisma.subreddit.findUnique({
      where:{
        name,
      }
    })

    return subreddits
  }


  export const getPostsFromSubreddit = async (subreddit, prisma) => {
    const posts = await prisma.post.findMany({
      where: {
        subreddit: {
          name: subreddit,
        },
      },
      orderBy: [
        {
          id: 'desc',
        },
      ],
      include: {
        author: true,
      },
    })
  
    return posts
  }


  export const getPost = async (id, prisma) => {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    })
  
    return post
  }