import './Mainbody.css'
import OffersTicker from './OffersTicker'
import ServicesSlider from './ServicesSlider'

export default function Mainbody() {
  return (
    <section className="mainbody">
      <OffersTicker />
      <ServicesSlider />
    </section>
  )
}
