import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/beyond_hackers_bicycle_collective.png'
import thumb02 from '../assets/images/thumbs/beyond_hackers_distributed_health_care.png'
import thumb03 from '../assets/images/thumbs/tech_portfolio_hero.png'

const DEFAULT_IMAGES = [
    { id: '1', src: 'https://pricey-lancer.glitch.me/', thumbnail: thumb01, caption: 'Bicycles on the Blockchain', description: 'Rent bikes on the blockchain.'},
    { id: '2', src: 'https://rowan-pilot.glitch.me/', thumbnail: thumb02, caption: 'Distributed Health Care Identity', description: 'Decentralized sign-in example.'},
    { id: '3', src: 'https://www.techportfoliohero.com/', thumbnail: thumb03, caption: 'Tech Portfolio Hero', description: 'Career consulting for developers.'},


];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Beyond Hackers"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Beyond Hackers</h2>
                        </header>
                        <p>Welcome. The goal of <b>Beyond Hackers</b> is to translate buzzwords like "blockchain" and "distributed" into real products. When I'm not coding up Dapps, I work on the community team at <a href="https://protocol.ai/">Protocol Labs</a>.</p>
                        <p>I use to I also like to blog and discuss this brave new world of decentralized money and power.</p>
                        <p>Code the change you want to see!</p>
                        <ul className="actions">
                            <li><a href="https://medium.com/@beyondhackers" className="button">Writings</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Blockchain App Portfolio</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex