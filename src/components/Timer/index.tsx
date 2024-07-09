// 倒计时组件
import React, { useEffect, useState } from 'react';
import './index.css'

export default function CountDown(props: {
    onChange: (count: number) => void;
    count: number;
}) {
    const { onChange } = props;
    const [count, setCount] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            // count 为当前的时间
            const now = new Date().getTime();
            const formatter = new Intl.DateTimeFormat('zh-CN', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            });
            const formattedTime = formatter.format(now);
            setCount(formattedTime);
            onChange(now);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, onChange]);
    return <div className='timer-wrap'>{count}</div>;
}
