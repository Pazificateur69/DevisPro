import {
  Blinds,
  Droplets,
  Home,
  Bug,
  Thermometer,
  Sun,
  DoorOpen,
  Flame,
  Wrench,
  ThermometerSun,
  Zap,
  Lock,
  ShieldCheck,
  Wind,
  Paintbrush,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Blinds,
  Droplets,
  Home,
  Bug,
  Thermometer,
  Sun,
  DoorOpen,
  Flame,
  Wrench,
  ThermometerSun,
  Zap,
  Lock,
  ShieldCheck,
  Wind,
  Paintbrush,
};

interface ServiceIconProps extends LucideProps {
  name: string;
}

export default function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name] || Wrench;
  return <Icon {...props} />;
}
