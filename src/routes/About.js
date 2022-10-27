import Navbar from "../component/Navbar";
// import Tippy from "@tippyjs/react";

export default function About() {
    return (
        <div style={{ background: "black" }}>
            <div>
                <Navbar></Navbar>
            </div>
            {/* temp color */}
            <div style={{ background: "gold" }}>
                <h1>dari about</h1>
            </div>
            {/* <Tippy content="Hello">
                <button>My button</button>
            </Tippy> */}
        </div>
    )
}