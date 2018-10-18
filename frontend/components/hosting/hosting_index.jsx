
import React from 'react';
import HostingIndexItem from './hosting_index_item';

class HostingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchHostings();
    this.props.fetchBookings(this.props.userId);
  }

  render() {

    const hostings = this.props.hostings.map(hosting => (
        <HostingIndexItem hosting={hosting} key={hosting.id}/>)

    );

    return (
      <div className="hosting-index">
        <h1>Travel the world with Couchdrift </h1>
        <div className="hostings-item">
          { hostings }
        </div>
      </div>
    );
  }
}

export default HostingIndex;
