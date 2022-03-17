import React from "react";
import { Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function LineChart (props) {
    const datesReveresed = (props.dates).reverse();
    const renderIt = props.render;
    return (
        <div>
            {renderIt &&  
            <Line 
                data={
                    {
                        labels: datesReveresed,
                        datasets: [{
                            label: props.inputName,
                            data: props.values,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                }
                height={1100}
                width={1500}
            />}
        </div>);
}