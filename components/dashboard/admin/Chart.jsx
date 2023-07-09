import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
const BarChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })

  useEffect(() => {
    setChartData({
      labels: [
        'Completed Percentage (75%)',
        'Incomplete Percentage (25%)',
      ],
      datasets: [
        {
          label: 'Registered Students',
          data: [75,25],
          backgroundColor: [
            'rgba(118, 44, 84, 1)',
            'rgba(251, 228, 244, 1)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(118, 44, 84, 1)',
            'rgba(251, 228, 244, 1)',
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    })
  }, [])

  return (
    <div className='w-[100%] flex justify-between'>
      {/* <h2>Bar Chart Example</h2> */}
      <Doughnut data={chartData} />
      {/* <Pie data={chartData} /> */}
    </div>
  )
}

export default BarChart
