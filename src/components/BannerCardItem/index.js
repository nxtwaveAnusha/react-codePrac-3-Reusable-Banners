import './index.css'

const BannerCard = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails

  return (
    <div className="banner-card-container">
      <li className={className}>
        <div className="content-con">
          <h1 className="header-text">{headerText}</h1>
          <p className="card-description">{description}</p>
          <button className="btn">Show More</button>
        </div>
      </li>
    </div>
  )
}
export default BannerCard
