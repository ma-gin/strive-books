import { Container, Row, Col } from "react-bootstrap"
import books from "../data/romance.json"

const LastestRelease = (props) => (
    <Container>
        <Row>
            {books.map((book) => (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} key={book.asin}>
                    <img
                        className='d-block w-100 my-2'
                        src={book.img}
                        alt={book.title}                             
                    />
                </Col>
            ))}
        </Row>
    </Container>
)

export default LastestRelease