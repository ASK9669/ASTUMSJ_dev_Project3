function ColorButton({ color, onClick, children }) {
    const style = {
        backgroundColor: color,
        border: 'none',
        width: 100,
        height: 40,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f0f0f0',
        padding: '8px 12px',
        borderRadius: 6,
        cursor: 'pointer',
        active: {border: "2px solid #000", boxShadow: "0 4px 12px rgba(0,0,0,0.25)"}
    };
    return (
        <button style={style} onClick={onClick}>
            {children || color}
        </button>
    );
}

export default ColorButton;