import React from 'react';

export type IItem = {
    random: number;
};

export default function Row({ random }: IItem) {
    return (
        <tr>
            <td className="text-center">{random}</td>
            {Array(100)
                .fill(0)
                .map((_, i) => (
                    <td
                        style={{
                            visibility: 'hidden',
                            display: 'none',
                        }}
                        className="hidden"
                    >
                        {i}
                    </td>
                ))}
        </tr>
    );
}

// export default function Row(props: IItem) {
//     console.log('Row Render');
// }
