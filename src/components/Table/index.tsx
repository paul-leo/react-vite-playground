import Row from './Row/index';
import "./index.css";
const Table = (props: { list: number[] }) => {
    const { list } = props;
    console.log('Table render');
    return (
        <table>
            {list.map((item) => (
                <Row random={item}></Row>
            ))}
        </table>
    );
};

export default Table;
