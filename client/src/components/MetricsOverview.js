// MetricsOverview.tsx
import React from 'react';

const MetricsOverview = () => {
  // Sample metrics data
  const metrics = {
    cpuUsage: '45%',
    networkTraffic: '120MB/s',
    alarms: 3,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Metrics Overview</h2>
      <div className="mb-2">
        <strong>CPU Usage:</strong> {metrics.cpuUsage}
      </div>
      <div className="mb-2">
        <strong>Network Traffic:</strong> {metrics.networkTraffic}
      </div>
      <div>
        <strong>Alarms:</strong> {metrics.alarms}
      </div>
    </div>
  );
};

export default MetricsOverview;
