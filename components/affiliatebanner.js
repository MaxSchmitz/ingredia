import React from 'react';

export default class Affiliate extends React.Component {
  componentDidMount () {
    (window.adsbyamazon = window.adsbyamazon || []).push({});
  }

render () {
    console.log('Affiliate');
    return (
      <div className='ad'>
        <p>here</p>
        <div className='adsbyamazon'
          amzn_assoc_tracking_id = "bunner-20"
          amzn_assoc_ad_mode = "manual"
          amzn_assoc_ad_type = "smart"
          amzn_assoc_marketplace = "amazon"
          amzn_assoc_region = "US"
          amzn_assoc_design = "enhanced_links"
          amzn_assoc_asins = "B07Y45NJCW"
          amzn_assoc_placement = "adunit"
          amzn_assoc_linkid = "8fed0e25cef00b487cdf6598194d4161">
        </div>
        <p>here</p>
      </div>
    );
  }
}

