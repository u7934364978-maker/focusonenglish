import OnboardingFlow from "@/components/onboarding/OnboardingFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personaliza tu experiencia | Focus English",
  description: "Configura tus objetivos y nivel de inglés para empezar tu camino al éxito.",
};

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
