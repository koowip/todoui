import './Card.css'

interface CardProps {
  title: String,
  description: String,
  date: String
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  date
}) => {
  return (
    <>
      <div className='card'>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
        <div className='date'>{date}</div>
      </div>
    </>
  )
}

export default Card