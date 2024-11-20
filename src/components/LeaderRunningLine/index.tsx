const LeaderRunningLine = ({ activeButton, lineRef, duplicatedData, duplicatedEmployeeData }: { activeButton: string; lineRef: React.RefObject<HTMLDivElement>; duplicatedData: any[]; duplicatedEmployeeData: any[] }) => (
    <div className="running-line__container">
        {/* Общее для руководителя */}
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

        {/* Сумма продаж или количество сделок для руководителя */}
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

// const buttonsData = [
//     { id: 'first', label: 'Общая информация' },
//     { id: 'second', label: 'Сумма продаж' },
//     { id: 'third', label: 'Количество сделок' },
// ];

// const LeaderRunningLine = () => {
//     const duplicatedData = duplicateRunningLineData(runningLineData);
//     const duplicatedEmployeeData = duplicateEmployeeData(employeeData);

//     const [activeButton, setActiveButton] = useState<string>('first');
//     // const generalLineRef = useRef<HTMLDivElement>(null);
//     // const salesLineRef = useRef<HTMLDivElement>(null);

//     const lineRef = useRef<HTMLDivElement>(null);

//     const handleButtonClick = (buttonId: string) => {
//         setActiveButton(buttonId);
//     };

//     const setupAnimation = (line: HTMLDivElement | null) => {
//         if (line) {
//             const items = Array.from(line.children) as HTMLElement[];
//             const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);

//             const animationDuration = totalWidth / 100; // Скорость движения
//             line.style.animation = `scrollSales ${animationDuration}s linear infinite`;
//         }
//     };

//     // useEffect(() => {
//     //     setupAnimation(generalLineRef.current);
//     //     setupAnimation(salesLineRef.current);
//     // }, [activeButton]);

//     useEffect(() => {
//         setupAnimation(lineRef.current);
//     }, [activeButton]);

//     const renderGeneralInfo = () => (
//         <div className="running-line__general-line" ref={lineRef}>
//             {duplicatedData.map((item, index) => (
//                 <div className="running-line__wrapper" key={index}>
//                     <div className="running-line__scrolling">
//                         <span className="running-line__title">{item.title}</span>
//                         <div className="running-line__wrap">
//                             <span className="running-line__left-count">{item.leftCount}</span>
//                             {item.rightCount && <span className="running-line__right-count">{item.rightCount}</span>}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );

//     const renderSalesInfo = () => (
//         <div className="running-line__sales-line">
//             <div className="running-line__sales-container" ref={lineRef}>
//                 {duplicatedEmployeeData.map((item, index) => (
//                     <div className="running-line__wrapper" key={index}>
//                         <div className="running-line__scrolling">
//                             <div className="running-line__content-block">
//                                 <span className="running-line__sales-title">{item.name}</span>
//                                 <span className="running-line__sales-amount">{activeButton === 'second' ? item.salesAmount : item.countTransactions}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     return (
//         <div className="running-line">
//             <div className="running-line__buttons">
//                 {buttonsData.map(button => (
//                     <button key={button.id} className={`running-line__button ${activeButton === button.id ? 'running-line__button_active' : ''}`} onClick={() => handleButtonClick(button.id)}>
//                         {button.label}
//                     </button>
//                 ))}
//             </div>

//             <div className="running-line__container">
//                 {activeButton === 'first' && renderGeneralInfo()}
//                 {(activeButton === 'second' || activeButton === 'third') && renderSalesInfo()}
//             </div>
//         </div>
//     );
// };

// export default LeaderRunningLine;
