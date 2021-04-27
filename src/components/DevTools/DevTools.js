import React from 'react';
import LogMonitor from '@redux-devtools/log-monitor';
import { createDevTools } from '@redux-devtools/core';

const DevTools = createDevTools(<LogMonitor theme='solarized' />);

export default DevTools;