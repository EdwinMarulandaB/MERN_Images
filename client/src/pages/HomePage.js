import {usePosts} from '../context/PostContext'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

export function HomePage() {
  const {posts} = usePosts()


  if(posts.length === 0 ) return (
    <div className='flex flex-col justify-center items-center'>
      <VscEmptyWindow className='w-48 h-48 text-white'/>
      <h1 className='text-white text-2xl'>There are no posts</h1>
    </div>
  )
  
  return (
    <div className='text-white'>

      <Link to="/new" >Create New Post</Link>
      {
        posts.map((post,i)=>(
          <div key={i}>
            {
              post.title
            }
          </div>
        ))
      }
    </div>
  );
}
