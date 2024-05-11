import { useState } from "react";

export default function Admin() {
    const fold = localStorage.getItem('fold');
    const parseFold = fold === null ? false : JSON.parse(fold);

    const [isFold, setFold] = useState
}