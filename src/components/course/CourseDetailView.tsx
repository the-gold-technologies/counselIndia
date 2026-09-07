"use client";
import React, { useState } from "react";
import { CourseDetailData } from "./data/courseDetailData";
import CourseHero from "./CourseHero";
import CourseHighlights from "./CourseHighlights";
import CourseBenefits from "./CourseBenefits";
import CourseCtaBox from "./CourseCtaBox";
import CourseAboutObjectives from "./CourseAboutObjectives";
import CourseCredentialsTabs from "./CourseCredentialsTabs";
import CourseCurriculum from "./CourseCurriculum";
import CourseWhoCanJoin from "./CourseWhoCanJoin";
import CourseScholarship from "./CourseScholarship";
import CourseFaculty from "./CourseFaculty";
import CourseReferEarn from "./CourseReferEarn";
import CourseTestimonials from "./CourseTestimonials";
import CoursePartners from "./CoursePartners";
import CourseFaq from "./CourseFaq";
import CourseBottomCta from "./CourseBottomCta";
import CourseBrochureModal from "./CourseBrochureModal";
import CourseSocialShare from "./CourseSocialShare";

interface Props {
  course: CourseDetailData;
}

export default function CourseDetailView({ course }: Props) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* 1. Hero Section */}
      <CourseHero
        course={course}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* 2. Key Highlights 6-card Grid */}
      <CourseHighlights highlights={course.highlights} />

      {/* 3. Course Benefits & Overview */}
      <CourseBenefits benefits={course.benefits} />

      {/* 4. Career Expert CTA Box */}
      <CourseCtaBox phone={course.phone} />

      {/* 5. About this course & Objectives */}
      <CourseAboutObjectives
        about={course.about}
        learningObjectives={course.learningObjectives}
      />

      {/* 6. Certification & Recommendation Letter Tabs */}
      <CourseCredentialsTabs credentials={course.credentials} />

      {/* 7. Curriculum & Stats */}
      <CourseCurriculum curriculum={course.curriculum} />

      {/* 8. Who All Can Join */}
      <CourseWhoCanJoin audience={course.whoCanJoin} />

      {/* 9. Up to 30% Scholarship Section */}
      <CourseScholarship scholarship={course.scholarship} phone={course.phone} />

      {/* 10. Faculty Mentors */}
      <CourseFaculty faculty={course.faculty} />

      {/* 11. Refer & Earn Banner */}
      <CourseReferEarn referEarn={course.referEarn} />

      {/* 12. Student Success Stories / Testimonials */}
      <CourseTestimonials reviews={course.reviews} />

      {/* 13. Placement & Hiring Partners */}
      <CoursePartners />

      {/* 14. Frequently Asked Questions */}
      <CourseFaq faqs={course.faqs} />

      {/* 15. Bottom Brochure Download Banner */}
      <CourseBottomCta onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* 16. Floating Social Share */}
      <CourseSocialShare />

      {/* 17. Brochure Download Lead Modal */}
      <CourseBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        courseName={course.name}
      />
    </main>
  );
}
