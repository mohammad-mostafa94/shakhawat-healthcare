import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { teamInfo } from './TeamInfo';
import TeamMember from './TeamMember';

const Team = () => {
    const teamData = teamInfo;
    return (
        <div className="text-center my-5">
            <h1 className="text-danger">Our Team</h1>
            <Container>
                <Row xs={1} md={3} className="g-4 ">
                {
                    teamData.map(member=><TeamMember
                        key= {member.id}
                        member= {member}
                    ></TeamMember>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Team;