const Arrow = ({ isVisible }) => {
  return (
    <span className="filter-arrow">
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="18px"
        height="18px"
        viewBox="0 0 199.404 199.404"
        xmlSpace="preserve"
        style={{ transform: isVisible && 'rotate(0deg)' }}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <g>
            <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 " />
          </g>
        </g>
      </svg>
    </span>
  );
};

export default Arrow;
