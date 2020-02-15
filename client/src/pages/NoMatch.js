import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";

function NoMatch() {
    return (

        <div>
            <Header>
                <h1>404 Page Not Found</h1>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
              </span>
                </h1>
            </Header>

        </div>
        // <Container fluid>
        //     <Row>
        //         <Col size="md-12">
        //             <Header>
        //                 <h1>404 Page Not Found</h1>
        //                 <h1>
        //                     <span role="img" aria-label="Face With Rolling Eyes Emoji">
        //                         🙄
        //       </span>
        //                 </h1>
        //             </Header>
        //         </Col>
        //     </Row>
        // </Container>
    );
}

export default NoMatch;
