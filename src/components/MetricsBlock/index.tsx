import './MetricsBlock.scss';

interface IMetricsBlockProps {
    metrics: {
        totalPayments: number;
        yearlyPaymentsPercentage: number;
        averageCheck: number;
        conversionRate: number;
    };
}

const MetricsBlock = ({ metrics }: IMetricsBlockProps) => {
    return (
        <div className="metrics-block">
            <div className="metrics-block__metric-wrap">
                <span>Количество оплат в рублях</span>
                <span>{metrics.totalPayments}</span>
            </div>
            <div className="metrics-block__metric-wrap">
                <span>Процент годовых оплат</span>
                <span>{metrics.yearlyPaymentsPercentage.toFixed(2)}%</span>
            </div>
            <div className="metrics-block__metric-wrap">
                <span>Средний чек</span>
                <span>{metrics.averageCheck.toFixed(2)}</span>
            </div>
            <div className="metrics-block__metric-wrap">
                <span>Процент конверсии лидов</span>
                <span>{metrics.conversionRate.toFixed(2)}%</span>
            </div>
        </div>
    );
};

export default MetricsBlock;
