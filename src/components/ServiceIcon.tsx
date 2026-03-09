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
};

interface ServiceIconProps extends LucideProps {
  name: string;
}

export default function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name] || Wrench;
  return <Icon {...props} />;
}
