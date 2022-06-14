import styled from 'styled-components';

const Container = styled.section`
    font-family: sans-serif;
`;

export default function App() {
    return (
        <Container>
            <h1>Hello Lightspeed</h1>
            <ol>
                <li>Fork this repository</li>
                <li>Clone your fork and run it locally</li>
                <li>Make changes, commit your work and push to your fork</li>
            </ol>
        </Container>
    );
}
