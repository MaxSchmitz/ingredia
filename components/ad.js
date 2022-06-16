import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-3066548685705175'
          data-ad-slot='7983319611'
          data-ad-format='autorelaxed' />
      </div>
    );
  }
}

