import PlaceBet from '@/views/games/PlaceBet.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {Component} from 'react';
import GamesRound from '@/views/games/GamesRound.jsx'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const isSlickDisabled = className && className.includes('slick-disabled');
  const borderColor = isSlickDisabled ? 'gray' : 'green';

  return (
    <div className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: 0,
        width: 30,
        height: 30,
        transform: "rotate(45deg)",
        borderRight: `5px solid ${borderColor}`,
        borderTop: `5px solid ${borderColor}`,
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const isSlickDisabled = className && className.includes('slick-disabled');
  const borderColor = isSlickDisabled ? 'gray' : 'green';
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        left: 0,
        width: 30,
        height: 30,
        transform: "rotate(45deg)",
        borderLeft: `5px solid ${borderColor}`,
        borderBottom: `5px solid ${borderColor}`,
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
}

export default class Home extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div>
        <h2>Round 17</h2>
        <Slider {...settings}>
          <PlaceBet />
          <PlaceBet />
          <PlaceBet />
          <PlaceBet />
          <PlaceBet />
          <PlaceBet />
          <PlaceBet />
        </Slider>

        <GamesRound />
      </div>
    )
  }
}
