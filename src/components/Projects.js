import React, { Component } from "react";
import RadialMenu from "react-radial-menu";

// center image to click
const center = {
    "image": "url(examples/dist/images/social/share.png)"
};

// expandable images after click
const items = [
    { "href": "http://www.facebook.com", "image": "url(examples/dist/images/social/facebook.png)" },
    { "href": "http://www.reddit.com", "image": "url(examples/dist/images/social/reddit.png)" },
    { "href": "http://www.flickr.com", "image": "url(examples/dist/images/social/flickr.png)" },
    { "href": "http://www.google.com", "image": "url(examples/dist/images/social/googleplus.png)" },
    { "href": "http://www.linkedin.com", "image": "url(examples/dist/images/social/linkedin.png)" },
    { "href": "http://www.twitter.com", "image": "url(examples/dist/images/social/twitter.png)" },
    { "href": "http://www.twitter.com", "image": "url(examples/dist/images/social/twitter.png)" }
];

class Menu extends Component {
    render() {
        const { center, items } = this.props
        return (<RadialMenu
            center={center}
            items={items}
        />);
    };
};

const Projects = () => {
    return (
        <div>
            <Menu />
        </div>
    );
};

export default Projects;