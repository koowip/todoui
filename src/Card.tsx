import './Card.css'

interface CardProps {
  title: String,
  description: String,
  isComplete: String
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  isComplete
}) => {
  return (
    <>
      <div className='card'>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
        <div className='isComplete'>{isComplete}</div>
      </div>
    </>
  )
}

export default Card