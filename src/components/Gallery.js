import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import Lightbox from 'react-images';

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };
        this.handleClickImage = this.handleClickImage.bind(this);
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <div className="fl w-100 w-50-ns pa2">
                    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div className="tc">
                            <img src={obj.thumbnail} className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                            <h1 className="f4">{obj.caption}</h1>
                            <hr className="mw3 bb bw1 b--black-10" />
                        </div>
                        <p className="lh-copy measure center f6 black-70">
                            {obj.description}
                        </p>
                    </article>
                </div>
            );
        });

        return (
                <div class="cf mw9 center ph3-ns">
                    {gallery}
                </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;