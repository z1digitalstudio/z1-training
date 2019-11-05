import React from 'react';
import MainCard from '../MainCard/MainCard';
import Lines from '../../LayoutOne/Lines/Lines';
import TierBox from '../Tier/TierBox/TierBox';
import ChatBox from '../ChatBox/ChatBox';
import Tier from '../Tier/Tier';
import TierFeatCard from '../Tier/TierFeatCard/TierFeatCard';
import CalculatorBox from '../CalculatorBox/CalculatorBox';
import LookingForPersonalBar from '../LookingForPersonalBar/LookingForPersonalBar';
import CommonQuestions from '../CommonQuestions/CommonQuestions';
import Question from '../Question/Question';
import CommonQuestionSection from '../CommonQuestions/CommonQuestionSection/CommonQuestionSection';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import BrandItem from '../BrandCarousel/BrandItem/BrandItem';
import PayMethods from '../../LayoutTwo/PayMethods/PayMethods';

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
      <PayMethods></PayMethods>
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
      <BrandCarousel>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
      </BrandCarousel>
      <CommonQuestions>
        <CommonQuestionSection name="General">
          <Question
            question="How does the free trial work?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="true"
          ></Question>
          <Question
            question="Can we cancel at any time?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="false"
          ></Question>
          <Question
            question="Do you support guest accounts?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="false"
          ></Question>
        </CommonQuestionSection>
        <CommonQuestionSection name="Billing">
          <Question
            question="What are my payment options?"
            answer="
                    With monthly billing, you must pre-pay for the next month by credit card.
                    With annual billing, you can always pay for the next year by credit card. We’re also 
                    happy to help annual customers pay quarterly or every six months rather than yearly. 
                    If you’re an annual billing customer and you’d like to change your payment 
                    frequency just write us at help@getflow.com.
                    With our enterprise plan you can pay quarterly, every six months, or yearly 
                    via credit card, ACH, or wire transfer.
                    "
            toggleSpan="true"
          ></Question>
          <Question
            question="What currency can I pay in?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="false"
          ></Question>
          <Question
            question="How does adding and removing licenses work?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="false"
          ></Question>
          <Question
            question="Do you offer discounts for education or non-profits?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="false"
          ></Question>
          <Question
            question="What your refund policy?"
            answer="
                    Try us free for 30 days! If you enjoy your Flow trial, do nothing 
                    and your membership will automatically continue for as long as you 
                    choose to remain a member. Cancel anytime before your trial ends and 
                    you won’t be charged. There’s no complicated contract, no cancellation 
                    fees, and no commitment. Cancel online anytime, 24 hours a day.
                    "
            toggleSpan="false"
          ></Question>
        </CommonQuestionSection>
      </CommonQuestions>
    </>
  );
}
