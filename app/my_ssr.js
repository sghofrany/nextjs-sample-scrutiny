import React from 'react';
import {sampleA} from "@/app/utils";

function SSRPage({shayan}) {
    return (
        <div style={{fontSize: "5rem", color: "pink"}}>
            This is an SSR :) {shayan}
            <div>{sampleA()}</div>
        </div>
    )
}

export async function getServerSideProps() {

    console.log("This is from the server");

    return {
        props: {
            shayan: "Hi, this is a prop"
        }
    }
}

export default SSRPage;