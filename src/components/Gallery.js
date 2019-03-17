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
                <div key={obj.id} className="fl w-100 w-50-ns pa2">
                    <a href={obj.src} target="_blank" rel="noopener noreferrer" className="link underline-hover dim blue">
                            <article className="bg-white center mw5 ba b--black-10 mv4">
                            <div className="pv2 ph3">
                                <h1 className="f6 ttu tracked">{obj.caption}</h1>
                            </div>
                            <img src={obj.thumbnail} className="w-100 db" alt="Closeup photo of a tabby cat yawning." />
                        </article>
                   </a>
                </div>
            );
        });

        return (
                <div className="cf mw9 center ph3-ns">
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