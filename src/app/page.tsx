import { redirect } from 'next/navigation';

export default function RootPage() {
  // Перенаправляем на английскую версию
  redirect('/en');
}