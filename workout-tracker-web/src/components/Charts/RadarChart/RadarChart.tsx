import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'

const data = [
  { subject: 'Legs', value: Math.random() * 100 },
  { subject: 'Shoulders', value: Math.random() * 100 },
  { subject: 'Chest', value: Math.random() * 100 },
  { subject: 'Back', value: Math.random() * 100 },
  { subject: 'LowerBack', value: Math.random() * 100 },
  { subject: 'Biceps', value: Math.random() * 100 },
  { subject: 'Triceps', value: Math.random() * 100 }
]

const RadarPlaceholder = () => {
  return (
    <RadarChart
      width={280}
      height={280}
      data={data}
      outerRadius="70%"
    >
      <PolarGrid stroke="rgba(255,255,255,0.2)" />
      <PolarAngleAxis
        dataKey="subject"
        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
      />
      <PolarRadiusAxis
        angle={30}
        domain={[0, 100]}
        tick={false}
        axisLine={false}
      />

      <Radar
        dataKey="value"
        stroke="var(--color-primary)"
        fill="var(--color-primary)"
        fillOpacity={0.3}
      />
    </RadarChart>
  )
}

export default RadarPlaceholder
