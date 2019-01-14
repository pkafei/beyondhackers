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
                <div class="fl w-100 w-50-ns pa2">
                    <article class="br2 ba dark-gray b--black-10">
                        <img src="http://placekitten.com/g/800/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                        <div class="pa2 ph3-ns pb3-ns">
                            <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">Cat</h1>
                            </div>
                            <div class="dtc tr">
                                <h2 class="f5 mv0">$1,000</h2>
                            </div>
                            </div>
                            <p class="f6 lh-copy measure mt2 mid-gray">
                            If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                            and touch water with paw then recoil in horror.
                            </p>
                        </div>
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