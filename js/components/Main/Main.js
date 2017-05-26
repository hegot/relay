import React from "react";
//import Carousel from "./Carousel";
import Relay from 'react-relay';
import Navbar from "../Navbar/Navbar";
import NavbarRoute from '../../routes/NavbarRoute';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       
            return (
                <div>
                    <Relay.Renderer
                        environment={Relay.Store}
                        Container={Navbar}
                        queryConfig={new NavbarRoute()}
                    />
                    <div className="video_back">
                        <video autoPlay="true" loop="true">
                            <source src="https://player.vimeo.com/external/137137487.hd.mp4?s=dee109a9447ce1b4b440975a8fe5629a&amp;profile_id=113.mp4" type="video/mp4" />
                            <source src="https://player.vimeo.com/external/137137487.hd.mp4?s=dee109a9447ce1b4b440975a8fe5629a&amp;profile_id=113.webm" type="video/webm" />
                            <source src="https://player.vimeo.com/external/137137487.hd.mp4?s=dee109a9447ce1b4b440975a8fe5629a&amp;profile_id=113.ogv" type="video/ogg" />
                        </video>
                    </div>
                </div>
            );
    }
}

export default Relay.createContainer(Main, {
    fragments: {
        viewer: () => Relay.QL`
            fragment on User {
                nodes( first: 10) {
                    edges {
                        node {
                            id,
                            title,
                            status,
                        },
                    },
                },
            }
        `,
    },
});


