const LeaderRunningLine = ({ activeButton, lineRef, duplicatedData, duplicatedEmployeeData }: { activeButton: string; lineRef: React.RefObject<HTMLDivElement>; duplicatedData: any[]; duplicatedEmployeeData: any[] }) => (
    <div className="running-line__container">
        {activeButton === 'first' && (
            <div className="running-line__general-line" ref={lineRef}>
                {duplicatedData.map((item, index) => (
                    <div className="running-line__wrapper" key={index}>
                        <div className="running-line__scrolling">
                            <span className="running-line__title">{item.title}</span>
                            <div className="running-line__wrap">
                                <span className="running-line__left-count">{item.leftCount}</span>
                                {item.rightCount && <span className="running-line__right-count">{item.rightCount}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {(activeButton === 'second' || activeButton === 'third') && (
            <div className="running-line__sales-line">
                <div className="running-line__sales-container" ref={lineRef}>
                    {duplicatedEmployeeData.map((item, index) => (
                        <div className="running-line__wrapper" key={index}>
                            <div className="running-line__scrolling">
                                <div className="running-line__content-block">
                                    <span className="running-line__sales-title">{item.name}</span>
                                    <span className="running-line__sales-amount">{activeButton === 'second' ? item.salesAmount : item.countTransactions}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

export default LeaderRunningLine;
