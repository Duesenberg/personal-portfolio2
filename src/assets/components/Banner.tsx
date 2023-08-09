export default function Banner () {
  return(
    <section 
      className="banner" 
      aria-label="banner">
        <div className="borders left">
          <div className="border left fourth" />
          <div className="border left third" />
          <div className="border left second" />
          <div className="border left first" />
        </div>

        <div className="banner-title">
          <h1>Hello,</h1>
          <h1>I'm Pande</h1>
        </div>

        <div className="borders right">
          <div className="border right fourth" />
          <div className="border right third" />
          <div className="border right second" />
          <div className="border right first" />
        </div>
    </section>
  )
}