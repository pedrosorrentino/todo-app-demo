import { FileCheck, FileWarning, Flame, Home, ListTodo } from 'lucide-react';

export const IconLucide = ({
  name,
  color,
  size,
  strokeWidth,
}: {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}) => {
  switch (name) {
    case 'home':
      return <Home color={color} size={size} strokeWidth={strokeWidth} />;
    case 'task':
      return <ListTodo color={color} size={size} strokeWidth={strokeWidth} />;
    case 'important':
      return <Flame color={color} size={size} strokeWidth={strokeWidth} />;
    case 'complete':
      return <FileCheck color={color} size={size} strokeWidth={strokeWidth} />;
    case 'incomplete':
      return (
        <FileWarning color={color} size={size} strokeWidth={strokeWidth} />
      );
    default:
      return <Home color={color} size={size} strokeWidth={strokeWidth} />;
  }
};
