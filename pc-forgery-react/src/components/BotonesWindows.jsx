
function BotonesWindows({ onColapsar, colapsada }) {
    return (
        <div className="botones-windows">
            <button onClick={onColapsar} type="button">
                {colapsada ? "+" : "_"}
            </button>
            <button type="button">□</button>
            <button type="button">×</button>
        </div>
    );
}

export default BotonesWindows;
