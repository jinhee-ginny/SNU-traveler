import React, { Component } from 'react';
import Mapbox from './Mapbox';
import EmptyMapbox from './EmptyMapbox'

// export {default} from './Mapbox'



class MapContent extends Component {
    render () {
        const { user } = this.props;
        if (user) {
            return (
                <Mapbox/>
            )
        }
        else {
            return (
                <EmptyMapbox/>
            )
        }
    }
}

export default MapContent;
