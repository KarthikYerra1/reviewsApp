import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderReviewList = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review">
        <img src={imgUrl} alt={username} />
        <p className="display-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewIndex = reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="reviews-container">
          <button
            className="btn"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderReviewList(currentReviewIndex)}
          <button
            className="btn"
            onClick={this.onClickRightArrow}
            type="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
