import React from 'react';
import MainCard from '../MainCard/MainCard';
import Lines from '../Lines/Lines';
import TierBox from '../TierBox/TierBox';
import ChatBox from '../ChatBox/ChatBox';
import Tier from '../Tier/Tier';
import TierFeatCard from '../TierFeatCard/TierFeatCard';
import CalculatorBox from '../CalculatorBox/CalculatorBox';
import LookingForPersonalBar from '../LookingForPersonalBar/LookingForPersonalBar';

export default function Pricing(props: any) {
  var currency = '$';
  return (
    <>
      <MainCard
        title="Use anywhere. Cancel anytime. First Month free"
        subtitle="All of our plans include:"
      >
        <Lines> Unlimited tasks</Lines>
        <Lines> Unlimited projects</Lines>
        <Lines> 250GB of file storage</Lines>
        <Lines> Powerful integrations</Lines>
        <Lines> Desktop and mobile apps</Lines>
      </MainCard>
      <TierBox>
        <Tier
          title="Essentials"
          subtitle="The essentials to get your team up and running"
          price="4.5"
          currency={currency}
        >
          <TierFeatCard title="Unlimited Tracks"></TierFeatCard>
          <TierFeatCard title="Unlimited Projects"></TierFeatCard>
          <TierFeatCard title="Assignees + Due Dates"></TierFeatCard>
          <TierFeatCard title="Essential Features">
            <Lines> Commenting</Lines>
            <Lines> File Uploads (Unlimited)</Lines>
            <Lines> Tagging</Lines>
            <Lines> Filtering</Lines>
            <Lines> Search</Lines>
          </TierFeatCard>
          <TierFeatCard
            title="Advanced Security"
            img="info-circle-solid.svg"
          ></TierFeatCard>
        </Tier>
        <Tier
          title="Everything (Best Value)"
          subtitle="everything you need to help your team achieve more together."
          price="4.5"
          currency={currency}
          extra="Everything in essentials, plus:"
        >
          <TierFeatCard title="Start Dates + Timelines"></TierFeatCard>
          <TierFeatCard
            title="Free Guest Accounts (Unlimited)"
            pretitle="Cooming soon"
          ></TierFeatCard>
          <TierFeatCard title="Workgroups for differentes teams and departaments"></TierFeatCard>
          <TierFeatCard title="Advanced Reporting">
            <Lines> Project Timelines</Lines>
            <Lines> Open and completed tasks...</Lines>
            <Lines> Team workload management...</Lines>
          </TierFeatCard>
          <TierFeatCard
            title="Advanced Security"
            img="info-circle-solid.svg"
          ></TierFeatCard>
        </Tier>
        <Tier
          title="Enterprise"
          subtitle="Everything we offer, plus additional security, control and support."
          price="4.5"
          currency={currency}
          extra="Everything in essentials, plus:"
        >
          <TierFeatCard title="SAML Single Sign-On(SSO)"></TierFeatCard>
          <TierFeatCard title="Deducated Training + Account Manager"></TierFeatCard>
          <TierFeatCard title="Priority Support"></TierFeatCard>
          <TierFeatCard title="Advanced Controls">
            <Lines> Full data export</Lines>
            <Lines> Cross-regional backups</Lines>
            <Lines> User provisioning and deprovision...</Lines>
          </TierFeatCard>
          <TierFeatCard
            title="Advanced Security"
            img="info-circle-solid.svg"
          ></TierFeatCard>
          <TierFeatCard title="99.9% Uptime SLA"></TierFeatCard>
        </Tier>
      </TierBox>
      <ChatBox></ChatBox>
      <CalculatorBox inputPrice="35.91" currency={currency}></CalculatorBox>
      <LookingForPersonalBar></LookingForPersonalBar>
    </>
  );
}
