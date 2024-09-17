import Rating from './Rating'

function DriverCard(props) {
  return (
    <div className="cardDrive">
      <img
        style={{ width: '100px', height: '100px', borderRadius: '100%' }}
        src={props.img}
        alt=""
      />
      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating} </Rating>
        <p>
          {props.car.model}-{props.car.licensePlate}
        </p>
      </div>
    </div>
  )
}

export default DriverCard
