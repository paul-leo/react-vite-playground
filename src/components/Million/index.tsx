import React, { useEffect, useRef } from 'react';
import million from 'million';
const { h, patch } = million;
export default function Million() {
    const wrapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (wrapRef.current) {
            const myButtonComponent = (count: number) => {
                patch(
                    h(
                        'div',
                        {
                            id: 'millapp',
                        },
                        [
                            h('p', {}, ['count:']),
                            h('p', {}, [String(count)]),
                            h(
                                'button',
                                {
                                    onclick: () => {
                                        myButtonComponent(count + 1);
                                    },
                                },
                                ['+1']
                            ),
                        ]
                    ),
                    document.querySelector('#millapp')
                );
            };

            myButtonComponent(0);
        }
    }, []);
    return (
        <div ref={wrapRef} id="million-wrap">
            <div id="millapp">
                <p>count:</p>
                <p>0</p>
                <button>+1</button>
            </div>
        </div>
    );
}
