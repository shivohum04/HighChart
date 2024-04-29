import React from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'antd';
import { Typography } from 'antd';
import './pages.css';
const { Title } = Typography;

const SelectData = ({ onSelect }) => { 
  const[title,setTitle]=useState('Select Dataset');
  const onCardClick = (dataset) => {
    onSelect(dataset);
    setTitle(dataset);
    if (dataset==='monthlySales'){
      setTitle('Sales');
    }
    else if(dataset==='population'){
      setTitle('Population vs Age');
    }
    else if(dataset==='expenditure'){
      setTitle('Personal Expenses');
    }
    else if(dataset==='websiteTraffic'){
      setTitle('Website Usage');
    }
    else if(dataset==='employeeSkill'){
      setTitle('Employee by Skillset')
    }
  };

  return (
    <>
      <Title className='page-title'>{title}</Title>
      <Row>
        <Col>
          <Card onClick={() => onCardClick('monthlySales')} className='data-card' title="Monthly sales" bordered={false}>
            Revenue by Product
          </Card>
        </Col>
        <Col>
          <Card onClick={() => onCardClick('population')}  className='data-card' title="Population" bordered={false}>
            Population distribution by Age
          </Card>
        </Col>
        <Col>
          <Card onClick={() => onCardClick('expenditure')}  className='data-card' title="Expenditure" bordered={false}>
            Expenditure allocation in household budget
          </Card>
        </Col>
        <Col>
          <Card onClick={() => onCardClick('websiteTraffic')}  className='data-card' title='Website Traffic' bordered={false}>
            Website traffic by Geographic Location
          </Card>
        </Col>
        <Col>
          <Card onClick={() => onCardClick('employeeSkill')} className='data-card' title='Employee Skill' bordered={false}>
            Employee skill distribution
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SelectData;