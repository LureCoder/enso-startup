// Section visibility configuration

interface SectionVisibilityConfig {
  hero: boolean;
  features: boolean;
  video: boolean;
  brands: boolean;
  aboutSectionOne: boolean;
  aboutSectionTwo: boolean;
  testimonials: boolean;
  pricing: boolean;
  blog: boolean;
  contact: boolean;
}

const sectionConfig: SectionVisibilityConfig = {
  hero: true,
  features: true,
  video: true,
  brands: true,
  aboutSectionOne: true,
  aboutSectionTwo: true,
  testimonials: true,
  pricing: false,
  blog: true,
  contact: false
};

export default sectionConfig;
