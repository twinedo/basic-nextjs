import React from 'react';
import { useRouter } from 'next/router';

function Detail() {
    const router = useRouter();
    const { id } = router.query;
    return <div>User Detail {id}</div>;
}

export default Detail;
