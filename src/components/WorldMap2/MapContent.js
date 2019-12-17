import React, { Component } from 'react';
import Mapbox from './newMap';
import EmptyMapbox from './emptyMap'

// export {default} from './newMap'



class MainContent extends Component {
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

export default MainContent;