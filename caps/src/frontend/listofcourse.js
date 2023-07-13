// list of learning path    
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function GroupExample() {
  return (
    <CardGroup>
      <Card border="secondary" style={{width: '18rem'}}>
        {/* src="holder.js/100px160" */}
        <Card.Img variant="top" src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>Web development by raj</Card.Title>
          <Card.Text>
          Web development involves the creation and maintenance of websites and web applications. Web developers use programming languages such as HTML, CSS, and JavaScript to build interactive and responsive online experiences.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>

      <Card border="primary" style={{width: '18rem'}}>
        
        <Card.Img variant="top" src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>Backened developer</Card.Title>
          <Card.Text>
          A backend developer is responsible for the server-side development of web applications. They focus on the functionality and logic behind the scenes, handling databases, APIs, and server infrastructure
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card border="tertiary" style={{width: '18rem'}}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>Full Stack with MERN</Card.Title>
          <Card.Text>MERN is a full-stack JavaScript framework used for building web applications. It stands for MongoDB, Express.js, React, and Node.js, which are the core technologies used in this stack.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
  );
}

export default GroupExample;