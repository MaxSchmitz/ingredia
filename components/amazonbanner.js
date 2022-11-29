import React from 'react';
import {Helmet} from "react-helmet";

const AmazonBanner = () => {
    return (
        <div className="amazon-banner">
            <div className="amazon-banner-text">
                <h1>Amazon</h1>
                <div className="alignleft">
                <Helmet>
                    <script type="text/javascript">
                    amzn_assoc_ad_type = "banner";
                    amzn_assoc_marketplace = "amazon";
                    amzn_assoc_region = "US";
                    amzn_assoc_placement = "assoc_banner_placement_default";
                    amzn_assoc_campaigns = "kitchen";
                    amzn_assoc_banner_type = "category";
                    amzn_assoc_p = "40";
                    amzn_assoc_isresponsive = "false";
                    amzn_assoc_banner_id = "0496AN2501X6E3T9WK02";
                    amzn_assoc_width = "120";
                    amzn_assoc_height = "60";
                    amzn_assoc_tracking_id = "bunner-20";
                    amzn_assoc_linkid = "cecec0e3da7aca6a5a6a8bcf907fa1f3";
                    </script>
                </Helmet>
                </div>

            </div>
        </div>
    );
}

export default AmazonBanner;

