import React, { Component } from 'react';

class Album extends Component {

  render() {
    return (
      <section className="album">
         Album will go here -- 
         {this.props.match.params.slug}
       </section>
    )
  }
}

export default Album;
