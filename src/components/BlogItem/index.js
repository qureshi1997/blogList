import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <div className="blog-item">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </div>
  )
}

export default BlogItem
