type Image = {
  alternativeText: string
  url: string
}

type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

type ConceptItem = {
  title: string
}

type ModuleItem = {
  title: string
  subtitle: string
  description: string
}

type SocialLink = {
  title: string
  url: string
}

export type Review = {
  id?: number
  name: string
  text: string
  photo: {
    url: string
  }
}

export type Author = {
  description: string
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type AboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptItem[]
}

export type SectionModulesProps = {
  title: string
  modules: ModuleItem[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Array<{
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
