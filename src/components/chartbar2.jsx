import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Dusun 1',
    A: 120,
    B: 20,
    fullMark: 150,
  },
  {
    subject: 'Dusun 2',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Dusun 3',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Dusun 4',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Dusun 5',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Dusun 6',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Dusun 7',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const customOrder = ['Dusun 7', 'Dusun 6', 'Dusun 5', 'Dusun 1'];

// Sort the data array based on the custom order
const sortedData = [...data].sort((a, b) => customOrder.indexOf(a.subject) - customOrder.indexOf(b.subject));

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={sortedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#97ACD1" fill="#97ACD1" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}