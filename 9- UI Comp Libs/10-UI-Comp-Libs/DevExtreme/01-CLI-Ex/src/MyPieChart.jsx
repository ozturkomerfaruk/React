import { PieChart, Series } from 'devextreme-react/pie-chart';
const billionaires = [
    {
        country: "China",
        amount: 1002
    },
    {
        country: "United States",
        amount: 716
    },
    {
        country: "India",
        amount: 215
    },
    {
        country: "United Kingdom",
        amount: 150
    },
    {
        country: "Germany",
        amount: 145
    }
];
 
export default function MyPieChart() {
    return (
        <PieChart
            dataSource={billionaires}
            type="doughnut"
        >
            <Series 
                argumentField="country" 
                valueField="amount"
            >
            </Series>
        </PieChart>
    ); 
}
