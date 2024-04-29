// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import UserInfo from '../UserInfo'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <div>
        <UserInfo />
        <ul className="bg-list">
          {blogsList.map(eachItem => (
            <BlogItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogList
