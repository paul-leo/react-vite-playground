import React, { lazy, useState, Suspense } from 'react';
import CountDown from '../Timer';
import Table from '../Table';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LagRadar = lazy(() => import('react-lag-radar'));
export default function TableView() {
    const nodes = 1000;
    const array = Array(nodes);
    for (let i = 0; i < nodes; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return <DemoContent list={array} />;
}

function DemoContent({ list }: { list: number[] }) {
    const [count, setCount] = useState(0);
    const handleCountChange = (count = 0) => {
        setCount(count);
    };
    return (
        <div>
            <Suspense fallback={<></>}>
                <LagRadar size={200} />
            </Suspense>
            <CountDown count={count} onChange={handleCountChange} />
            <Table list={list} />
        </div>
    );
}
