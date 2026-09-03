"use client";
import React from "react";
import { EventDetail } from "../data/eventDetailData";
import EventDetailHero from "./EventDetailHero";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailOverview from "./EventDetailOverview";
import EventSpeakers from "./EventSpeakers";
import EventBenefitsAndFaq from "./EventBenefitsAndFaq";
import EventLimitedSeatsCTA from "./EventLimitedSeatsCTA";

interface EventDetailViewProps {
  event: EventDetail;
}

export default function EventDetailView({ event }: EventDetailViewProps) {
  return (
    <div className="event-detail-page-wrapper bg-white min-vh-100">
      <EventDetailHero banner={event.banner} name={event.name} />
      <div className="container custom-container">
        <EventDetailHeader
          address={event.address}
          date={event.date}
          time={event.time}
        />
        <EventDetailOverview event={event} />
      </div>
      <EventSpeakers speakers={event.speakers} />
      <EventBenefitsAndFaq
        keyBenefits={event.keyBenefits}
        faqs={event.faqs}
      />
      <EventLimitedSeatsCTA
        speakerCount={event.speakers?.length || 2}
        price={event.price}
        paymentLink={event.paymentLink}
      />
    </div>
  );
}
