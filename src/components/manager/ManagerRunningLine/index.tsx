const ManagerRinningLine = ({ duplicatedManagerData, activeButton, lineRef }: { duplicatedManagerData: any[]; activeButton: string; lineRef: React.RefObject<HTMLDivElement> }) => (
    <div className="running-line__container running-line__container_sizes">
        <div className="running-line__sales-line">
            <div className="running-line__sales-container" ref={lineRef}>
                {duplicatedManagerData.map((item, index) => (
                    <div className="running-line__wrapper" key={index}>
                        <div className="running-line__scrolling">
                            <div className="running-line__content-block">
                                <span className="running-line__sales-title">{item.name}</span>
                                <span className="running-line__sales-amount">{activeButton === 'sales' ? item.salesAmount : item.countTransactions}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ManagerRinningLine;
