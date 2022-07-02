import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Icon from '../components/Icon/Icon';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
};

const defaultArgs = {
  position: 'relative',
  appIcon: 'https://cashmere.healthcatalyst.net/assets/CashmereAppLogo.svg',
  brandIcon: 'https://cashmere.healthcatalyst.net/assets/TriFlame.svg',
  cobrandIcon: 'https://static.wixstatic.com/media/d6aae0_4e754588d0214c17bac9bff8ef52f69b~mv2.png/v1/fill/w_310,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HYBRID-Cloud-allGray_edited.png',
  cobrandColor: 'light',
  homeUri: 'http://example.com/',
  linkContent: [
    <div className="hc-navbar-link">
      <a class="navbar-link force-active" title="Home"> 
        Home
      </a>
      <a class="navbar-link" title="Home"> 
        Reports
      </a>
    </div>
  ],
  rightContent: [
    <div class="hc-navbar-right-container">
      <Icon icon="fa-question-circle-o" className="hc-navbar-icon" tabIndex="0" aria-hidden="true" size="medium"/>
      <span class="hc-navbar-vertical-separator"></span>
      <div tabIndex="0" class="hc-navbar-username ng-star-inserted">
        <span>
          <span>Christine K.</span>
          <br/>
          <span class="hc-navbar-username-subtext">Millrock Hospital</span>
        </span>
        &nbsp;<Icon icon="fa-angle-down" aria-hidden="true"/>
      </div>
    </div>
  ]
};


const Template = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
};

export const Cobrand = Template.bind({});
Cobrand.args = {
  ...defaultArgs,
  appIcon: <span>Hybrid Outcomes</span>,
  brandIcon: <Icon icon="fa-database" size="large" />,
  cobrandIcon: 'https://static.wixstatic.com/media/d6aae0_4e754588d0214c17bac9bff8ef52f69b~mv2.png/v1/fill/w_310,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HYBRID-Cloud-allGray_edited.png',
  linkContent: [
  ],
  rightContent: [
    <div tabIndex="0" class="hc-navbar-username">
      <span class="hc-text-ellipsis">
        Christine K.
      </span>
      &nbsp;<Icon icon="fa-angle-down" />
    </div>]
};