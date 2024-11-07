import { Header } from '@/components/header/header'
import { HomePage } from '@/components/home/home';
import "./index.css";

const MOCK_POSTS = [
  {
    title: 'Post 1',
    desc: 'Description 1'
  },
  {
    title: 'Post 2',
    desc: 'Description 2'
  },
  {
    title: 'Post 3',
    desc: 'Description 3'
  },
  {
    title: 'Post 4',
    desc: 'Description 4'
  },
  {
    title: 'Post 5',
    desc: 'Description 5'
  },
  {
    title: 'Post 6',
    desc: 'Description 6'
  },
  {
    title: 'Post 7',
    desc: 'Description 7'
  },
  {
    title: 'Post 8',
    desc: 'Description 8'
  },
  {
    title: 'Post 9',
    desc: 'Description 9'
  },
  {
    title: 'Post 10',
    desc: 'Description 10'
  },
  {
    title: 'Post 11',
    desc: 'Description 11'
  },
]

function App() {
  
  return (
    <div>
      <Header blogTitle='Kamublog' />
      <HomePage description='Welcome to Kamublog' posts={MOCK_POSTS} />
    </div>
  )
}

export default App
