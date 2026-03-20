import { Feature } from "@/types/feature";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";

const SingleFeature = ({ feature, language }: { feature: Feature; language: string }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          <AnimatedText>
            {t18n(`features.items.${title}`, language)}
          </AnimatedText>
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          <AnimatedText>
            {t18n(`features.items.${title}_desc`, language)}
          </AnimatedText>
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
