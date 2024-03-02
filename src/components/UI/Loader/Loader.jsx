import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={150}
        height={265}
        viewBox="0 0 150 265"
        backgroundColor="#ffe0e0"
        foregroundColor="#deee91"

    >
        <rect x="0" y="170" rx="10" ry="10" width="150" height="15"/>
        <rect x="0" y="200" rx="10" ry="10" width="100" height="15"/>
        <rect x="0" y="230" rx="10" ry="10" width="80" height="25"/>
        <rect x="118" y="230" rx="10" ry="10" width="32" height="25"/>
        <rect x="0" y="0" rx="10" ry="10" width="150" height="155"/>
    </ContentLoader>
)

export default Loader
