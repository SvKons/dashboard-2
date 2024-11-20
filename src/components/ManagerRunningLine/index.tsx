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

// const buttonsData = [
//     { id: 'sales', label: 'Сумма продаж' },
//     { id: 'transactions', label: 'Количество сделок' },
// ];

// const ManagerRunningLine = () => {
//     const duplicatedManagerData = duplicateEmployeeManagerData(managerData);

//     const [activeButton, setActiveButton] = useState<string>('sales');
//     const salesLineRef = useRef<HTMLDivElement>(null);

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

//     useEffect(() => {
//         setupAnimation(salesLineRef.current);
//     }, [activeButton]);

//     const renderSalesInfo = () => (
//         <div className="running-line__sales-line">
//             <div className="running-line__sales-container" ref={salesLineRef}>
//                 {duplicatedManagerData.map((item, index) => (
//                     <div className="running-line__wrapper" key={index}>
//                         <div className="running-line__scrolling">
//                             <div className="running-line__content-block">
//                                 <span className="running-line__sales-title">{item.name}</span>
//                                 <span className="running-line__sales-amount">{activeButton === 'sales' ? item.salesAmount : item.countTransactions}</span>
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

//             <div className="running-line__container running-line__container_sizes">{renderSalesInfo()}</div>
//         </div>
//     );
// };

// export default ManagerRunningLine;
