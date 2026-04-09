function NavDropdown({ categories, columns, accentColor, borderColor, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="fixed z-40"
      style={{ width: "960px", top: "70px", left: "50%", transform: "translateX(-50%)" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`bg-white shadow-2xl border-t-2 ${borderColor} py-6 px-6`}>
        <div className="flex gap-6">
          {columns.map((colIndices, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 flex-1">
              {colIndices.map((catIdx) => {
                const cat = categories[catIdx];
                if (!cat) return null;
                return (
                  <div key={catIdx}>
                    <p className={`${accentColor} font-semibold text-sm mb-1 cursor-pointer hover:underline`}>
                      {cat.title}
                    </p>
                    {cat.items.length > 0 && (
                      <ul className="space-y-1">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <span className="text-gray-700 text-sm cursor-pointer hover:opacity-60 transition-opacity duration-100">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;
