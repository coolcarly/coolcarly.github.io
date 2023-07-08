import React from 'react';

import { ReactCusdis } from 'react-cusdis';

export default function CusdisComments (props){
    const appId = process.env.CUSDIS_APP_ID;

    return(
        <div>
            <ReactCusdis
                id = "cusdis-thread"
                attrs={{
                    host: "https://cusdis.com",
                    appId: appId,
                    pageId: props.attrs.pageId,
                    pageTitle: props.attrs.pageTitle,
                    pageUrl: props.attrs.pageUrl,
                }}
            />
        </div>
    )
}
