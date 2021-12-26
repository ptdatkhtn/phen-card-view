import React from 'react';

import VotingRadar from './index';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Custom/VotingRadar',
    component: VotingRadar,
}

const Template = (args) => <VotingRadar {...args}/>

export const Example = Template.bind({})
Example.args = {
    gid: '293', 
    radarId: '194688',
    pid: '273e4c15-5e07-43f4-96a2-2f5c28b89f17'
}