import React from 'react';
import './styles/LocationButton.scss';
import { Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';

const LocationButton = () => (
  <Button
    size="middle"
    className="location-btn"
    shape="circle"
    icon={<AimOutlined />}
  />
);

export default LocationButton;
