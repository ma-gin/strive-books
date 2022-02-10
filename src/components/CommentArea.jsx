import { ListGroup } from "react-bootstrap"

// This component will receive as a prop one pasta object or null

const CommentArea = (props) => {
  console.log(props.selectedBook)
  return (
    <p>Woow</p>
    //   props.selectedBook &&
    //    props.selectedBook.comments.map((element) => (
    //     <ListGroup.Item key={element.id}>{element.comment}</ListGroup.Item>
    //   ))
  )
}

export default CommentArea
