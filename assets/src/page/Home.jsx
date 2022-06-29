import React from "react";
import { createRoot } from 'react-dom/client';

const Home = () => {
    const container = document.getElementById('test');
    const root = createRoot(container);
    root.render(
        <h1>Bonjour, monde !</h1>
    );
}

Home()
