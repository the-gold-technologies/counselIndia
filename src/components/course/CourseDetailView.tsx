"use client";
import React, { useState } from "react";
import { CourseDetailData } from "@/types/course";
import CourseHero from "./CourseHero";
import CourseHighlights from "./CourseHighlights";
import CourseBenefits from "./CourseBenefits";
import CourseCtaBox from "./CourseCtaBox";
import CourseAboutObjectives from "./CourseAboutObjectives";
import CourseCredentialsTabs from "./CourseCredentialsTabs";
import CourseCurriculum from "./CourseCurriculum";
import CourseProgramBenefit from "./CourseProgramBenefit";
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
      <CourseHero course={course} onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* 2. Key Highlights */}
      {course.highlights && course.highlights.length > 0 && (
        <CourseHighlights highlights={course.highlights} />
      )}

      {/* 3. Course Benefits & Overview */}
      {course.benefits && course.benefits.length > 0 && (
        <CourseBenefits benefits={course.benefits} />
      )}

      {/* 4. Career Expert CTA Box */}
      <CourseCtaBox phone={course.phone || "+918031320449"} />

      {/* 5. About this course & Objectives */}
      {((course.about && course.about.length > 0) ||
        (course.learningObjectives && course.learningObjectives.length > 0)) && (
        <CourseAboutObjectives
          about={course.about || []}
          learningObjectives={course.learningObjectives || []}
          skillIndiaAdvantage={course.skillIndiaAdvantage}
        />
      )}

      {/* 6. Certification & Recommendation Letter Tabs */}
      {course.credentials && course.credentials.length > 0 && (
        <CourseCredentialsTabs credentials={course.credentials} />
      )}

      {/* 7. Curriculum & Stats */}
      {course.curriculum &&
        ((course.curriculum.modules && course.curriculum.modules.length > 0) ||
          (course.curriculum.stats && course.curriculum.stats.length > 0)) && (
          <CourseCurriculum
            curriculum={{
              totalSessions: course.curriculum.totalSessions || "",
              totalHours: course.curriculum.totalHours || "",
              stats: course.curriculum.stats || [],
              modules: (course.curriculum.modules || []).map((m) => ({
                title: m.title,
                topics: m.topics || [],
              })),
            }}
          />
        )}

      {/* 8. How will this program benefit you? */}
      {course.programBenefit && course.programBenefit.length > 0 && (
        <CourseProgramBenefit programBenefit={course.programBenefit} />
      )}

      {/* 9. Who All Can Join */}
      {course.whoCanJoin && course.whoCanJoin.length > 0 && (
        <CourseWhoCanJoin audience={course.whoCanJoin} />
      )}

      {/* 10. Scholarship Section */}
      {course.scholarship && course.scholarship.points && course.scholarship.points.length > 0 && (
        <CourseScholarship
          scholarship={course.scholarship}
          phone={course.phone || "+918031320449"}
        />
      )}

      {/* 11. Faculty Mentors */}
      {course.faculty && course.faculty.length > 0 && <CourseFaculty faculty={course.faculty} />}

      {/* 12. Refer & Earn Banner */}
      {course.referEarn && <CourseReferEarn referEarn={course.referEarn} />}

      {/* 13. Student Success Stories / Testimonials */}
      {course.reviews && course.reviews.length > 0 && (
        <CourseTestimonials reviews={course.reviews} />
      )}

      {/* 14. Placement & Hiring Partners */}
      {course.learnersWorkAt && course.learnersWorkAt.length > 0 && (
        <CoursePartners logos={course.learnersWorkAt} />
      )}

      {/* 15. Frequently Asked Questions */}
      {course.faqs && course.faqs.length > 0 && <CourseFaq faqs={course.faqs} />}

      {/* 16. Bottom Brochure Download Banner */}
      <CourseBottomCta onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* 17. Floating Social Share */}
      <CourseSocialShare />

      {/* 18. Brochure Download Lead Modal */}
      <CourseBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        courseName={course.name}
      />
    </main>
  );
}
